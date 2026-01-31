// État global
let themes = [];
let currentTheme = null;
let currentSlideIndex = 0;
let slidesContent = [];

// Éléments DOM
const themeMenu = document.getElementById('theme-menu');
const themeList = document.getElementById('theme-list');
const slideshowContainer = document.getElementById('slideshow-container');
const slideContent = document.getElementById('slide-content');
const themeTitle = document.getElementById('theme-title');
const counter = document.getElementById('slide-counter');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Initialisation
function init() {
    // Charger les thèmes depuis les données embarquées
    themes = THEMES_DATA.themes;
    renderThemeList();
}

// Afficher la liste des thèmes
function renderThemeList() {
    themeList.innerHTML = themes.map(theme => `
        <div class="theme-card" onclick="selectTheme('${theme.id}')">
            <h3>${theme.title}</h3>
            <p>${theme.description}</p>
            <span class="slide-count">${theme.slides.length} slide${theme.slides.length > 1 ? 's' : ''}</span>
        </div>
    `).join('');
}

// Sélectionner un thème et charger ses slides
function selectTheme(themeId) {
    currentTheme = themes.find(t => t.id === themeId);
    if (!currentTheme) return;

    // Les slides sont déjà dans les données
    slidesContent = currentTheme.slides;

    // Construire la liste des chapitres pour le sommaire
    buildChapterList();

    // Afficher le diaporama
    currentSlideIndex = 0;
    themeTitle.textContent = currentTheme.title;
    showSlideshow();
    showSlide(0);
}

// Afficher le diaporama (cacher le menu)
function showSlideshow() {
    themeMenu.style.display = 'none';
    slideshowContainer.style.display = 'flex';
    progressBar.style.display = 'block';
}

// Afficher le menu des thèmes (cacher le diaporama)
function showThemeMenu() {
    slideshowContainer.style.display = 'none';
    progressBar.style.display = 'none';
    themeMenu.style.display = 'block';
    currentTheme = null;
    slidesContent = [];
}

// Afficher une slide spécifique
function showSlide(index) {
    if (index < 0 || index >= slidesContent.length) return;

    currentSlideIndex = index;
    
    // Afficher le contenu
    slideContent.innerHTML = slidesContent[index];
    slideContent.classList.remove('fade-in');
    void slideContent.offsetWidth; // Force reflow
    slideContent.classList.add('fade-in');

    // Mettre à jour le compteur
    counter.textContent = `${index + 1} / ${slidesContent.length}`;

    // Mettre à jour la barre de progression
    const progressPercent = ((index + 1) / slidesContent.length) * 100;
    progress.style.width = `${progressPercent}%`;

    // Mettre à jour l'état des boutons
    updateControls();
}

// Changer de slide (delta: -1 ou +1)
function changeSlide(delta) {
    const newIndex = currentSlideIndex + delta;
    if (newIndex >= 0 && newIndex < slidesContent.length) {
        showSlide(newIndex);
    }
}

// Aller directement à une slide
function goToSlide(index) {
    if (index >= 0 && index < slidesContent.length) {
        showSlide(index);
    }
}

// Mettre à jour l'état des boutons
function updateControls() {
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slidesContent.length - 1;
}

// Navigation au clavier
document.addEventListener('keydown', (e) => {
    // Ignorer si on est dans le menu des thèmes
    if (!currentTheme) return;

    // Ignorer si on est dans un input
    if (e.target.tagName === 'INPUT') return;

    switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
            e.preventDefault();
            changeSlide(1);
            break;
        case 'ArrowLeft':
        case 'Backspace':
            e.preventDefault();
            changeSlide(-1);
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(0);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(slidesContent.length - 1);
            break;
        case 'Escape':
            e.preventDefault();
            if (sommaireVisible) {
                hideSommaire();
            } else if (slidePickerVisible) {
                hideSlidePicker();
            } else {
                showThemeMenu();
            }
            break;
        case 'g':
            // Raccourci "g" pour ouvrir le sélecteur de slide
            if (!slidePickerVisible && !sommaireVisible) {
                e.preventDefault();
                showSlidePicker();
            }
            break;
        case 's':
            // Raccourci "s" pour ouvrir le sommaire
            if (!sommaireVisible && !slidePickerVisible) {
                e.preventDefault();
                showSommaire();
            }
            break;
    }
});

// Navigation à la molette de souris
let wheelThrottle = false;
document.addEventListener('wheel', (e) => {
    // Ignorer si on est dans le menu des thèmes
    if (!currentTheme) return;

    // Ignorer si on est dans le picker
    if (slidePickerVisible) return;

    // Ignorer si on scroll dans le contenu de la slide
    const slideContentEl = document.getElementById('slide-content');
    if (slideContentEl && slideContentEl.contains(e.target)) {
        // Permettre le scroll normal si le contenu déborde
        const hasOverflow = slideContentEl.scrollHeight > slideContentEl.clientHeight;
        if (hasOverflow) {
            // Vérifier si on est au début ou à la fin du scroll
            const atTop = slideContentEl.scrollTop === 0;
            const atBottom = slideContentEl.scrollTop + slideContentEl.clientHeight >= slideContentEl.scrollHeight - 1;

            // Si on scroll vers le haut et on n'est pas en haut, laisser scroller
            if (e.deltaY < 0 && !atTop) return;
            // Si on scroll vers le bas et on n'est pas en bas, laisser scroller
            if (e.deltaY > 0 && !atBottom) return;
        }
    }

    // Throttle pour éviter les changements trop rapides
    if (wheelThrottle) return;
    wheelThrottle = true;
    setTimeout(() => { wheelThrottle = false; }, 300);

    if (e.deltaY > 0) {
        changeSlide(1);  // Scroll vers le bas = slide suivante
    } else if (e.deltaY < 0) {
        changeSlide(-1); // Scroll vers le haut = slide précédente
    }
}, { passive: true });

// ==================== SÉLECTEUR DE SLIDE ====================
let slidePickerVisible = false;

// ==================== SOMMAIRE ====================
let sommaireVisible = false;
let chaptersIndex = []; // [{index: 0, title: "..."}, ...]

// Afficher le sélecteur de slide
function showSlidePicker() {
    if (!currentTheme) return;

    slidePickerVisible = true;
    const picker = document.getElementById('slide-picker');
    const input = document.getElementById('slide-picker-input');

    picker.classList.add('visible');
    input.value = currentSlideIndex + 1;
    input.max = slidesContent.length;
    input.select();
    input.focus();

    // Mettre à jour le total
    document.getElementById('slide-picker-total').textContent = slidesContent.length;
}

// Masquer le sélecteur de slide
function hideSlidePicker() {
    slidePickerVisible = false;
    const picker = document.getElementById('slide-picker');
    picker.classList.remove('visible');
}

// Aller à la slide sélectionnée
function goToSelectedSlide() {
    const input = document.getElementById('slide-picker-input');
    const slideNum = parseInt(input.value, 10);

    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= slidesContent.length) {
        goToSlide(slideNum - 1);
    }
    hideSlidePicker();
}

// Initialiser les événements du picker
function initSlidePicker() {
    const counter = document.getElementById('slide-counter');
    const picker = document.getElementById('slide-picker');
    const input = document.getElementById('slide-picker-input');
    const goBtn = document.getElementById('slide-picker-go');

    // Clic sur le compteur pour ouvrir le picker
    counter.addEventListener('click', () => {
        if (slidePickerVisible) {
            hideSlidePicker();
        } else {
            showSlidePicker();
        }
    });

    // Bouton Go
    goBtn.addEventListener('click', goToSelectedSlide);

    // Entrée dans l'input
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            goToSelectedSlide();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            hideSlidePicker();
        }
    });

    // Clic en dehors pour fermer
    document.addEventListener('click', (e) => {
        if (slidePickerVisible && !picker.contains(e.target) && e.target !== counter) {
            hideSlidePicker();
        }
    });
}

// ==================== FONCTIONS SOMMAIRE ====================

// Parser les slides pour trouver les chapitres
function buildChapterList() {
    chaptersIndex = [];
    const sommaireBtn = document.getElementById('sommaire-btn');

    slidesContent.forEach((slide, index) => {
        // Chercher class="chapitre" dans h1 ou h2
        const match = slide.match(/<h[12][^>]*class="chapitre"[^>]*>([^<]+)<\/h[12]>/i);
        if (match) {
            chaptersIndex.push({
                index: index,
                title: match[1].trim()
            });
        }
    });

    // Masquer le bouton si aucun chapitre
    if (chaptersIndex.length === 0) {
        sommaireBtn.classList.add('hidden');
    } else {
        sommaireBtn.classList.remove('hidden');
        renderSommaire();
    }
}

// Générer le HTML du sommaire
function renderSommaire() {
    const list = document.getElementById('sommaire-list');
    list.innerHTML = chaptersIndex.map((ch) =>
        `<li onclick="goToChapter(${ch.index})">
            <span>${ch.title}</span>
            <span class="slide-num">slide ${ch.index + 1}</span>
        </li>`
    ).join('');
}

// Naviguer vers un chapitre
function goToChapter(index) {
    goToSlide(index);
    hideSommaire();
}

// Afficher le sommaire
function showSommaire() {
    if (!currentTheme || chaptersIndex.length === 0) return;
    sommaireVisible = true;
    document.getElementById('sommaire-overlay').classList.add('visible');
}

// Masquer le sommaire
function hideSommaire() {
    sommaireVisible = false;
    document.getElementById('sommaire-overlay').classList.remove('visible');
}

// Initialiser les événements du sommaire
function initSommaire() {
    const sommaireBtn = document.getElementById('sommaire-btn');
    const sommaireClose = document.getElementById('sommaire-close');
    const sommaireOverlay = document.getElementById('sommaire-overlay');

    // Clic sur le bouton sommaire
    sommaireBtn.addEventListener('click', () => {
        if (sommaireVisible) {
            hideSommaire();
        } else {
            showSommaire();
        }
    });

    // Bouton fermer
    sommaireClose.addEventListener('click', hideSommaire);

    // Clic en dehors pour fermer
    sommaireOverlay.addEventListener('click', (e) => {
        if (e.target === sommaireOverlay) {
            hideSommaire();
        }
    });
}

// Démarrer
init();
initSlidePicker();
initSommaire();
