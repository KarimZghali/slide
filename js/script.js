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
async function init() {
    await loadThemes();
    renderThemeList();
}

// Charger le fichier JSON des thèmes
async function loadThemes() {
    try {
        const response = await fetch('themes.json');
        const data = await response.json();
        themes = data.themes;
    } catch (error) {
        console.error('Erreur lors du chargement des thèmes:', error);
        themeList.innerHTML = '<p class="error">Erreur de chargement des thèmes</p>';
    }
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
async function selectTheme(themeId) {
    currentTheme = themes.find(t => t.id === themeId);
    if (!currentTheme) return;

    // Charger toutes les slides du thème
    slidesContent = [];
    for (const slideFile of currentTheme.slides) {
        try {
            const response = await fetch(`themes/${themeId}/${slideFile}`);
            const html = await response.text();
            slidesContent.push(html);
        } catch (error) {
            console.error(`Erreur de chargement: ${slideFile}`, error);
            slidesContent.push('<p class="error">Erreur de chargement de la slide</p>');
        }
    }

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
            showThemeMenu();
            break;
    }
});

// Démarrer
init();
