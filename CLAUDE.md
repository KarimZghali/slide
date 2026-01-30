# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Viewer de diaporama minimaliste pour contenu de cours, construit en HTML/CSS/JS vanilla. Aucune dépendance, aucune étape de build, fonctionne directement dans le navigateur.

## Commandes

Aucune commande build/lint/test - ouvrir `index.html` directement dans un navigateur.

## Architecture

```
├── index.html          # Point d'entrée, structure DOM
├── css/style.css       # Dark theme, composants SEO, responsive
└── js/
    ├── themes-data.js  # Données : THEMES_DATA.themes[] avec slides HTML
    └── script.js       # Navigation, clavier, sélecteur de slide
```

**Flux de données :** `THEMES_DATA` (global) → `selectTheme()` → `showSlide()` → DOM

**État global dans script.js :** `themes`, `currentTheme`, `currentSlideIndex`, `slidesContent`

## Ajouter du contenu

Ajouter un thème dans `js/themes-data.js` :

```javascript
{
    "id": "unique-id",
    "title": "Titre",
    "description": "Description courte",
    "slides": [
        `<div class="slide-seo"><h1>Slide 1</h1></div>`,
        `<div class="slide-seo"><h1>Slide 2</h1></div>`
    ]
}
```

Les slides utilisent des classes CSS spécifiques définies dans `style.css` (`.slide-seo`, `.slide-tip`, `.slide-warning`, `.comparison-table`, etc.).

## Raccourcis clavier

- `→` / `Espace` / `Enter` : slide suivante
- `←` / `Backspace` : slide précédente
- `Home` / `End` : première / dernière slide
- `Escape` : retour au menu
- `G` : sélecteur de slide (go to)

## Décisions de conception

- **Pas de serveur** : données embarquées en JS pour éviter les problèmes CORS avec `file://`
- **Pas de framework** : JS vanilla pour simplicité et zéro dépendance
- **Navigation clavier-first** : navigation complète sans souris
