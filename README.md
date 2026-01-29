# Cours - Diaporama Simple

Un viewer de slides minimaliste en HTML/CSS/JS avec gestion de thèmes.

## Structure

```
📁 Cours/
├── index.html              ← Point d'entrée
├── css/style.css           ← Styles
└── js/
    ├── themes-data.js      ← Données des thèmes et slides
    └── script.js           ← Logique
```

## Utilisation

1. Ouvre `index.html` directement dans ton navigateur (double-clic)
2. Clique sur un thème pour afficher ses slides
3. Navigue avec les boutons ou le clavier

### Raccourcis clavier

| Touche | Action |
|--------|--------|
| `→` ou `Espace` | Slide suivante |
| `←` ou `Backspace` | Slide précédente |
| `Home` | Première slide |
| `End` | Dernière slide |
| `Escape` | Retour au menu |

## Ajouter un thème

Édite `js/themes-data.js` et ajoute un objet dans le tableau `themes` :

```javascript
{
    "id": "chapitre2",
    "title": "Chapitre 2",
    "description": "Description du chapitre",
    "slides": [
        `<h1>Titre slide 1</h1>
<p>Contenu...</p>`,
        `<h1>Titre slide 2</h1>
<p>Contenu...</p>`
    ]
}
```

### Format des slides

Chaque slide est une string HTML avec des backticks (`) pour le multi-ligne :

```javascript
`<h1>Titre de la slide</h1>
<p>Contenu de la slide...</p>
<ul>
    <li>Point 1</li>
    <li>Point 2</li>
</ul>`
```

Tu peux utiliser : titres, paragraphes, listes, images, code, blockquotes, etc.

## Personnalisation

- **Couleurs & style** → `css/style.css`
- **Comportement** → `js/script.js`
- **Contenu** → `js/themes-data.js`
