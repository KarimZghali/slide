# TP SEO - Exercice Pratique

## Chapitre 1 : Comprendre l'écosystème des moteurs de recherche

### 1. Crawl - Faciliter l'exploration par Googlebot

- [ ] Créer un fichier `robots.txt` à la racine du site
- [ ] Définir les règles d'accès pour Googlebot dans le robots.txt
- [ ] Bloquer les pages non pertinentes (admin, panier vide, pages de test)
- [ ] Créer un fichier `sitemap.xml`
- [ ] Lister toutes les pages importantes dans le sitemap
- [ ] Ajouter les dates de dernière modification dans le sitemap
- [ ] Définir les priorités des pages dans le sitemap
- [ ] Référencer le sitemap dans le robots.txt
- [ ] Mettre en place un maillage interne cohérent
- [ ] S'assurer que chaque page importante est accessible en moins de 3 clics
- [ ] Vérifier qu'aucune page n'est orpheline (sans lien entrant)
- [ ] Identifier et corriger les liens cassés (erreurs 404)
- [ ] Optimiser le temps de chargement des pages
- [ ] Éviter les "spider traps" (URLs infinies, calendriers sans fin)
- [ ] Vérifier que les pages importantes ne sont pas bloquées par erreur

### 2. Indexation - Entrer dans la bibliothèque de Google

- [ ] Créer un compte Google Search Console
- [ ] Soumettre le sitemap dans la Search Console
- [ ] Vérifier le statut d'indexation des pages
- [ ] Identifier les pages non indexées et comprendre pourquoi
- [ ] Rédiger une balise `<title>` unique pour chaque page
- [ ] Rédiger une balise `<meta description>` unique pour chaque page
- [ ] Éviter le contenu dupliqué entre les pages
- [ ] S'assurer que chaque page apporte une valeur ajoutée unique
- [ ] Utiliser des URLs claires et descriptives
- [ ] Structurer le contenu avec des balises sémantiques (h1, h2, h3...)
- [ ] Vérifier qu'il n'y a qu'un seul `<h1>` par page
- [ ] Ajouter des attributs alt aux images
- [ ] Identifier et fusionner/supprimer les pages de faible qualité (thin content)
- [ ] Mettre en place des balises canonical pour éviter les doublons

### 3. Classement - Optimiser les facteurs de positionnement

#### Pertinence
- [ ] Identifier les mots-clés principaux de chaque page
- [ ] Intégrer naturellement les mots-clés dans le contenu
- [ ] Placer le mot-clé principal dans le titre (h1)
- [ ] Placer le mot-clé principal dans la balise title
- [ ] Utiliser des variations sémantiques et synonymes

#### Autorité
- [ ] Analyser le profil de backlinks actuel du site
- [ ] Identifier les opportunités de liens naturels
- [ ] Vérifier l'absence de liens toxiques ou artificiels
- [ ] Comprendre le concept de "link juice" et sa transmission

#### Expérience utilisateur
- [ ] Tester la version mobile du site
- [ ] Vérifier que le site est responsive
- [ ] Mesurer la vitesse de chargement (PageSpeed Insights)
- [ ] Optimiser les Core Web Vitals (LCP, FID, CLS)
- [ ] S'assurer que la navigation est intuitive

#### Fraîcheur
- [ ] Identifier les contenus obsolètes à mettre à jour
- [ ] Planifier une stratégie de mise à jour du contenu

### 4. Intention de recherche - Aligner contenu et besoin utilisateur

- [ ] Lister les mots-clés cibles du site
- [ ] Classifier chaque mot-clé selon son intention :
  - [ ] Informationnelle (apprendre)
  - [ ] Navigationnelle (aller quelque part)
  - [ ] Transactionnelle (acheter/agir)
  - [ ] Commerciale (comparer avant d'acheter)
- [ ] Analyser la SERP pour chaque mot-clé cible
- [ ] Observer quel type de contenu Google positionne en premier
- [ ] Vérifier que le format de contenu correspond à l'intention
- [ ] Pour les requêtes informationnelles : créer des articles/guides
- [ ] Pour les requêtes transactionnelles : créer des pages produit/landing pages
- [ ] Pour les requêtes commerciales : créer des comparatifs/avis
- [ ] Éviter de positionner une page produit sur une requête informationnelle
- [ ] Créer un funnel de contenu (article info → page commerciale → page produit)

### 5. Compréhension des algorithmes - Bonnes pratiques

#### Anti-Panda (qualité du contenu)
- [ ] Supprimer ou améliorer les pages à faible valeur ajoutée
- [ ] Éviter les contenus générés automatiquement sans valeur
- [ ] S'assurer que chaque article apporte quelque chose d'unique
- [ ] Écrire pour les humains, pas pour les robots

#### Anti-Penguin (profil de liens)
- [ ] Vérifier l'absence d'achat de liens
- [ ] Éviter les échanges de liens massifs
- [ ] Utiliser des ancres de liens variées et naturelles
- [ ] Désavouer les liens toxiques si nécessaire

#### Optimisation pour l'IA (BERT, SGE)
- [ ] Rédiger un contenu clair et structuré
- [ ] Répondre directement aux questions des utilisateurs
- [ ] Utiliser un langage naturel (pas de keyword stuffing)
- [ ] Structurer le contenu pour qu'il puisse être cité par l'IA

### 6. Audit initial

- [ ] Faire un état des lieux complet du site
- [ ] Lister toutes les pages existantes
- [ ] Vérifier l'accessibilité de chaque page
- [ ] Tester le site avec différents navigateurs
- [ ] Analyser les performances actuelles dans la Search Console
- [ ] Identifier les pages qui génèrent déjà du trafic
- [ ] Repérer les pages à fort potentiel d'amélioration

## Chapitre 2 : L'Audit Technique - La base de l'édifice

### 1. Robots.txt - Guider les robots

- [ ] Vérifier la présence du fichier robots.txt à la racine du site
- [ ] Définir les User-agent appropriés (tous ou spécifiques)
- [ ] Configurer les directives Disallow pour les pages à bloquer
- [ ] Configurer les directives Allow pour les exceptions nécessaires
- [ ] Référencer le sitemap dans le robots.txt
- [ ] Vérifier qu'on ne bloque pas le CSS/JS
- [ ] Vérifier qu'on ne bloque pas tout le site par erreur (Disallow: /)
- [ ] Tester le robots.txt dans Google Search Console
- [ ] S'assurer que le fichier robots.txt est accessible publiquement
- [ ] Vérifier la syntaxe du fichier (pas de fautes de frappe)

### 2. Sitemap XML - La carte du site

- [ ] Créer un fichier sitemap.xml valide
- [ ] Lister toutes les URLs importantes avec la balise `<loc>`
- [ ] Ajouter les dates de dernière modification avec `<lastmod>`
- [ ] Définir les priorités relatives avec `<priority>`
- [ ] Indiquer les fréquences de changement avec `<changefreq>`
- [ ] Vérifier que le sitemap respecte le format XML standard
- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Vérifier le statut de soumission et les erreurs éventuelles
- [ ] S'assurer que les URLs du sitemap sont toutes accessibles
- [ ] Exclure les pages noindex du sitemap

### 3. Balises d'indexation - Contrôle page par page

- [ ] Identifier les pages qui ne doivent pas être indexées
- [ ] Ajouter les balises `<meta name="robots" content="noindex">` appropriées
- [ ] Mettre en noindex les pages de remerciement
- [ ] Mettre en noindex les pages de résultats de recherche interne
- [ ] Mettre en noindex les pages de filtres et de tri
- [ ] Mettre en noindex les pages légales peu utiles (CGV, mentions)
- [ ] Vérifier les pages noindex dans la Search Console
- [ ] S'assurer qu'aucune page importante n'est en noindex par erreur
- [ ] Configurer les directives nofollow si nécessaire

### 4. Core Web Vitals - Performance mesurée

#### LCP (Largest Contentful Paint)
- [ ] Mesurer le LCP actuel du site
- [ ] Identifier l'élément le plus grand (image hero, bloc de texte)
- [ ] Compresser les images principales
- [ ] Mettre en place le lazy loading pour les images hors écran
- [ ] Configurer un CDN si nécessaire
- [ ] Optimiser le cache navigateur
- [ ] Viser un LCP inférieur à 2,5 secondes

#### INP (Interaction to Next Paint)
- [ ] Mesurer le INP actuel du site
- [ ] Identifier les scripts JavaScript bloquants
- [ ] Différer les scripts non critiques
- [ ] Réduire la quantité de JavaScript
- [ ] Envisager l'utilisation de Web Workers pour les calculs lourds
- [ ] Viser un INP inférieur à 200ms

#### CLS (Cumulative Layout Shift)
- [ ] Mesurer le CLS actuel du site
- [ ] Définir des dimensions fixes pour les images et vidéos
- [ ] Réserver l'espace pour les publicités
- [ ] Éviter les insertions dynamiques de contenu
- [ ] Précharger les polices personnalisées
- [ ] Viser un CLS inférieur à 0,1

#### Outils de mesure
- [ ] Analyser le site avec Google PageSpeed Insights
- [ ] Auditer avec Lighthouse (Chrome DevTools)
- [ ] Consulter le rapport "Expérience sur la page" dans la Search Console
- [ ] Comparer les données lab et terrain

### 5. Mobile-First - L'ergonomie mobile

- [ ] Vérifier que le site est en responsive design
- [ ] Tester avec l'outil Mobile-Friendly de Google
- [ ] Vérifier la lisibilité du texte sans zoom (min. 16px)
- [ ] Vérifier la taille des boutons et liens (min. 48x48px)
- [ ] S'assurer qu'il n'y a pas de scroll horizontal
- [ ] Vérifier la présence de la balise meta viewport
- [ ] S'assurer que le contenu est identique entre mobile et desktop
- [ ] Supprimer ou adapter les pop-ups intrusives
- [ ] Tester la navigation tactile sur différents appareils
- [ ] Vérifier les temps de chargement sur connexion mobile

### 6. Architecture du site - Structure et navigation

- [ ] Vérifier que toute page importante est accessible en 3 clics max
- [ ] Analyser la structure des catégories et sous-catégories
- [ ] S'assurer de la cohérence de l'arborescence
- [ ] Créer un menu de navigation clair et logique
- [ ] Mettre en place un fil d'Ariane (breadcrumb)
- [ ] Vérifier le maillage interne entre les pages

### 7. Structure des URLs - URLs propres et optimisées

- [ ] Vérifier que les URLs sont lisibles et descriptives
- [ ] Utiliser des tirets (-) pour séparer les mots
- [ ] Mettre toutes les URLs en minuscules
- [ ] Inclure les mots-clés pertinents dans les URLs
- [ ] Garder les URLs courtes (moins de 75 caractères)
- [ ] Éviter les paramètres dynamiques inutiles
- [ ] Supprimer les caractères spéciaux et accents

### 8. URLs canoniques - Éviter les doublons

- [ ] Identifier les pages accessibles via plusieurs URLs
- [ ] Mettre en place les balises canonical appropriées
- [ ] Vérifier la cohérence www vs non-www
- [ ] Gérer les URLs avec et sans slash final
- [ ] Traiter les URLs avec paramètres de session/tracking
- [ ] Vérifier que les canonicals pointent vers des pages existantes

### 9. HTTPS et sécurité

- [ ] Vérifier que le site est entièrement en HTTPS
- [ ] S'assurer que toutes les ressources (images, scripts) sont en HTTPS
- [ ] Configurer les redirections HTTP vers HTTPS
- [ ] Vérifier la validité du certificat SSL
- [ ] Tester avec un outil de vérification SSL

### 10. Gestion des erreurs et redirections

- [ ] Identifier toutes les erreurs 404 dans la Search Console
- [ ] Corriger ou rediriger les pages en erreur
- [ ] Mettre en place des redirections 301 pour les anciennes URLs
- [ ] Créer une page 404 personnalisée et utile
- [ ] Éviter les chaînes de redirections
- [ ] Vérifier l'absence de redirections en boucle

## Chapitre 3 : Les nouveaux formats et la recherche moderne

### 1. Recherche vocale - Optimiser pour les assistants virtuels

- [ ] Identifier les requêtes vocales potentielles pour votre secteur
- [ ] Reformuler les mots-clés en questions naturelles (qui, quoi, où, quand, comment, pourquoi)
- [ ] Créer des pages FAQ avec des questions en langage conversationnel
- [ ] Rédiger des réponses concises (environ 29 mots) pour les questions fréquentes
- [ ] Cibler les requêtes longue traîne conversationnelles
- [ ] Optimiser le SEO local (40% des recherches vocales sont locales)
- [ ] Vérifier que la fiche Google Business Profile est complète et à jour
- [ ] S'assurer que le site est mobile-friendly (80% des recherches vocales sur mobile)

### 2. Featured Snippets - Viser la Position Zéro

- [ ] Identifier les mots-clés où un Featured Snippet est affiché
- [ ] Analyser le type de Featured Snippet (paragraphe, liste, tableau)
- [ ] Créer du contenu au format correspondant au snippet affiché
- [ ] Pour les définitions : rédiger des paragraphes de 40-60 mots
- [ ] Pour les processus : utiliser des listes numérotées avec des étapes claires
- [ ] Pour les comparaisons : créer des tableaux HTML structurés
- [ ] Placer la question en H2 et la réponse directement en dessous
- [ ] Ajouter le balisage Schema FAQ pour les pages de questions-réponses

### 3. SEO Vidéo - Optimiser pour YouTube

#### Métadonnées vidéo
- [ ] Rédiger des titres optimisés (mot-clé au début, < 60 caractères)
- [ ] Écrire des descriptions détaillées (200-300 mots)
- [ ] Ajouter 5-10 tags pertinents (mix générique et spécifique)
- [ ] Créer des miniatures attractives (visage, texte lisible, 16:9)
- [ ] Ajouter des sous-titres manuellement pour plus de précision
- [ ] Définir des chapitres avec timestamps
- [ ] Configurer les cards et écrans de fin

#### Engagement et performance
- [ ] Analyser le Watch Time de vos vidéos
- [ ] Vérifier le taux de rétention (viser > 50%)
- [ ] Encourager les interactions (likes, commentaires, partages)
- [ ] Éviter les titres clickbait qui déçoivent (rétention faible = pénalité)

#### Vidéos dans Google
- [ ] Cibler des requêtes "vidéo-friendly" (tutoriels, how-to, reviews)
- [ ] Implémenter le balisage Schema VideoObject
- [ ] Intégrer les vidéos YouTube dans des articles textuels optimisés
- [ ] Créer des timestamps pour générer les "Key Moments" dans Google

### 4. Google Discover - Apparaître dans le flux personnalisé

- [ ] Utiliser des images de haute qualité (minimum 1200px de large)
- [ ] Adopter le format 16:9 pour les images principales
- [ ] Rédiger des titres engageants sans être clickbait
- [ ] Publier du contenu frais et original régulièrement
- [ ] Renforcer l'E-E-A-T du site (expertise, auteur identifié)
- [ ] S'assurer que le contenu correspond au titre
- [ ] Optimiser les Core Web Vitals pour mobile
- [ ] Activer l'opt-in max-image-preview:large dans les meta robots

### 5. Google News - Référencement pour les éditeurs d'actualité

- [ ] Vérifier l'éligibilité du site (contenu original, actualités)
- [ ] Créer un sitemap News spécifique (articles des 2 derniers jours)
- [ ] Ajouter les balises news:publication_date et news:title
- [ ] Soumettre le sitemap News dans la Search Console
- [ ] Afficher clairement les dates de publication
- [ ] Identifier les auteurs des articles
- [ ] Afficher les mentions légales et informations de contact
- [ ] Mettre en place le balisage Schema Article
- [ ] Publier rapidement sur les sujets d'actualité

### 6. Données structurées avancées - Rich Snippets

- [ ] Implémenter le balisage FAQPage pour les pages FAQ
- [ ] Implémenter le balisage HowTo pour les tutoriels
- [ ] Implémenter le balisage Review pour les avis et tests
- [ ] Implémenter le balisage Event pour les événements
- [ ] Implémenter le balisage Organization pour l'entreprise
- [ ] Tester les données structurées avec le Rich Results Test
- [ ] Corriger les erreurs et avertissements détectés
- [ ] Vérifier l'apparition des rich snippets dans les SERPs

### 7. Knowledge Graph - Devenir une entité reconnue

- [ ] Créer ou mettre à jour la fiche Google Business Profile
- [ ] Créer une entrée Wikidata pour l'entreprise/la marque
- [ ] Vérifier la cohérence des informations sur tous les profils web
- [ ] Ajouter le balisage Schema Organization avec sameAs
- [ ] Lier les profils sociaux officiels (LinkedIn, Twitter, etc.)
- [ ] Obtenir des mentions sur des sites d'autorité

### 8. E-E-A-T - Démontrer l'expertise et la fiabilité

#### Experience (Expérience)
- [ ] Partager des expériences personnelles et des cas concrets
- [ ] Ajouter des témoignages et études de cas
- [ ] Montrer des preuves d'utilisation réelle des produits/services

#### Expertise
- [ ] Créer des pages auteur détaillées avec biographie
- [ ] Afficher les qualifications et certifications
- [ ] Publier du contenu approfondi démontrant l'expertise

#### Authoritativeness (Autorité)
- [ ] Obtenir des mentions et citations de sites reconnus
- [ ] Développer un profil de backlinks de qualité
- [ ] Être référencé comme source dans votre domaine

#### Trustworthiness (Fiabilité)
- [ ] Afficher clairement les coordonnées de contact
- [ ] Publier les mentions légales et politique de confidentialité
- [ ] Citer les sources et références
- [ ] Sécuriser le site en HTTPS
- [ ] Afficher les avis clients authentiques

### 9. Adaptation à l'IA générative (SGE)

- [ ] Créer du contenu "non-résumable" (outils, calculateurs, données exclusives)
- [ ] Développer la notoriété de marque pour les recherches directes
- [ ] Miser sur l'expérience personnelle et les témoignages uniques
- [ ] Construire une communauté (newsletter, forum, réseaux sociaux)
- [ ] Cibler les requêtes complexes nécessitant des clics
- [ ] Éviter le contenu générique facilement synthétisable par l'IA
- [ ] Créer du contenu si complet qu'il sera cité comme source

### 10. Audit des nouveaux formats

- [ ] Vérifier la présence sur Google Discover (Search Console)
- [ ] Analyser le trafic provenant de Google News
- [ ] Identifier les Featured Snippets déjà obtenus
- [ ] Lister les opportunités de snippets sur vos mots-clés
- [ ] Évaluer la performance des vidéos YouTube
- [ ] Vérifier l'apparition dans le Knowledge Graph
- [ ] Tester la compatibilité recherche vocale
- [ ] Mesurer le trafic "zero-click" vs clics organiques
