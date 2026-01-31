# 📚 Site Exemple SEO - Support de Cours

Ce site web a été créé comme support pédagogique pour un cours de SEO (Search Engine Optimization). Chaque fichier contient des commentaires détaillés expliquant les bonnes pratiques d'optimisation pour les moteurs de recherche.

## 📁 Structure du projet

```
seo-example/
├── index.html          # Page d'accueil
├── services.html       # Page des services
├── contact.html        # Page de contact
├── style.css           # Feuille de styles
├── robots.txt          # Instructions pour les robots
├── sitemap.xml         # Plan du site XML
└── README.md           # Ce fichier
```

## ✅ Checklist SEO couverte

### 🏷️ Balises Meta (Head)

| Élément | Fichier | Description |
|---------|---------|-------------|
| `<title>` | Tous | Titre unique par page, 50-60 caractères, mot-clé au début |
| `<meta description>` | Tous | Description unique, 150-160 caractères, incitation au clic |
| `<meta viewport>` | Tous | Obligatoire pour le mobile-first indexing |
| `<meta robots>` | Tous | Contrôle de l'indexation (index, follow, noindex, nofollow) |
| `<link canonical>` | Tous | URL canonique pour éviter le contenu dupliqué |
| `lang="fr"` | Tous | Langue du document |

### 📱 Réseaux Sociaux

| Élément | Description |
|---------|-------------|
| Open Graph (og:) | Contrôle l'affichage sur Facebook, LinkedIn |
| Twitter Cards | Contrôle l'affichage sur Twitter/X |

### 📊 Données Structurées (Schema.org / JSON-LD)

| Type | Page | Utilité |
|------|------|---------|
| LocalBusiness | index, contact | Informations entreprise locale |
| BreadcrumbList | Toutes | Fil d'Ariane dans les SERP |
| FAQPage | index | Affichage FAQ dans les résultats |
| Event | services | Affichage événements |
| Service | services | Description des services |
| WebSite | index | Barre de recherche sitelinks |
| ContactPage | contact | Page de contact |

### 🏗️ Structure HTML Sémantique

- `<header>` - En-tête du site
- `<nav>` - Navigation principale et secondaire
- `<main>` - Contenu principal unique
- `<article>` - Contenu autonome (produits, articles)
- `<section>` - Sections thématiques avec titres
- `<aside>` - Contenu complémentaire
- `<footer>` - Pied de page
- `<address>` - Informations de contact

### 📝 Hiérarchie des Titres

- **H1** : Un seul par page, contient le mot-clé principal
- **H2** : Sections principales
- **H3-H6** : Sous-sections (ordre respecté, sans saut)

### 🖼️ Optimisation des Images

| Attribut | Obligatoire | Description |
|----------|-------------|-------------|
| `alt` | ✅ | Description pour SEO et accessibilité |
| `width` / `height` | ✅ | Évite le layout shift (CLS) |
| `loading="lazy"` | Recommandé | Chargement différé sous la ligne de flottaison |
| `decoding="async"` | Recommandé | Décodage asynchrone |
| `srcset` / `sizes` | Optionnel | Images responsive |

### 🔗 Optimisation des Liens

- **Texte d'ancrage descriptif** : Pas de "cliquez ici"
- **Liens internes contextuels** : Dans le contenu
- **`rel="noopener noreferrer"`** : Sur les liens externes `target="_blank"`
- **`aria-current="page"`** : Page active dans la navigation

### ♿ Accessibilité (Impact SEO indirect)

- Skip link (lien d'évitement)
- Labels sur les formulaires
- Attributs ARIA appropriés
- Contraste suffisant
- Focus visible
- Navigation au clavier

### 📱 Mobile & Performance

- Design responsive (mobile-first)
- Core Web Vitals optimisés :
  - **LCP** (Largest Contentful Paint) : Images optimisées
  - **FID** (First Input Delay) : JS non bloquant
  - **CLS** (Cumulative Layout Shift) : Dimensions fixes

### 🗺️ Fichiers Techniques

| Fichier | Emplacement | Rôle |
|---------|-------------|------|
| `robots.txt` | Racine | Instructions de crawl |
| `sitemap.xml` | Racine | Plan du site pour les moteurs |
| `favicon.ico` | Racine | Icône du site |

## 🔧 Comment utiliser ce support

### Pour les étudiants

1. **Ouvrir les fichiers HTML** dans un éditeur de code
2. **Lire les commentaires** qui expliquent chaque optimisation
3. **Inspecter avec les DevTools** pour voir la structure
4. **Valider avec les outils Google** (voir ci-dessous)

### Outils de validation recommandés

| Outil | URL | Usage |
|-------|-----|-------|
| Google Rich Results Test | https://search.google.com/test/rich-results | Données structurées |
| PageSpeed Insights | https://pagespeed.web.dev/ | Performance & Core Web Vitals |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Compatibilité mobile |
| W3C Validator | https://validator.w3.org/ | Validation HTML |
| WAVE | https://wave.webaim.org/ | Accessibilité |
| Schema Markup Validator | https://validator.schema.org/ | Schema.org |

## 📖 Points clés à retenir

### Les 10 commandements du SEO on-page

1. **Un seul H1 par page**, avec le mot-clé principal
2. **Title et meta description uniques** pour chaque page
3. **URLs canoniques** pour éviter le contenu dupliqué
4. **Données structurées** pour les rich snippets
5. **Images optimisées** avec alt descriptif
6. **Liens internes** avec ancres pertinentes
7. **Mobile-first** et responsive design
8. **HTTPS obligatoire** (non montré ici mais essentiel)
9. **Vitesse de chargement** optimisée
10. **Contenu de qualité** unique et utile

### Ce qui n'est PAS couvert (SEO off-page)

- Backlinks (liens entrants)
- Google My Business
- Réseaux sociaux (stratégie)
- E-A-T (Expertise, Authority, Trust)
- Link building

## 📝 Licence

Ce support pédagogique est libre d'utilisation pour l'enseignement.

---

