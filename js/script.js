// Gestion du diaporama
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const counter = document.getElementById('slide-counter');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Initialisation
function init() {
    showSlide(0);
    updateControls();
}

// Afficher une slide spécifique
function showSlide(index) {
    // Masquer toutes les slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Afficher la slide courante
    slides[index].classList.add('active');
    
    // Mettre à jour le compteur
    counter.textContent = `${index + 1} / ${totalSlides}`;
    
    // Mettre à jour la barre de progression
    const progressPercent = ((index + 1) / totalSlides) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Mettre à jour l'état des boutons
    updateControls();
}

// Changer de slide (delta: -1 ou +1)
function changeSlide(delta) {
    const newIndex = currentSlide + delta;
    
    if (newIndex >= 0 && newIndex < totalSlides) {
        currentSlide = newIndex;
        showSlide(currentSlide);
    }
}

// Aller directement à une slide
function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        currentSlide = index;
        showSlide(currentSlide);
    }
}

// Mettre à jour l'état des boutons
function updateControls() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Navigation au clavier
document.addEventListener('keydown', (e) => {
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
            goToSlide(totalSlides - 1);
            break;
    }
});

// Démarrer
init();
