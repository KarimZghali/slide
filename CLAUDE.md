# CLAUDE.md

## Project Overview

A minimalist slideshow viewer for course content, built with vanilla HTML/CSS/JS. No dependencies, no build step, works directly in the browser.

## Structure

```
├── index.html              # Entry point
├── css/style.css           # Styles (dark theme, responsive)
└── js/
    ├── themes-data.js      # Theme and slide content (edit this to add content)
    └── script.js           # Navigation logic
```

## Key Files

- **js/themes-data.js**: Contains all themes and slides as embedded HTML strings. Edit this file to add/modify course content.
- **js/script.js**: Handles theme selection, slide navigation, and keyboard shortcuts.
- **css/style.css**: Dark gradient theme, card-based theme menu, fullscreen slide container.

## How It Works

1. User opens `index.html` → sees theme selection menu
2. Clicking a theme loads its slides from `THEMES_DATA`
3. Navigation via buttons or keyboard (←/→, Space, Escape)

## Adding Content

Add a new theme in `js/themes-data.js`:

```javascript
{
    "id": "unique-id",
    "title": "Theme Title",
    "description": "Short description",
    "slides": [
        `<h1>Slide 1</h1><p>Content...</p>`,
        `<h1>Slide 2</h1><p>Content...</p>`
    ]
}
```

## Design Decisions

- **No server required**: Data embedded in JS to avoid CORS issues with `file://`
- **No framework**: Pure vanilla JS for simplicity and zero dependencies
- **Keyboard-first**: Full navigation without mouse
