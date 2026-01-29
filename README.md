# Cours - Diaporama Simple

Un viewer de slides minimaliste en HTML/CSS/JS avec gestion de thèmes.

## Structure

```
📁 Cours/
├── index.html          ← Point d'entrée
├── themes.json         ← Liste des thèmes
├── css/style.css       ← Styles
├── js/script.js        ← Logique
└── themes/             ← Dossiers de thèmes
    ├── introduction/
    │   ├── slide1.html
    │   ├── slide2.html
    │   └── slide3.html
    └── chapitre1/
        ├── slide1.html
        └── slide2.html
```

## Utilisation

1. Ouvre `index.html` dans ton navigateur (via un serveur local)
2. Clique sur un thème pour afficher ses slides
3. Navigue avec les boutons ou le clavier

### ⚠️ Serveur local requis

Pour que le chargement dynamique fonctionne, lance un serveur local :

```bash
# Python 3
python3 -m http.server 8000

# Node.js (npx)
npx serve

# PHP
php -S localhost:8000
```

Puis ouvre `http://localhost:8000`

### Raccourcis clavier

| Touche | Action |
|--------|--------|
| `→` ou `Espace` | Slide suivante |
| `←` ou `Backspace` | Slide précédente |
| `Home` | Première slide |
| `End` | Dernière slide |
| `Escape` | Retour au menu |

## Ajouter un thème

1. Crée un dossier dans `themes/` (ex: `themes/chapitre2/`)
2. Ajoute tes slides HTML dedans (`slide1.html`, `slide2.html`, ...)
3. Déclare le thème dans `themes.json` :

```json
{
  "id": "chapitre2",
  "title": "Chapitre 2",
  "description": "Description du chapitre",
  "slides": ["slide1.html", "slide2.html", "slide3.html"]
}
```

## Format des slides

Chaque fichier slide est du HTML brut (pas de `<html>`, `<body>`, etc.) :

```html
<h1>Titre de la slide</h1>
<p>Contenu de la slide...</p>
<ul>
    <li>Point 1</li>
    <li>Point 2</li>
</ul>
```

Tu peux utiliser : titres, paragraphes, listes, images, code, blockquotes, etc.

## Personnalisation

- **Couleurs & style** → `css/style.css`
- **Comportement** → `js/script.js`
