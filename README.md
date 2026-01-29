# Cours - Diaporama Simple

Un viewer de slides minimaliste en HTML/CSS/JS.

## Utilisation

1. Ouvre `index.html` dans ton navigateur
2. Navigue avec les boutons ou le clavier

### Raccourcis clavier

| Touche | Action |
|--------|--------|
| `→` ou `Espace` | Slide suivante |
| `←` ou `Backspace` | Slide précédente |
| `Home` | Première slide |
| `End` | Dernière slide |

## Ajouter des slides

Dans `index.html`, ajoute une nouvelle `<div class="slide">` :

```html
<div class="slide">
    <h1>Titre de ta slide</h1>
    <p>Contenu...</p>
</div>
```

Tu peux y mettre tout le HTML que tu veux : listes, images, code, tableaux, etc.

## Personnalisation

- **Couleurs & style** → `css/style.css`
- **Comportement** → `js/script.js`
