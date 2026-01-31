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

## Chapitre 2 : L'Audit Technique

### 1. Robots.txt - Configuration avancée

- [ ] Utiliser la directive `User-agent` pour cibler des robots spécifiques (Googlebot, Bingbot)
- [ ] Utiliser `User-agent: *` pour les règles générales
- [ ] Configurer les directives `Disallow` pour bloquer les chemins sensibles
- [ ] Utiliser `Allow` pour créer des exceptions dans les dossiers bloqués
- [ ] Ajouter la directive `Sitemap` pointant vers le sitemap.xml
- [ ] Éviter de bloquer les fichiers CSS/JS nécessaires au rendu
- [ ] Tester le robots.txt dans Google Search Console

### 2. Sitemap XML - Structure complète

- [ ] Utiliser la balise `<urlset>` avec le namespace correct
- [ ] Ajouter la balise `<loc>` (obligatoire) avec des URLs absolues
- [ ] Renseigner `<lastmod>` avec des dates fiables (format YYYY-MM-DD)
- [ ] Définir `<changefreq>` selon la fréquence de mise à jour
- [ ] Attribuer `<priority>` pour indiquer l'importance relative des pages
- [ ] Soumettre le sitemap dans Google Search Console

### 3. Balises d'indexation

- [ ] Utiliser `<meta name="robots" content="index, follow">` sur les pages à indexer
- [ ] Appliquer `noindex` sur les pages de remerciement
- [ ] Appliquer `noindex` sur les pages de résultats de recherche interne
- [ ] Appliquer `noindex` sur les pages de filtres/tri (e-commerce)
- [ ] Appliquer `noindex` sur les pages légales peu utiles au SEO
- [ ] Vérifier régulièrement qu'aucune page importante n'est en noindex

### 4. Core Web Vitals - Performance

- [ ] Optimiser le LCP (Largest Contentful Paint) pour qu'il soit ≤ 2,5s
- [ ] Compresser les images et utiliser le lazy loading
- [ ] Utiliser un CDN et le cache navigateur
- [ ] Optimiser l'INP (Interaction to Next Paint) pour qu'il soit ≤ 200ms
- [ ] Réduire le JavaScript et différer les scripts non critiques
- [ ] Optimiser le CLS (Cumulative Layout Shift) pour qu'il soit ≤ 0,1
- [ ] Définir des dimensions fixes pour les images et vidéos
- [ ] Réserver l'espace pour les publicités
- [ ] Éviter les insertions dynamiques de contenu
- [ ] Tester la performance avec PageSpeed Insights
- [ ] Tester avec Lighthouse (Chrome DevTools)
- [ ] Vérifier les données terrain dans Search Console

### 5. Mobile-First

- [ ] Vérifier que le site est responsive (pas de site m. séparé)
- [ ] S'assurer que le texte est lisible sans zoomer (min. 16px)
- [ ] Configurer des boutons/liens assez grands (min. 48x48px)
- [ ] Éviter tout scroll horizontal
- [ ] Ajouter la balise viewport : `<meta name="viewport" content="width=device-width">`
- [ ] S'assurer que le contenu est identique entre mobile et desktop
- [ ] Éviter les pop-ups intrusives sur mobile
- [ ] Tester avec l'outil Mobile-Friendly de Google

### 6. Architecture et structure des URLs

- [ ] Respecter la règle des 3 clics depuis l'accueil
- [ ] Créer des URLs propres avec des mots-clés pertinents
- [ ] Utiliser des tirets (-) pour séparer les mots dans les URLs
- [ ] Utiliser uniquement des minuscules dans les URLs
- [ ] Garder les URLs courtes et descriptives (< 75 caractères)
- [ ] Implémenter les balises canoniques pour éviter le contenu dupliqué
- [ ] Configurer les redirections 301 pour les anciennes URLs

### 7. Sécurité HTTPS

- [ ] Activer HTTPS sur tout le site
- [ ] Vérifier que toutes les pages redirigent de HTTP vers HTTPS
- [ ] S'assurer que le certificat SSL est valide

## Chapitre 3 : La recherche de mots-clés et l'étude sémantique

### 1. Analyse des mots-clés

- [ ] Identifier les mots-clés courte traîne (1-2 mots) pertinents pour le site
- [ ] Rechercher des mots-clés longue traîne (3+ mots) à fort potentiel de conversion
- [ ] Analyser le volume de recherche mensuel des mots-clés cibles
- [ ] Évaluer la difficulté (KD) des mots-clés sélectionnés
- [ ] Identifier le "sweet spot" (volume correct + difficulté accessible)

### 2. Utilisation des outils de recherche

- [ ] Utiliser Google Keyword Planner pour découvrir de nouveaux mots-clés
- [ ] Analyser les tendances saisonnières avec Google Trends
- [ ] Exploiter les données de Google Search Console pour identifier les requêtes existantes
- [ ] Utiliser AnswerThePublic pour trouver les questions des utilisateurs
- [ ] Consulter les "recherches associées" en bas de page Google

### 3. Analyse de la concurrence

- [ ] Identifier 3-5 concurrents SEO (ceux qui rankent sur vos mots-clés cibles)
- [ ] Analyser le profil de mots-clés des concurrents
- [ ] Réaliser une Content Gap Analysis (mots-clés des concurrents non ciblés)
- [ ] Étudier le format et la structure des contenus concurrents performants
- [ ] Appliquer la technique Skyscraper (créer du contenu supérieur)

### 4. Keyword Mapping (Cartographie de mots-clés)

- [ ] Inventorier toutes les pages existantes du site
- [ ] Attribuer 1 mot-clé principal par page
- [ ] Définir 3-5 mots-clés secondaires par page
- [ ] Vérifier l'absence de cannibalisation (2 pages sur le même mot-clé)
- [ ] Identifier les lacunes (mots-clés sans page dédiée)
- [ ] Créer un tableau de Keyword Map structuré

### 5. Organisation en Topic Clusters

- [ ] Définir les pages piliers (sujets principaux, contenus longs et complets)
- [ ] Créer des pages satellites (sous-sujets spécifiques)
- [ ] Mettre en place le maillage interne entre pages piliers et satellites
- [ ] Regrouper les mots-clés en clusters sémantiques par intention
- [ ] S'assurer que chaque cluster a une page pilier de référence

### 6. Priorisation des actions

- [ ] Classer les mots-clés selon la matrice Opportunité/Effort
- [ ] Identifier les "quick wins" (volume correct + KD faible)
- [ ] Planifier les actions long terme (volume élevé + KD élevé)
- [ ] Documenter les décisions dans un fichier partagé

## Chapitre 4 : L'optimisation on-page

### 1. Balises Title

- [ ] Créer une balise `<title>` unique pour chaque page
- [ ] Respecter la longueur idéale de 50-60 caractères
- [ ] Placer le mot-clé principal au début du title
- [ ] Rendre le title attractif et incitatif pour le CTR
- [ ] Ajouter le nom de marque à la fin (format : "Sujet | Marque")
- [ ] Éviter les titles vides de sens (ex: "Accueil - MonSite")

### 2. Meta Description

- [ ] Rédiger une meta description unique pour chaque page
- [ ] Respecter la longueur de 150-160 caractères
- [ ] Inclure le mot-clé principal (sera mis en gras par Google)
- [ ] Ajouter un call-to-action clair ("Découvrez", "Comparez", "Achetez"...)
- [ ] Mettre en avant la valeur ajoutée par rapport aux concurrents
- [ ] Utiliser des éléments attractifs (chiffres, dates, symboles Unicode)

### 3. Hiérarchie des titres (Hn)

- [ ] Utiliser un seul H1 par page, unique et descriptif
- [ ] Respecter la hiérarchie logique (H2 sous H1, H3 sous H2...)
- [ ] Ne pas sauter de niveaux de titre
- [ ] Intégrer les mots-clés naturellement dans les titres
- [ ] Utiliser les Hn pour structurer, pas pour styliser
- [ ] S'assurer que le H1 et le Title sont complémentaires mais distincts

### 4. Optimisation des images

- [ ] Nommer les fichiers images avec des mots-clés descriptifs (tirets pour séparer)
- [ ] Rédiger un attribut alt descriptif pour chaque image (max 125 caractères)
- [ ] Éviter le bourrage de mots-clés dans les attributs alt
- [ ] Compresser les images sans perte visible de qualité
- [ ] Utiliser le format WebP pour les photos (30% plus léger que JPEG)
- [ ] Utiliser PNG pour les logos/icônes avec transparence
- [ ] Utiliser SVG pour les illustrations vectorielles
- [ ] Adapter les dimensions des images à leur affichage réel
- [ ] Implémenter le lazy loading (`loading="lazy"`) sur les images hors écran
- [ ] Ne pas appliquer le lazy loading aux images "above the fold" (LCP)

### 5. Maillage interne

- [ ] Insérer des liens contextuels naturels dans le contenu
- [ ] Utiliser des ancres descriptives (éviter "cliquez ici")
- [ ] Lier depuis les pages fortes vers les pages stratégiques
- [ ] Organiser le maillage en structure de silo (Topic Clusters)
- [ ] Identifier et corriger les pages orphelines
- [ ] Vérifier que chaque page importante reçoit des liens internes

### 6. Données structurées (Schema.org)

- [ ] Identifier le type de schema approprié au contenu (Article, Product, FAQPage, LocalBusiness, etc.)
- [ ] Implémenter les données structurées en JSON-LD
- [ ] Ajouter le schema FAQPage pour les pages de questions fréquentes
- [ ] Ajouter le schema Product pour les pages produits (prix, disponibilité, avis)
- [ ] Ajouter le schema BreadcrumbList pour le fil d'Ariane
- [ ] Tester les données structurées avec le Rich Results Test de Google
- [ ] Valider la syntaxe avec Schema Markup Validator
- [ ] Vérifier les erreurs dans Google Search Console (rapport "Améliorations")

### 7. Optimisation du contenu textuel

- [ ] Placer le mot-clé principal dans les 100 premiers mots
- [ ] Maintenir une densité de mot-clé naturelle (sans répétition forcée)
- [ ] Utiliser un champ sémantique riche (synonymes, termes associés)
- [ ] Rédiger des paragraphes courts (2-3 phrases max)
- [ ] Utiliser des listes à puces pour améliorer la lisibilité
- [ ] Adapter la longueur du contenu au type de page (300-500 min, 1000-1500 standard, 2000+ pour guides)

### 8. E-E-A-T et signaux de confiance

- [ ] Créer une page "À propos" présentant l'entreprise et l'équipe
- [ ] Ajouter des pages auteur avec biographies et qualifications
- [ ] Rédiger des mentions légales complètes (CGV, politique de confidentialité, CGU)
- [ ] Afficher les coordonnées visibles (adresse, téléphone, email)
- [ ] Citer les sources et références dans le contenu
- [ ] Afficher les dates de publication et de mise à jour
- [ ] Intégrer des avis clients authentiques et témoignages
- [ ] Porter une attention particulière aux sujets YMYL (santé, finance, juridique)

## Chapitre 5 : Stratégie de contenu et Copywriting SEO

### 1. Analyse de l'intention de recherche

- [ ] Identifier l'intention de recherche pour chaque mot-clé cible (informationnelle, transactionnelle, commerciale, navigationnelle)
- [ ] Analyser les SERP pour comprendre le type de contenu attendu par Google
- [ ] Définir l'angle de contenu pour apporter plus de valeur que les concurrents

### 2. Structure du contenu SEO

- [ ] Créer un titre (H1) accrocheur incluant le mot-clé principal
- [ ] Rédiger une introduction percutante (accroche + problème + promesse) en 100-150 mots
- [ ] Ajouter une table des matières pour les contenus longs
- [ ] Structurer le contenu avec des sections claires (H2/H3)
- [ ] Rédiger des paragraphes courts (2-3 phrases max, une idée par paragraphe)
- [ ] Intégrer des éléments visuels (images, schémas, tableaux) pour aérer le contenu
- [ ] Rédiger une conclusion avec un résumé et un CTA

### 3. Techniques d'accroche (Hook)

- [ ] Rédiger une accroche captivante dans les 3 premières secondes
- [ ] Utiliser au moins une technique d'accroche (question, statistique choc, problème, promesse)
- [ ] Appliquer la structure de la pyramide inversée (information clé en premier)

### 4. Optimisation pour les Featured Snippets

- [ ] Répondre directement à la question en 40-60 mots après le H2
- [ ] Utiliser des listes numérotées ou à puces pour les étapes/éléments
- [ ] Créer des tableaux pour les données comparatives
- [ ] Formuler les questions exactes recherchées par les utilisateurs

### 5. Techniques de copywriting SEO

- [ ] Utiliser la voix active plutôt que passive
- [ ] S'adresser directement au lecteur avec le "vous"
- [ ] Utiliser un langage simple et accessible (éviter le jargon)
- [ ] Mettre en avant les bénéfices plutôt que les fonctionnalités
- [ ] Intégrer des power words stratégiquement (urgence, valeur)
- [ ] Appliquer une formule de copywriting (AIDA, PAS, ou BAB) selon le contexte

### 6. Champ sémantique et densité de mots-clés

- [ ] Enrichir le contenu avec un champ sémantique complet autour du mot-clé principal
- [ ] Utiliser des synonymes et termes associés
- [ ] Éviter le keyword stuffing (bourrage de mots-clés)
- [ ] Placer le mot-clé aux emplacements stratégiques (titre, H1, premier paragraphe, conclusion)
- [ ] Vérifier que le texte reste naturel à la lecture à voix haute

### 7. Stratégie éditoriale

- [ ] Définir les objectifs de contenu (trafic, leads, ventes, notoriété)
- [ ] Créer des personas détaillés (nom, métier, objectifs, frustrations, questions, canaux)
- [ ] Mapper le contenu au parcours utilisateur (découverte, considération, décision)
- [ ] Créer un calendrier éditorial avec dates, titres, mots-clés, formats et statuts

### 8. Types et formats de contenu

- [ ] Diversifier les formats de contenu (articles de blog, études de cas, pages piliers, FAQ)
- [ ] Créer du contenu adapté à chaque phase du parcours utilisateur
- [ ] Envisager des formats complémentaires (infographies, vidéos, ebooks, outils gratuits)

### 9. Fréquence et recyclage de contenu

- [ ] Définir une fréquence de publication régulière et réaliste
- [ ] Identifier les contenus existants pouvant être recyclés (article → infographie, vidéo, posts sociaux)
- [ ] Identifier les contenus en position 5-20 à optimiser (content refresh)
- [ ] Actualiser les informations obsolètes (dates, statistiques, liens cassés)
- [ ] Enrichir les contenus existants (nouvelles sections, FAQ, exemples)

### 10. Call-to-Action (CTA)

- [ ] Ajouter un CTA clair et visible sur chaque page
- [ ] Adapter le CTA à l'intention de recherche et à la phase du parcours
- [ ] Créer un sentiment d'urgence ou de bénéfice immédiat
- [ ] Éviter les CTA flous (préférer "Recevez votre devis gratuit" à "En savoir plus")

### 11. Mesure de la performance du contenu

- [ ] Suivre le trafic organique (Search Console, Analytics)
- [ ] Suivre les positions sur les mots-clés cibles
- [ ] Analyser le CTR dans les résultats de recherche
- [ ] Mesurer le temps sur page et le taux de rebond
- [ ] Tracker les conversions (formulaires, achats, inscriptions)

## Chapitre 6 : Les nouveaux formats et la recherche moderne

### 1. Recherche vocale

- [ ] Optimiser le contenu pour les requêtes en langage naturel (phrases complètes)
- [ ] Cibler les questions longue traîne (qui, quoi, où, quand, comment, pourquoi)
- [ ] Créer des pages FAQ structurées avec balisage Schema FAQPage
- [ ] Optimiser la fiche Google Business Profile (adresse, horaires, téléphone)
- [ ] S'assurer que le site est mobile-friendly (80% des recherches vocales sur mobile)

### 2. Featured Snippets (Position Zéro)

- [ ] Identifier les mots-clés avec Featured Snippets existants
- [ ] Répondre directement aux questions en 40-60 mots après le H2
- [ ] Créer des listes à puces ou numérotées pour les étapes/éléments
- [ ] Utiliser des tableaux pour les données comparatives
- [ ] Adapter le format du contenu au type de snippet recherché (paragraphe, liste, tableau)

### 3. SEO Vidéo et YouTube

- [ ] Optimiser le titre de la vidéo (mot-clé au début, < 60 caractères, accrocheur)
- [ ] Rédiger une description détaillée (200-300 mots, mots-clés, liens, timestamps)
- [ ] Ajouter 5-10 tags pertinents (termes génériques et spécifiques)
- [ ] Créer une miniature attractive (visage, texte lisible, contraste fort, 16:9)
- [ ] Ajouter des sous-titres manuellement pour plus de précision
- [ ] Intégrer des chapitres (timestamps) pour générer des "Key Moments"
- [ ] Utiliser les cards et écrans de fin pour l'engagement
- [ ] Implémenter le balisage Schema VideoObject pour les vidéos du site
- [ ] Cibler des requêtes "vidéo-friendly" (tutoriels, how-to, reviews)

### 4. Google Discover

- [ ] Utiliser des images de haute qualité (minimum 1200px de large, format 16:9)
- [ ] Rédiger des titres engageants sans être clickbait
- [ ] Produire du contenu frais et original sur des sujets d'intérêt
- [ ] S'assurer que l'E-E-A-T est solide (expertise, auteur identifié, sources)
- [ ] Vérifier que le site est rapide et mobile-friendly

### 5. Google News

- [ ] Produire du contenu original et des actualités fraîches
- [ ] Utiliser des URLs propres et des dates claires
- [ ] Créer un sitemap News spécifique (articles des 2 derniers jours)
- [ ] Implémenter le balisage Schema Article
- [ ] Afficher les mentions légales, l'équipe identifiée et les contacts

### 6. Données structurées avancées

- [ ] Implémenter le schema FAQPage pour les questions/réponses
- [ ] Implémenter le schema HowTo pour les tutoriels avec étapes
- [ ] Implémenter le schema Review pour les avis avec étoiles
- [ ] Implémenter le schema Event pour les événements avec dates et lieux
- [ ] Implémenter le schema Organization pour l'entreprise
- [ ] Valider les données structurées avec le Rich Results Test de Google

### 7. Knowledge Graph et entité de marque

- [ ] Créer/revendiquer une page Wikidata pour l'entité
- [ ] Optimiser le Google Business Profile
- [ ] S'assurer de la cohérence des mentions (nom, adresse, infos) sur le web
- [ ] Utiliser le balisage Schema Organization avec les informations complètes

### 8. Adaptation à l'ère de l'IA

- [ ] Créer du contenu "non-résumable" (outils interactifs, calculateurs, données exclusives)
- [ ] Développer la notoriété de marque pour les recherches directes
- [ ] Miser sur l'expérience personnelle et le vécu dans le contenu
- [ ] Cibler les requêtes complexes nécessitant des clics (comparatifs, guides approfondis)
- [ ] Construire une communauté (newsletter, forum) pour un trafic indépendant de Google

### 12. Checklist finale avant publication

- [ ] Vérifier que le contenu répond à l'intention de recherche
- [ ] Vérifier le titre (accrocheur, mot-clé, < 60 caractères)
- [ ] Vérifier l'accroche (donne envie de lire)
- [ ] Vérifier la structure (H2/H3 clairs, paragraphes courts)
- [ ] Vérifier la sémantique (champ lexical riche, pas de keyword stuffing)
- [ ] Vérifier les médias (images optimisées)
- [ ] Vérifier le maillage interne
- [ ] Vérifier le CTA
- [ ] Relecture finale (orthographe, clarté, vérification des faits)

## Chapitre 7 : Le Netlinking

### 1. Comprendre les backlinks

- [ ] Identifier les backlinks existants vers le site
- [ ] Comprendre le concept de "jus de lien" (link juice) et son transfert
- [ ] Analyser l'impact des backlinks sur le crawl et la découverte des pages
- [ ] Évaluer le trafic référent généré par les liens entrants

### 2. Autorité de domaine

- [ ] Analyser le DA (Domain Authority) du site avec Moz
- [ ] Analyser le DR (Domain Rating) du site avec Ahrefs
- [ ] Analyser l'AS (Authority Score) du site avec SEMrush
- [ ] Comprendre le TF/CF (Trust Flow / Citation Flow) avec Majestic
- [ ] Comparer l'autorité du site avec celle des concurrents
- [ ] Définir un objectif d'autorité réaliste selon le secteur

### 3. Attributs de liens (DoFollow / NoFollow)

- [ ] Identifier la proportion de liens DoFollow vs NoFollow reçus
- [ ] Vérifier que le ratio est naturel (60-80% DoFollow, 20-40% NoFollow)
- [ ] Comprendre les attributs rel="sponsored" pour les liens payants
- [ ] Comprendre les attributs rel="ugc" pour le contenu généré par les utilisateurs
- [ ] S'assurer que les liens sortants du site utilisent les bons attributs

### 4. Anatomie d'un bon backlink

- [ ] Évaluer la pertinence thématique des sites sources
- [ ] Vérifier l'autorité des domaines qui font des liens
- [ ] Privilégier les liens dans le contenu éditorial (pas footer/sidebar)
- [ ] Vérifier que les sites sources ont du trafic réel
- [ ] Privilégier les premiers liens depuis de nouveaux domaines référents

### 5. Ancres de liens (Anchor Text)

- [ ] Analyser la distribution des ancres de liens existantes
- [ ] Vérifier la diversité des ancres (marque, génériques, partielles, exactes)
- [ ] Respecter un profil d'ancres naturel (30-40% marque/URL, 20-25% génériques, 15-20% partielles, 5-10% exactes)
- [ ] Éviter la sur-optimisation sur un seul mot-clé exact
- [ ] Varier les ancres lors de l'acquisition de nouveaux liens

### 6. Profil de liens

- [ ] Analyser le nombre de domaines référents (diversité des sources)
- [ ] Vérifier la croissance progressive des backlinks (pas de pics suspects)
- [ ] S'assurer de la pertinence thématique globale du profil
- [ ] Vérifier la diversité géographique des liens (si pertinent)
- [ ] Analyser les emplacements des liens (contextuels vs footer/sidebar)

### 7. Détection des liens toxiques

- [ ] Identifier les liens provenant de sites de spam ou fermes de liens
- [ ] Repérer les liens avec ancres sur-optimisées
- [ ] Détecter les liens hors-thématique suspects
- [ ] Vérifier l'absence de liens depuis des PBN (Private Blog Networks)
- [ ] Surveiller les pics de croissance anormaux

### 8. Stratégies d'acquisition White Hat

- [ ] Créer du contenu "link bait" (études, données originales, outils gratuits, guides ultimes)
- [ ] Mettre en place une stratégie de guest blogging sur des sites de qualité
- [ ] Développer une stratégie de Digital PR (communiqués de presse, expert sourcing)
- [ ] Appliquer la technique du Broken Link Building
- [ ] Utiliser la technique Skyscraper (créer un contenu supérieur à l'existant)
- [ ] Mettre en place une stratégie de Link Reclamation (mentions non-liées, liens cassés)
- [ ] Exploiter les partenariats (fournisseurs, clients, associations, événements)

### 9. Pratiques Black Hat à éviter

- [ ] Ne pas acheter de liens DoFollow
- [ ] Ne pas utiliser de PBN (Private Blog Network)
- [ ] Ne pas automatiser la création de liens (spam de commentaires, forums)
- [ ] Ne pas participer à des schémas d'échanges de liens massifs
- [ ] Ne pas utiliser de liens cachés ou de texte invisible

### 10. Surveillance et nettoyage

- [ ] Surveiller régulièrement les nouveaux backlinks acquis
- [ ] Vérifier l'absence de pénalité manuelle dans Google Search Console
- [ ] Identifier les liens toxiques à désavouer
- [ ] Créer un fichier Disavow si nécessaire (liens/domaines toxiques)
- [ ] Soumettre le fichier Disavow dans Google Search Console
- [ ] Configurer des alertes pour les mentions de marque (récupération de liens)

### 11. Outils d'analyse des backlinks

- [ ] Utiliser Ahrefs pour l'analyse du profil de liens
- [ ] Utiliser SEMrush pour le suivi des backlinks
- [ ] Utiliser Majestic pour l'analyse Trust Flow / Citation Flow
- [ ] Utiliser Google Search Console pour voir les liens détectés par Google
- [ ] Configurer des alertes Google pour les mentions de marque

## Chapitre 8 : Mesure de performance et outils d'analyse

### 1. Les KPIs essentiels du SEO

- [ ] Suivre les positions sur les mots-clés cibles
- [ ] Mesurer les impressions dans les résultats de recherche
- [ ] Analyser les clics organiques
- [ ] Calculer le CTR (taux de clic)
- [ ] Vérifier le nombre de pages indexées
- [ ] Suivre le nombre de domaines référents

### 2. Le suivi de positions (Rank Tracking)

- [ ] Identifier les positions stratégiques (1-3, 4-10, 11-20, 20+)
- [ ] Configurer le suivi pour les 50-100 mots-clés les plus importants
- [ ] Prendre en compte la localisation dans l'analyse des positions
- [ ] Comprendre l'impact des fonctionnalités SERP sur le CTR

### 3. Optimisation du CTR

- [ ] Analyser le CTR par position dans les résultats
- [ ] Identifier les pages avec un CTR inférieur à la moyenne
- [ ] Optimiser les balises Title pour améliorer le CTR
- [ ] Réécrire les Meta Descriptions avec des appels à l'action
- [ ] Ajouter des données structurées pour obtenir des rich snippets
- [ ] Mettre à jour les dates pour les contenus récents

### 4. Google Search Console - Configuration

- [ ] Configurer la Google Search Console pour le site
- [ ] Vérifier la propriété du domaine
- [ ] Soumettre le sitemap dans la Search Console

### 5. Google Search Console - Rapport Performances

- [ ] Analyser les clics organiques dans le rapport Performances
- [ ] Suivre les impressions pour mesurer la visibilité
- [ ] Calculer le CTR moyen
- [ ] Surveiller la position moyenne
- [ ] Filtrer les données par requête, page, pays, appareil et date

### 6. Google Search Console - Indexation

- [ ] Vérifier le rapport Pages (couverture d'indexation)
- [ ] Identifier les pages indexées
- [ ] Analyser les pages "crawlées mais non indexées"
- [ ] Corriger les erreurs 404 et 5xx
- [ ] Résoudre les problèmes de blocage robots.txt
- [ ] Traiter les soft 404

### 7. Google Search Console - Inspection d'URL

- [ ] Utiliser l'outil Inspection d'URL pour diagnostiquer une page
- [ ] Vérifier le statut d'indexation d'une page
- [ ] Consulter la date du dernier crawl
- [ ] Vérifier l'ergonomie mobile
- [ ] Contrôler les données structurées détectées
- [ ] Demander l'indexation après une mise à jour importante

### 8. Google Search Console - Core Web Vitals

- [ ] Consulter le rapport Signaux Web essentiels
- [ ] Vérifier le LCP (Largest Contentful Paint) < 2.5s
- [ ] Vérifier l'INP (Interaction to Next Paint) < 200ms
- [ ] Vérifier le CLS (Cumulative Layout Shift) < 0.1
- [ ] Identifier les pages avec de mauvais scores

### 9. Google Search Console - Liens

- [ ] Analyser les pages les plus liées en externe
- [ ] Identifier les sites avec le plus de liens vers le site
- [ ] Vérifier le texte des ancres utilisées
- [ ] Analyser les liens internes
- [ ] Identifier les pages orphelines (peu/pas liées)

### 10. Google Analytics 4 - Configuration

- [ ] Installer Google Analytics 4 sur le site
- [ ] Configurer les conversions (objectifs)
- [ ] Mettre en place le bandeau de consentement RGPD
- [ ] Connecter GA4 à la Search Console

### 11. Google Analytics 4 - Métriques SEO

- [ ] Filtrer les utilisateurs par source/medium = google/organic
- [ ] Analyser la durée d'engagement moyenne
- [ ] Suivre le taux d'engagement
- [ ] Mesurer les conversions du trafic organique
- [ ] Consulter le rapport Acquisition > Acquisition de trafic

### 12. Google Analytics 4 - Rapport Pages et écrans

- [ ] Identifier les pages les plus performantes
- [ ] Analyser les pages avec faible engagement
- [ ] Comparer les métriques par page (utilisateurs, durée, taux d'engagement, conversions)

### 13. Outils SEO professionnels

- [ ] Comprendre les fonctionnalités d'Ahrefs (backlinks, positions, Site Audit)
- [ ] Comprendre les fonctionnalités de SEMrush (suite all-in-one)
- [ ] Comprendre les fonctionnalités de Moz Pro (DA/PA, rank tracking)
- [ ] Utiliser Screaming Frog pour l'audit technique

### 14. Outils gratuits

- [ ] Utiliser Google Search Console (performances, indexation)
- [ ] Utiliser Google Analytics 4 (comportement utilisateur)
- [ ] Utiliser PageSpeed Insights (audit de performance)
- [ ] Utiliser Ahrefs Webmaster Tools (version gratuite limitée)

### 15. Screaming Frog SEO Spider

- [ ] Crawler le site avec Screaming Frog
- [ ] Détecter les erreurs 404 et redirections en chaîne
- [ ] Identifier les pages orphelines
- [ ] Vérifier le contenu dupliqué
- [ ] Analyser les balises manquantes (title, meta, H1)
- [ ] Exporter les données pour analyse

### 16. Construction d'un tableau de bord SEO

- [ ] Définir les 5-10 KPIs prioritaires
- [ ] Choisir un outil de dashboard (Looker Studio, Google Sheets)
- [ ] Connecter les sources de données (GSC, GA4)
- [ ] Automatiser les mises à jour du dashboard

### 17. Structure du tableau de bord

- [ ] Ajouter les métriques de visibilité (impressions, positions, mots-clés top 10)
- [ ] Ajouter les métriques de trafic (clics organiques, utilisateurs)
- [ ] Ajouter les métriques d'engagement (taux d'engagement, durée moyenne)
- [ ] Ajouter les métriques de conversions (objectifs atteints, taux de conversion)

### 18. Google Looker Studio

- [ ] Créer un dashboard dans Looker Studio
- [ ] Connecter la Search Console à Looker Studio
- [ ] Connecter Google Analytics 4 à Looker Studio
- [ ] Créer des visualisations (graphiques, tableaux, jauges)
- [ ] Partager le dashboard avec les parties prenantes

### 19. Mise en place d'un reporting

- [ ] Définir la fréquence de reporting (hebdomadaire, mensuel)
- [ ] Créer un reporting hebdomadaire pour l'équipe interne
- [ ] Créer un reporting mensuel pour la direction/clients

### 20. Structure d'un rapport SEO

- [ ] Rédiger un résumé exécutif (3-5 points clés)
- [ ] Présenter les KPIs et tendances avec graphiques
- [ ] Lister les actions réalisées sur la période
- [ ] Formuler des recommandations et prochaines étapes

### 21. Erreurs de mesure à éviter

- [ ] Ne pas se focaliser uniquement sur les positions
- [ ] Prendre en compte la saisonnalité (comparer avec N-1)
- [ ] Éviter les vanity metrics sans impact business
- [ ] Être patient (le SEO prend 3-6 mois minimum)

### 22. Analyse d'une chute de trafic

- [ ] Vérifier l'étendue du problème (tout le site ou certaines pages)
- [ ] Chercher une corrélation avec une mise à jour Google
- [ ] Vérifier les problèmes techniques dans la Search Console
- [ ] Analyser les changements récents sur le site

### 23. Définition d'objectifs SMART

- [ ] Définir des objectifs spécifiques (ex: trafic organique)
- [ ] Définir des objectifs mesurables (ex: +30%)
- [ ] Définir des objectifs atteignables et réalistes
- [ ] Définir des objectifs temporels (ex: 6 mois)

### 24. Attribution et ROI du SEO

- [ ] Comprendre les modèles d'attribution
- [ ] Vérifier les paramètres d'attribution dans GA4
- [ ] Calculer la valeur SEO par équivalent SEA (clics × CPC)
- [ ] Calculer le ROI SEO (revenus - coûts) / coûts × 100
- [ ] Documenter les coûts SEO (outils, rédaction, développement, consulting)

### 25. Checklist Mesure & Analyse

- [ ] Vérifier que la Search Console est configurée et vérifiée
- [ ] Vérifier que GA4 est installé avec les conversions configurées
- [ ] Vérifier que GSC et GA4 sont liés
- [ ] Vérifier qu'un suivi de positions est en place
- [ ] Vérifier qu'un dashboard centralisé existe
- [ ] Vérifier qu'un calendrier de reporting est établi
- [ ] Vérifier que des alertes sont configurées pour les chutes de trafic
- [ ] Vérifier que des objectifs SMART sont définis et suivis

