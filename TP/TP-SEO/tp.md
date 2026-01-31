# Projet SEO - Création et Optimisation d'un Site Web

## Contexte du projet

Vous êtes consultant SEO junior dans une agence web. Un client fictif vous confie la création et l'optimisation SEO complète d'un **site vitrine de 5 à 8 pages** pour son activité.

**Thématiques au choix :**
- Restaurant / Café local
- Artisan (plombier, électricien, menuisier...)
- Coach sportif / Bien-être
- Photographe professionnel
- Association locale
- Autre (à valider avec votre formateur)

---

## Livrables attendus

À la fin du projet, vous devrez remettre :

1. **Le site web publié** sur le serveur (URL fonctionnelle)
2. **Un dossier de documentation** comprenant :
   - Votre recherche de mots-clés (tableau)
   - Votre Keyword Map
   - Votre audit technique (captures d'écran)
   - Vos données structurées JSON-LD
   - Captures d'écran des outils (PageSpeed, Search Console...)

---

## Outils gratuits à utiliser

| Outil | Usage |
|-------|-------|
| Google Keyword Planner | Recherche de mots-clés |
| Google Trends | Tendances saisonnières |
| AnswerThePublic | Questions des utilisateurs |
| Ubersuggest (version gratuite) | Analyse mots-clés |
| PageSpeed Insights | Performance |
| Lighthouse (Chrome DevTools) | Audit technique |
| Google Search Console | Indexation et performances |
| Google Analytics 4 | Comportement utilisateur |
| Rich Results Test | Validation données structurées |
| Schema Markup Validator | Validation Schema.org |
| Mobile-Friendly Test | Test responsive |
| Screaming Frog (gratuit < 500 URLs) | Crawl du site |

---

# Phase 1 : Stratégie et Recherche

## Étape 1.1 : Définir votre persona

Avant de créer du contenu, vous devez comprendre votre cible.

**À faire :**
1. Créez une fiche persona avec :
   - Prénom fictif et âge
   - Métier / Situation
   - Objectifs (que cherche-t-il ?)
   - Frustrations (quels problèmes rencontre-t-il ?)
   - Questions qu'il se pose
   - Canaux utilisés (Google, réseaux sociaux...)

**Exemple pour un plombier :**
> *Marie, 45 ans, propriétaire d'une maison à Lyon. Elle cherche un plombier fiable pour une fuite urgente. Elle a peur de se faire arnaquer sur les prix. Elle tape sur Google "plombier urgence Lyon avis".*

---

## Étape 1.2 : Recherche de mots-clés

**Objectif :** Identifier 15-20 mots-clés pertinents pour votre site.

### Instructions :

1. **Brainstorming initial** : Listez 10 termes que votre client potentiel pourrait rechercher

2. **Utilisez Google Keyword Planner** :
   - Allez sur https://ads.google.com/intl/fr_fr/home/tools/keyword-planner/
   - Entrez vos termes de brainstorming
   - Notez pour chaque mot-clé :
     - Volume de recherche mensuel
     - Niveau de concurrence (faible/moyen/élevé)

3. **Explorez les suggestions Google** :
   - Tapez vos mots-clés dans Google
   - Notez les suggestions de l'autocomplétion
   - Notez les "Recherches associées" en bas de page

4. **Utilisez AnswerThePublic** (https://answerthepublic.com) :
   - Entrez votre mot-clé principal
   - Récupérez les questions (qui, quoi, où, quand, comment, pourquoi)

### Livrable : Tableau de mots-clés

Créez un tableau avec les colonnes suivantes :

| Mot-clé | Volume | Concurrence | Type (courte/longue traîne) | Intention | Page cible |
|---------|--------|-------------|----------------------------|-----------|------------|
| plombier lyon | 2400 | Élevée | Courte | Transactionnelle | Accueil |
| plombier urgence lyon 24h | 320 | Moyenne | Longue | Transactionnelle | Services |
| comment déboucher évier | 1900 | Faible | Longue | Informationnelle | Blog |

**Types d'intention :**
- **Informationnelle** : l'utilisateur cherche une information ("comment faire...")
- **Transactionnelle** : l'utilisateur veut acheter/contacter ("plombier pas cher")
- **Navigationnelle** : l'utilisateur cherche un site précis ("leroy merlin plomberie")
- **Commerciale** : l'utilisateur compare ("meilleur plombier lyon avis")

---

## Étape 1.3 : Analyse de la concurrence

**Objectif :** Comprendre ce que font vos concurrents pour les surpasser.

### Instructions :

1. **Identifiez 3 concurrents** qui apparaissent en première page sur vos mots-clés cibles

2. **Pour chaque concurrent, analysez** :
   - Structure du site (combien de pages, quelles rubriques)
   - Longueur des contenus
   - Présence de blog
   - Types de contenus (texte, images, vidéos)
   - Points forts / Points faibles

3. **Content Gap Analysis** :
   - Quels sujets couvrent-ils que vous pourriez aussi couvrir ?
   - Quels sujets ne couvrent-ils PAS ? (opportunité !)

### Livrable : Fiche d'analyse concurrentielle

```
CONCURRENT 1 : [Nom du site]
URL :
Position sur [mot-clé principal] :
Nombre de pages :
Points forts :
Points faibles :
Ce que je peux faire mieux :
```

---

## Étape 1.4 : Architecture du site et Keyword Map

**Objectif :** Planifier la structure de votre site et attribuer un mot-clé par page.

### Règles importantes :
- **1 mot-clé principal = 1 page** (éviter la cannibalisation)
- Chaque page a aussi 2-3 mots-clés secondaires
- Structure en moins de 3 clics depuis l'accueil

### Structure recommandée (5-8 pages) :

```
Accueil (/)
├── Services (/services)
│   └── [Service spécifique] (/services/nom-service)
├── À propos (/a-propos)
├── Contact (/contact)
├── Blog (/blog)
│   └── [Article 1] (/blog/titre-article)
│   └── [Article 2] (/blog/titre-article-2)
└── Mentions légales (/mentions-legales)
```

### Livrable : Keyword Map

| Page | URL | Mot-clé principal | Mots-clés secondaires | Intention |
|------|-----|-------------------|----------------------|-----------|
| Accueil | / | plombier lyon | plombier lyon 7, artisan plombier | Transactionnelle |
| Services | /services | dépannage plomberie | fuite eau, débouchage | Transactionnelle |
| À propos | /a-propos | entreprise plomberie lyon | plombier professionnel | Informationnelle |

---

# Phase 2 : Création du Site

## Étape 2.1 : Structure HTML et hiérarchie des titres

**Objectif :** Créer une structure HTML sémantique et optimisée.

### Règles à respecter :

1. **Un seul H1 par page** - unique et contenant le mot-clé principal
2. **Hiérarchie logique** : H1 → H2 → H3 (ne pas sauter de niveau)
3. **Balise viewport** obligatoire pour le responsive :
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

### Template HTML de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Mot-clé principal] | [Nom de marque]</title>
    <meta name="description" content="[Description 150-160 caractères avec mot-clé et CTA]">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="[URL complète de la page]">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav>
            <!-- Navigation principale -->
        </nav>
    </header>

    <main>
        <h1>[Titre unique avec mot-clé]</h1>

        <section>
            <h2>[Sous-titre]</h2>
            <p>[Contenu - mot-clé dans les 100 premiers mots]</p>
        </section>
    </main>

    <footer>
        <!-- Coordonnées, liens légaux -->
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

---

## Étape 2.2 : Optimisation des balises Title et Meta Description

**Objectif :** Créer des balises qui favorisent le clic dans les résultats Google.

### Règles pour le Title :
- **50-60 caractères** maximum
- Mot-clé principal **au début**
- Format recommandé : `[Mot-clé] - [Bénéfice] | [Marque]`
- Doit donner envie de cliquer

### Règles pour la Meta Description :
- **150-160 caractères**
- Inclure le mot-clé (sera mis en gras par Google)
- Ajouter un **Call-to-Action** (Découvrez, Contactez, Obtenez...)
- Mettre en avant un **bénéfice** ou une **différenciation**

### Exemples :

**Page Accueil - Plombier Lyon :**
```html
<title>Plombier Lyon - Dépannage 24h/24 & Devis Gratuit | ProPlomb</title>
<meta name="description" content="Plombier à Lyon, intervention en urgence 24h/24. Devis gratuit en 30 min. Plus de 500 clients satisfaits. Contactez-nous au 04 XX XX XX XX.">
```

**Page Services :**
```html
<title>Dépannage Plomberie Lyon - Fuite, Débouchage, Chauffe-eau | ProPlomb</title>
<meta name="description" content="Services de plomberie à Lyon : réparation fuite d'eau, débouchage canalisation, installation chauffe-eau. Intervention rapide. Demandez votre devis gratuit !">
```

### Livrable : Tableau des balises

Complétez ce tableau pour chaque page :

| Page | Title (50-60 car.) | Meta Description (150-160 car.) |
|------|--------------------|---------------------------------|
| Accueil | | |
| Services | | |
| À propos | | |
| Contact | | |
| Blog Article 1 | | |

---

## Étape 2.3 : Rédaction du contenu SEO

**Objectif :** Rédiger du contenu optimisé pour le référencement ET pour l'utilisateur.

### Structure d'une page de contenu :

1. **Accroche** (Hook) - 2-3 phrases percutantes
   - Question qui interpelle
   - Statistique choc
   - Problème identifié

2. **Introduction** (100-150 mots)
   - Présente le sujet
   - Inclut le mot-clé principal
   - Annonce ce que le lecteur va apprendre

3. **Corps du contenu**
   - Paragraphes courts (2-3 phrases)
   - Sous-titres (H2, H3) avec mots-clés
   - Listes à puces pour la lisibilité
   - Champ sémantique riche (synonymes, termes associés)

4. **Conclusion avec CTA**
   - Résumé des points clés
   - Appel à l'action clair

### Longueur recommandée par type de page :
- Page d'accueil : 300-500 mots
- Page service : 500-800 mots
- Article de blog : 1000-1500 mots
- Page À propos : 300-500 mots

### Techniques de copywriting à utiliser :

**Formule PAS (Problem - Agitate - Solution) :**
1. **Problème** : "Vous avez une fuite d'eau en pleine nuit ?"
2. **Agitation** : "Chaque minute compte. Les dégâts des eaux peuvent coûter des milliers d'euros..."
3. **Solution** : "Notre équipe intervient 24h/24 en moins d'une heure à Lyon."

**Bonnes pratiques :**
- Utilisez le "vous" pour parler au lecteur
- Voix active plutôt que passive
- Mettez en avant les bénéfices, pas les caractéristiques
- Évitez le jargon technique

---

## Étape 2.4 : Optimisation des images

**Objectif :** Des images qui ne ralentissent pas le site et qui sont compréhensibles par Google.

### Checklist images :

1. **Nommage du fichier** :
   - ❌ `IMG_20240315_143022.jpg`
   - ✅ `plombier-intervention-urgence-lyon.jpg`

2. **Attribut alt** (obligatoire) :
   - Description de l'image en 5-10 mots
   - Inclure le mot-clé si pertinent
   - ❌ `alt="image"` ou `alt=""`
   - ✅ `alt="Plombier réparant une fuite sous un évier à Lyon"`

3. **Compression** :
   - Utilisez https://squoosh.app/ ou https://tinypng.com/
   - Objectif : < 100 Ko par image
   - Format WebP recommandé (30% plus léger)

4. **Dimensions** :
   - Adapter à la taille d'affichage réelle
   - Ne pas afficher une image 4000px en 400px

5. **Lazy loading** (pour images hors écran) :
   ```html
   <img src="image.webp" alt="Description" loading="lazy" width="800" height="600">
   ```
   ⚠️ Ne PAS mettre `loading="lazy"` sur l'image principale visible en haut de page (LCP)

### Livrable : Tableau des images

| Nom fichier | Alt text | Poids original | Poids compressé | Page |
|-------------|----------|----------------|-----------------|------|
| | | | | |

---

## Étape 2.5 : Maillage interne

**Objectif :** Créer des liens entre vos pages pour aider Google à comprendre la structure.

### Règles du maillage interne :

1. **Liens contextuels** dans le contenu (pas seulement dans le menu)
2. **Ancres descriptives** :
   - ❌ "Cliquez ici" / "En savoir plus"
   - ✅ "Découvrez nos services de dépannage plomberie"

3. **Logique de silo** :
   - La page d'accueil lie vers les pages principales
   - Les pages de services lient vers les articles de blog connexes
   - Les articles de blog lient vers les pages de services

4. **Aucune page orpheline** : chaque page doit recevoir au moins 1 lien interne

### Exemple de maillage :

```
[Accueil] → lien vers [Services] "nos prestations de plomberie"
[Accueil] → lien vers [Blog Article] "conseils pour éviter les fuites"
[Services] → lien vers [Contact] "demandez un devis gratuit"
[Blog Article] → lien vers [Services] "faites appel à un professionnel"
```

### Livrable : Schéma de maillage

Dessinez un schéma montrant les liens entre vos pages (peut être fait sur papier ou avec un outil comme draw.io).

---

## Étape 2.6 : Données structurées (Schema.org)

**Objectif :** Aider Google à mieux comprendre votre contenu et obtenir des rich snippets.

### Types de Schema à implémenter :

#### 1. LocalBusiness (pour toutes les pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ProPlomb Lyon",
  "description": "Plombier professionnel à Lyon, dépannage 24h/24",
  "url": "https://votre-site.fr",
  "telephone": "+33-4-XX-XX-XX-XX",
  "email": "contact@votre-site.fr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Rue Example",
    "addressLocality": "Lyon",
    "postalCode": "69001",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.764043,
    "longitude": 4.835659
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "19:00"
  },
  "priceRange": "€€"
}
</script>
```

#### 2. BreadcrumbList (fil d'Ariane)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://votre-site.fr/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://votre-site.fr/services"
    }
  ]
}
</script>
```

#### 3. FAQPage (pour page FAQ ou sections FAQ)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel est le tarif d'une intervention de plomberie ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tarif dépend de la nature de l'intervention. Comptez entre 80€ et 150€ pour un dépannage simple. Nous proposons un devis gratuit avant toute intervention."
      }
    },
    {
      "@type": "Question",
      "name": "Intervenez-vous en urgence le week-end ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, nous intervenons 7j/7 et 24h/24 pour les urgences plomberie à Lyon et ses environs."
      }
    }
  ]
}
</script>
```

#### 4. Article (pour les articles de blog)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Comment déboucher un évier naturellement",
  "description": "Découvrez 5 méthodes naturelles pour déboucher votre évier sans produits chimiques.",
  "author": {
    "@type": "Person",
    "name": "Jean Dupont"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ProPlomb Lyon"
  },
  "datePublished": "2024-03-15",
  "dateModified": "2024-03-20"
}
</script>
```

### Validation :
1. Allez sur https://search.google.com/test/rich-results
2. Entrez l'URL de votre page ou collez le code HTML
3. Vérifiez qu'il n'y a pas d'erreurs

### Livrable : Fichiers JSON-LD

Fournissez le code JSON-LD pour chaque page dans votre documentation.

---

# Phase 3 : Optimisation Technique

## Étape 3.1 : Création du fichier robots.txt

**Objectif :** Indiquer aux robots ce qu'ils peuvent et ne peuvent pas crawler.

### Emplacement : À la racine du site (`/robots.txt`)

### Contenu recommandé :

```
# Robots.txt pour [Nom du site]

User-agent: *
Allow: /

# Bloquer les pages non pertinentes pour le SEO
Disallow: /admin/
Disallow: /merci/
Disallow: /confirmation/
Disallow: /*?*
Disallow: /search/

# Référence au sitemap
Sitemap: https://votre-site.fr/sitemap.xml
```

### Explications :
- `User-agent: *` → règles pour tous les robots
- `Allow: /` → autoriser tout par défaut
- `Disallow:` → chemins à ne pas crawler
- `Sitemap:` → chemin vers votre sitemap

### Points de vigilance :
- ❌ Ne jamais bloquer les fichiers CSS et JS
- ❌ Ne jamais bloquer les pages importantes par erreur
- ✅ Tester dans Google Search Console

---

## Étape 3.2 : Création du fichier sitemap.xml

**Objectif :** Lister toutes les pages importantes pour faciliter l'indexation.

### Emplacement : À la racine du site (`/sitemap.xml`)

### Structure :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://votre-site.fr/</loc>
    <lastmod>2024-03-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://votre-site.fr/services</loc>
    <lastmod>2024-03-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://votre-site.fr/a-propos</loc>
    <lastmod>2024-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://votre-site.fr/contact</loc>
    <lastmod>2024-03-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://votre-site.fr/blog/comment-deboucher-evier</loc>
    <lastmod>2024-03-18</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>
```

### Règles :
- `<loc>` : URL absolue (obligatoire)
- `<lastmod>` : date de dernière modification (format YYYY-MM-DD)
- `<changefreq>` : fréquence de mise à jour (always, hourly, daily, weekly, monthly, yearly, never)
- `<priority>` : importance relative (0.0 à 1.0)

### À ne PAS inclure dans le sitemap :
- Pages en `noindex`
- Pages de remerciement
- Pages dupliquées
- Pages d'erreur

---

## Étape 3.3 : Balises d'indexation

**Objectif :** Contrôler ce que Google peut indexer.

### Pages à indexer (par défaut) :

```html
<meta name="robots" content="index, follow">
```

### Pages à NE PAS indexer :

```html
<meta name="robots" content="noindex, nofollow">
```

**Appliquer noindex sur :**
- Page de remerciement après formulaire
- Page de mentions légales (optionnel)
- Page de résultats de recherche interne
- Pages de test / staging

### Balise canonical (éviter le contenu dupliqué) :

Sur chaque page, ajoutez :
```html
<link rel="canonical" href="https://votre-site.fr/page-courante">
```

Cela indique à Google quelle est l'URL "officielle" de la page.

---

## Étape 3.4 : Optimisation des performances

**Objectif :** Obtenir de bons scores Core Web Vitals.

### Testez votre site :
1. **PageSpeed Insights** : https://pagespeed.web.dev/
2. **Lighthouse** : DevTools Chrome (F12) > onglet Lighthouse

### Objectifs Core Web Vitals :
| Métrique | Bon | À améliorer | Mauvais |
|----------|-----|-------------|---------|
| LCP (Largest Contentful Paint) | ≤ 2.5s | 2.5-4s | > 4s |
| INP (Interaction to Next Paint) | ≤ 200ms | 200-500ms | > 500ms |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | 0.1-0.25 | > 0.25 |

### Actions d'optimisation :

#### Pour le LCP (temps de chargement) :
- Compresser les images (< 100 Ko)
- Utiliser le format WebP
- Minifier CSS et JS
- Mettre le CSS critique en inline
- Utiliser un hébergement rapide

#### Pour l'INP (interactivité) :
- Différer les scripts non critiques : `<script defer src="...">`
- Éviter les animations JavaScript lourdes
- Réduire le JavaScript inutile

#### Pour le CLS (stabilité visuelle) :
- Définir width et height sur les images :
  ```html
  <img src="image.jpg" width="800" height="600" alt="...">
  ```
- Réserver l'espace pour les publicités/widgets
- Éviter les insertions de contenu au-dessus du contenu existant

### Livrable : Capture d'écran PageSpeed

Faites une capture d'écran des scores PageSpeed pour :
- Version mobile
- Version desktop

---

## Étape 3.5 : Responsive et Mobile-First

**Objectif :** Un site parfaitement utilisable sur mobile.

### Checklist Mobile :

- [ ] Texte lisible sans zoom (minimum 16px)
- [ ] Boutons/liens assez grands (minimum 48x48px avec espacement)
- [ ] Pas de scroll horizontal
- [ ] Images qui s'adaptent à l'écran
- [ ] Menu de navigation fonctionnel sur mobile
- [ ] Formulaires faciles à remplir

### Test :

- **Chrome DevTools** : F12 > icône mobile en haut à gauche

### CSS responsive de base :

```css
/* Mobile first */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablette */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Images responsive */
img {
  max-width: 100%;
  height: auto;
}
```

---

## Étape 3.6 : Structure des URLs

**Objectif :** Des URLs propres et optimisées.

### Bonnes pratiques :

| Règle | Mauvais | Bon |
|-------|---------|-----|
| Mots-clés | `/page1.html` | `/services-plomberie` |
| Séparateur | `/services_plomberie` | `/services-plomberie` |
| Casse | `/Services-Plomberie` | `/services-plomberie` |
| Longueur | `/nos-services-de-plomberie-professionnelle-a-lyon` | `/services-plomberie-lyon` |
| Caractères | `/services-plomberie-à-lyon` | `/services-plomberie-lyon` |

### Checklist URLs :
- [ ] Utiliser uniquement des minuscules
- [ ] Utiliser des tirets (-) pour séparer les mots
- [ ] Inclure le mot-clé principal
- [ ] Garder l'URL courte (< 75 caractères)
- [ ] Éviter les accents et caractères spéciaux
- [ ] Éviter les paramètres inutiles (?id=123)

---

# Phase 4 : Publication et Mesure (Semaine 4)

## Étape 4.1 : Publication avec FileZilla

### Instructions :

1. **Connexion au serveur** :
   - Ouvrez FileZilla
   - Hôte : [fourni par votre hébergeur]
   - Identifiant : [votre login]
   - Mot de passe : [votre mot de passe]
   - Port : 21 (ou 22 pour SFTP)

2. **Transfert des fichiers** :
   - À gauche : vos fichiers locaux
   - À droite : le serveur
   - Glissez-déposez tous vos fichiers vers le dossier `www` ou `public_html`

3. **Vérification** :
   - Accédez à votre URL
   - Testez toutes les pages
   - Vérifiez que les images s'affichent
   - Testez sur mobile

### Structure sur le serveur :

```
public_html/
├── index.html
├── services.html
├── a-propos.html
├── contact.html
├── blog/
│   └── article-1.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── [vos images]
├── robots.txt
└── sitemap.xml
```

---

## Étape 4.2 : Configuration Google Search Console

### Instructions :

1. **Créer un compte** : https://search.google.com/search-console/

2. **Ajouter une propriété** :
   - Type "Préfixe d'URL"
   - Entrez l'URL complète de votre site

3. **Vérification** :
   - Méthode recommandée : fichier HTML
   - Téléchargez le fichier fourni par Google
   - Uploadez-le à la racine de votre site via FileZilla
   - Cliquez sur "Vérifier"

4. **Soumettre le sitemap** :
   - Allez dans "Sitemaps"
   - Entrez `sitemap.xml`
   - Cliquez sur "Envoyer"

5. **Demander l'indexation** :
   - Allez dans "Inspection de l'URL"
   - Entrez l'URL de votre page d'accueil
   - Cliquez sur "Demander une indexation"
   - Répétez pour vos pages principales

### Livrable : Capture d'écran
- Capture de la Search Console montrant le sitemap soumis
- Capture de l'inspection d'URL

---

## Étape 4.3 : Configuration Google Analytics 4

### Instructions :

1. **Créer un compte** : https://analytics.google.com/

2. **Créer une propriété** :
   - Nom de la propriété : [Nom de votre site]
   - Fuseau horaire : France
   - Devise : EUR

3. **Créer un flux de données** :
   - Type : Web
   - URL : [votre URL]
   - Nom : [Nom du site]

4. **Installer le code** :
   - Copiez le code Google Tag fourni
   - Collez-le dans le `<head>` de TOUTES vos pages, juste après la balise `<head>` :

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. **Connecter Search Console à GA4** :
   - Dans GA4 : Admin > Associations de produits > Search Console
   - Suivez les instructions pour lier les deux comptes

### Vérification :
- Ouvrez votre site dans un onglet
- Dans GA4, allez dans "Rapports" > "Temps réel"
- Vous devriez voir votre visite

---

## Étape 4.4 : Audit avec les outils gratuits

### Réalisez les audits suivants et documentez les résultats :

#### 1. PageSpeed Insights
- URL : https://pagespeed.web.dev/
- Testez votre page d'accueil
- Capture des scores mobile ET desktop

#### 2. Rich Results Test
- URL : https://search.google.com/test/rich-results
- Testez vos données structurées
- Capture du résultat

#### 3. Mobile-Friendly Test
- URL : https://search.google.com/test/mobile-friendly
- Testez votre page d'accueil
- Capture du résultat

#### 4. Lighthouse (Chrome DevTools)
- Ouvrez Chrome > F12 > Onglet Lighthouse
- Lancez l'audit "Performance, Accessibility, Best Practices, SEO"
- Capture des scores

### Livrable : Document d'audit

Créez un document avec :
- Captures d'écran de chaque outil
- Score obtenu
- 3 points d'amélioration identifiés par outil

---

# Phase 5 : Documentation Finale

## Dossier à rendre

Votre dossier final doit contenir :

### 1. Rapport de stratégie
- [ ] Fiche persona
- [ ] Tableau de recherche de mots-clés (15-20 mots-clés)
- [ ] Analyse des 3 concurrents
- [ ] Keyword Map complet

### 2. Documentation technique
- [ ] Tableau des balises Title et Meta Description
- [ ] Code JSON-LD de toutes les données structurées
- [ ] Contenu du robots.txt
- [ ] Contenu du sitemap.xml
- [ ] Schéma de maillage interne

### 3. Audit de performance
- [ ] Captures PageSpeed Insights (mobile + desktop)
- [ ] Capture Rich Results Test
- [ ] Capture Mobile-Friendly Test
- [ ] Capture Lighthouse
- [ ] Liste des améliorations à apporter

### 4. Preuves de configuration
- [ ] Capture Google Search Console (propriété vérifiée)
- [ ] Capture du sitemap soumis
- [ ] Capture Google Analytics 4 (temps réel)

### 5. URL du site publié
- [ ] Lien vers le site fonctionnel

## Ressources complémentaires

### Documentation officielle
- [Guide SEO Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Documentation Schema.org](https://schema.org/)
- [Guide Core Web Vitals](https://web.dev/vitals/)

### Outils gratuits
- [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)
- [Google Trends](https://trends.google.fr/)
- [AnswerThePublic](https://answerthepublic.com/)
- [Ubersuggest](https://neilpatel.com/ubersuggest/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Squoosh (compression images)](https://squoosh.app/)

### Générateurs
- [Générateur de robots.txt](https://www.seoptimer.com/robots-txt-generator)
- [Générateur de sitemap](https://www.xml-sitemaps.com/)
- [Générateur de Schema.org](https://technicalseo.com/tools/schema-markup-generator/)

---

**Bon courage pour votre projet SEO !**
