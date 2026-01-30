// Données des thèmes et slides (embarquées pour fonctionner sans serveur)
const THEMES_DATA = {
    "themes": [
        {
            "id": "seo",
            "title": "SEO",
            "description": "Formation complète au référencement naturel",
            "slides": [
                `<div class="slide-seo">
    <h1>🚀 Formation SEO</h1>
    <h2>Jour 1 – Fondations & Architecture Technique</h2>
    <p class="slide-subtitle">Comprendre comment Google voit le monde</p>
    <p class="mt-xl text-info"><strong>SEO</strong> = <em>Search Engine Optimization</em><br><span class="text-muted">(Optimisation pour les Moteurs de Recherche)</span></p>
    <p class="mt-lg text-muted">Chaque jour, <strong>8,5 milliards de recherches</strong> sont effectuées sur Google.<br>Le SEO, c'est l'art de capter une part de ce trafic... gratuitement.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Parts de marché des moteurs (2025)</h1>
    <h2>Google domine, mais il n'est pas seul</h2>
    <div class="market-share">
        <div class="share-bar">
            <span class="share-label">Google</span>
            <div class="share-fill w-100 share-fill-google"></div>
            <span class="share-value">90%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Bing</span>
            <div class="share-fill w-4 share-fill-bing"></div>
            <span class="share-value">4%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Yandex</span>
            <div class="share-fill w-3 share-fill-yandex"></div>
            <span class="share-value">2,5%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Yahoo!</span>
            <div class="share-fill w-1-5 share-fill-yahoo"></div>
            <span class="share-value">1,3%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">DuckDuckGo</span>
            <div class="share-fill w-1 share-fill-duckduckgo"></div>
            <span class="share-value">0,8%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Baidu</span>
            <div class="share-fill w-0-7 share-fill-baidu"></div>
            <span class="share-value">0,6%</span>
        </div>
    </div>
    <p class="slide-tip">💡 En SEO, on se concentre sur Google. Mais Bing progresse grâce à l'IA (Copilot), et Yandex reste incontournable en Russie.</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚡ Avant de commencer...</h1>
    <h2>SEO vs SEA : quelle différence ?</h2>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>🌱 SEO (Référencement Naturel)</h3>
            <ul>
                <li><strong>Gratuit</strong> : pas de coût au clic</li>
                <li><strong>Long terme</strong> : résultats en 3-6 mois</li>
                <li><strong>Durable</strong> : le trafic reste même sans effort continu</li>
                <li><strong>Crédibilité</strong> : les utilisateurs font plus confiance aux résultats naturels</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>💰 SEA (Référencement Payant)</h3>
            <ul>
                <li><strong>Payant</strong> : coût par clic (CPC)</li>
                <li><strong>Immédiat</strong> : résultats dès l'activation</li>
                <li><strong>Éphémère</strong> : le trafic s'arrête quand on coupe le budget</li>
                <li><strong>Marqué "Annonce"</strong> : certains utilisateurs l'évitent</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>L'idéal ?</strong> Combiner les deux ! SEA pour les résultats rapides, SEO pour construire un actif durable.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📚 Chapitre 1</h1>
    <h2>Comprendre l'écosystème des moteurs de recherche</h2>
    <p class="text-intro">Avant d'optimiser, il faut comprendre la machine. Comment Google trouve-t-il vos pages ? Comment décide-t-il de leur pertinence ? Et surtout, qu'attend-il de vous ?</p>
    <div class="slide-agenda">
        <p>🔍 Le triptyque : Crawl, Indexation, Classement</p>
        <p>📈 L'évolution des algorithmes (de 1998 à l'IA)</p>
        <p>🎯 L'intention de recherche : le nerf de la guerre</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔍 Le triptyque fondamental</h1>
    <h2>Les 3 étapes que traverse chaque page web</h2>
    <p class="text-intro-lg">Imaginez Google comme un bibliothécaire géant. Il doit d'abord <em>découvrir</em> les livres (crawl), les <em>lire et cataloguer</em> (indexation), puis décider <em>lesquels recommander</em> en premier (classement).</p>
    <div class="slide-diagram">
        <span class="step">1. CRAWL</span>
        <span class="arrow">→</span>
        <span class="step">2. INDEXATION</span>
        <span class="arrow">→</span>
        <span class="step">3. CLASSEMENT</span>
    </div>
    <p class="slide-tip">💡 Si l'une de ces étapes échoue, votre page reste invisible. Un site non crawlé n'existe pas pour Google.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🕷️ Étape 1 : Le Crawl</h1>
    <h2>L'exploration du web par les robots</h2>
    <p class="text-intro"><strong>Googlebot</strong>, c'est le nom du robot d'exploration de Google. Tel une araignée (d'où le terme "spider"), il parcourt le web en suivant les liens d'une page à l'autre, 24h/24.</p>
    <ul>
        <li><strong>Point de départ</strong> : les sitemaps soumis + les liens déjà connus</li>
        <li><strong>Fréquence</strong> : les sites actifs sont recrawlés plus souvent</li>
        <li><strong>Crawl budget</strong> : Google n'a pas un temps infini — il priorise</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🕷️ Le Crawl en pratique</h1>
    <h2>Comment faciliter le travail de Googlebot ?</h2>
    <ul>
        <li><strong>Sitemap XML</strong> : une carte de votre site à soumettre dans la Search Console</li>
        <li><strong>Maillage interne</strong> : des liens entre vos pages pour guider le robot</li>
        <li><strong>Temps de chargement</strong> : un site lent = moins de pages crawlées</li>
        <li><strong>Robots.txt</strong> : un fichier pour dire ce qu'il peut (ou ne peut pas) explorer</li>
    </ul>
    <p class="slide-tip">💡 <strong>Anecdote :</strong> En 2008, Google a découvert que certains sites généraient des URLs infinies (calendriers sans fin, filtres combinables à l'infini). Ils ont dû créer des règles pour éviter les "spider traps" !</p>
</div>`,

                `<div class="slide-seo">
    <h1>📦 Étape 2 : L'Indexation</h1>
    <h2>Le stockage dans la bibliothèque de Google</h2>
    <p class="text-intro">Une fois la page crawlée, Google l'analyse en profondeur. Il lit le texte, regarde les images, comprend la structure... puis décide si elle mérite d'entrer dans son <strong>index</strong> (sa base de données géante).</p>
    <ul>
        <li><strong>Analyse du contenu</strong> : de quoi parle cette page ?</li>
        <li><strong>Extraction sémantique</strong> : quels sont les thèmes, entités, mots-clés ?</li>
        <li><strong>Détection des doublons</strong> : cette page apporte-t-elle quelque chose de nouveau ?</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>📦 L'Indexation en chiffres</h1>
    <h2>Une bibliothèque à l'échelle planétaire</h2>
    <ul>
        <li>L'index de Google contient des <strong>centaines de milliards de pages</strong></li>
        <li>Il pèse plus de <strong>100 pétaoctets</strong> (100 millions de Go)</li>
        <li>Pourtant, <strong>toutes les pages crawlées ne sont pas indexées</strong></li>
    </ul>
    <p class="text-intro mt-lg">Google peut refuser d'indexer une page s'il juge qu'elle n'apporte pas assez de valeur, qu'elle est trop similaire à une autre, ou qu'elle présente des problèmes techniques.</p>
    <p class="slide-warning">⚠️ Vérifiez vos pages indexées dans la <strong>Google Search Console</strong> > Indexation</p>
</div>`,

                `<div class="slide-seo">
    <h1>🏆 Étape 3 : Le Classement</h1>
    <h2>L'algorithme entre en scène</h2>
    <p class="text-intro">Vous êtes indexé ? Parfait. Mais être dans l'index ne suffit pas — il faut apparaître <strong>en haut des résultats</strong>. C'est là que l'algorithme de classement intervient.</p>
    <ul>
        <li>Google analyse <strong>200+ facteurs</strong> pour chaque requête</li>
        <li>Il compare votre page à <strong>toutes les autres</strong> sur le même sujet</li>
        <li>Le classement est <strong>dynamique</strong> : il peut changer chaque jour</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🏆 Les facteurs de classement</h1>
    <h2>Ce qui influence votre position (non exhaustif)</h2>
    <ul>
        <li><strong>Pertinence</strong> : votre contenu répond-il à la requête ?</li>
        <li><strong>Autorité</strong> : votre site est-il reconnu comme fiable ? (backlinks)</li>
        <li><strong>Expérience utilisateur</strong> : vitesse, mobile-friendly, navigation</li>
        <li><strong>Fraîcheur</strong> : pour certaines requêtes, le contenu récent est privilégié</li>
        <li><strong>Engagement</strong> : les utilisateurs restent-ils sur votre page ?</li>
    </ul>
    <p class="slide-tip">💡 <strong>Le saviez-vous ?</strong> 75% des utilisateurs ne vont jamais au-delà de la 1ère page. Être en page 2, c'est presque être invisible.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📈 L'évolution des algorithmes</h1>
    <h2>Comment Google est devenu (beaucoup) plus intelligent</h2>
    <p class="text-intro-lg">En 25 ans, Google est passé d'un simple compteur de liens à une intelligence artificielle capable de comprendre le langage humain. Retour sur les grandes étapes.</p>
    <div class="timeline">
        <p><strong>1998</strong> – PageRank : les liens comme votes</p>
        <p><strong>2011</strong> – Panda : guerre au contenu de faible qualité</p>
        <p><strong>2012</strong> – Penguin : chasse aux liens artificiels</p>
        <p><strong>2015</strong> – RankBrain : l'IA entre dans la danse</p>
        <p><strong>2019</strong> – BERT : compréhension du langage naturel</p>
        <p><strong>2023+</strong> – SGE : l'IA générative dans les résultats</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 1998 : Le PageRank</h1>
    <h2>L'idée de génie de Larry Page</h2>
    <p class="text-intro">Tout commence dans un dortoir de Stanford. Larry Page et Sergey Brin ont une intuition : <strong>les liens entre pages web ressemblent aux citations académiques</strong>. Plus un article est cité, plus il est important.</p>
    <ul>
        <li>Un lien = un vote de confiance envers la page cible</li>
        <li>Un lien depuis un site autoritaire vaut plus qu'un lien lambda</li>
        <li>Le "jus de lien" (link juice) se transmet de page en page</li>
    </ul>
    <p class="slide-quote">"PageRank" = Page comme Larry Page + Rank comme classement. Le nom parfait.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🐼 2011 : Google Panda</h1>
    <h2>La qualité du contenu devient centrale</h2>
    <p class="text-intro">Avant Panda, le web était envahi de "fermes de contenu" : des sites qui publiaient des milliers d'articles de faible qualité bourrés de mots-clés. Google a dit stop.</p>
    <ul>
        <li><strong>Cibles</strong> : contenus dupliqués, thin content, pages sans valeur ajoutée</li>
        <li><strong>Impact</strong> : certains sites ont perdu 80% de leur trafic du jour au lendemain</li>
        <li><strong>Message</strong> : écrivez pour les humains, pas pour les robots</li>
    </ul>
    <p class="slide-tip">💡 <strong>Victime célèbre :</strong> Demand Media (eHow) a perdu des millions de visiteurs. Ils produisaient 7 000 articles/jour, souvent rédigés en 15 minutes.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🐧 2012 : Google Penguin</h1>
    <h2>La chasse aux liens artificiels</h2>
    <p class="text-intro">Le PageRank a créé un effet pervers : certains achetaient des liens ou créaient des réseaux de sites factices pour manipuler le classement. Penguin a changé la donne.</p>
    <ul>
        <li><strong>Cibles</strong> : achat de liens, échanges de liens massifs, ancres sur-optimisées</li>
        <li><strong>Pénalités</strong> : les sites pris la main dans le sac ont été déclassés</li>
        <li><strong>Nouvelle règle</strong> : les liens doivent être "naturels" et éditoriaux</li>
    </ul>
    <p class="slide-warning">⚠️ Aujourd'hui encore, un mauvais profil de backlinks peut vous valoir une pénalité manuelle de Google.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 2015 : RankBrain</h1>
    <h2>Le machine learning entre dans l'algorithme</h2>
    <p class="text-intro">Pour la première fois, Google intègre une IA dans son moteur de classement. RankBrain apprend à interpréter les requêtes <strong>jamais vues auparavant</strong> (15% des recherches quotidiennes !).</p>
    <ul>
        <li><strong>Fonction</strong> : comprendre l'intention derrière des requêtes ambiguës ou nouvelles</li>
        <li><strong>Exemple</strong> : "le truc pour ouvrir les PDF" → comprend qu'on cherche Adobe Reader</li>
        <li><strong>Révolution</strong> : l'algo s'améliore tout seul en apprenant des comportements utilisateurs</li>
    </ul>
    <p class="slide-tip">💡 Google a déclaré que RankBrain était devenu le 3ème facteur de classement le plus important.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 2019 : BERT</h1>
    <h2>Google comprend enfin le contexte</h2>
    <p class="text-intro"><strong>BERT</strong> (Bidirectional Encoder Representations from Transformers) est un modèle de langage qui analyse les mots <strong>dans leur contexte</strong>, pas isolément.</p>
    <ul>
        <li><strong>Avant BERT</strong> : "vol Paris New York pas cher" → Google voyait des mots séparés</li>
        <li><strong>Avec BERT</strong> : il comprend que vous cherchez un billet d'avion économique</li>
        <li><strong>Impact</strong> : 10% de toutes les requêtes ont vu leurs résultats améliorés</li>
    </ul>
    <p class="slide-quote">"Pour" dans "crème pour le visage" vs "pour" dans "recette pour 4 personnes" → BERT sait faire la différence.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 2023+ : L'ère de l'IA générative</h1>
    <h2>Google SGE et la révolution des résultats</h2>
    <p class="text-intro">Avec l'arrivée de ChatGPT, Google a accéléré. <strong>SGE</strong> (Search Generative Experience) intègre des réponses générées par IA directement dans les résultats de recherche.</p>
    <ul>
        <li><strong>Réponses synthétisées</strong> : l'IA résume plusieurs sources en une réponse</li>
        <li><strong>Conversations</strong> : possibilité de poser des questions de suivi</li>
        <li><strong>Enjeu SEO</strong> : comment apparaître quand l'IA répond à la place des sites ?</li>
    </ul>
    <p class="slide-warning">⚠️ Le SEO de demain : être la <strong>source citée</strong> par l'IA, pas juste le premier lien bleu.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 L'intention de recherche</h1>
    <h2>Le concept le plus important du SEO moderne</h2>
    <p class="text-intro-lg">Oubliez un instant les mots-clés. Ce que Google cherche vraiment à comprendre, c'est : <strong>que veut l'utilisateur ?</strong></p>
    <p class="slide-highlight">Google ne classe plus des pages qui contiennent des mots.<br>Il classe des pages qui <strong>satisfont une intention</strong>.</p>
    <p class="mt-xl text-muted">Deux personnes qui tapent le même mot-clé peuvent chercher des choses très différentes. L'algorithme doit deviner laquelle vous êtes.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Les 4 types d'intention</h1>
    <h2>Chaque recherche a un objectif</h2>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>🔍 Informationnelle</h3>
            <p>"Comment faire une mayonnaise"</p>
            <p>"Qui a inventé Internet"</p>
            <p class="text-accent mt-sm">→ L'utilisateur veut <strong>apprendre</strong></p>
        </div>
        <div class="intent-card">
            <h3>🧭 Navigationnelle</h3>
            <p>"Facebook connexion"</p>
            <p>"Amazon France"</p>
            <p class="text-accent mt-sm">→ L'utilisateur veut <strong>aller quelque part</strong></p>
        </div>
        <div class="intent-card">
            <h3>🛒 Transactionnelle</h3>
            <p>"Acheter AirPods Pro"</p>
            <p>"Réserver hôtel Barcelone"</p>
            <p class="text-accent mt-sm">→ L'utilisateur veut <strong>agir/acheter</strong></p>
        </div>
        <div class="intent-card">
            <h3>🔎 Commerciale</h3>
            <p>"Meilleur VPN 2026"</p>
            <p>"iPhone vs Samsung avis"</p>
            <p class="text-accent mt-sm">→ L'utilisateur veut <strong>comparer avant d'acheter</strong></p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Exemple concret : "Jaguar"</h1>
    <h2>Un mot, plusieurs intentions possibles</h2>
    <p class="text-intro-lg">Tapez "jaguar" dans Google. Que voulez-vous ?</p>
    <ul>
        <li>🐆 L'animal (intention informationnelle)</li>
        <li>🚗 La marque de voitures (intention navigationnelle ou commerciale)</li>
        <li>🏈 L'équipe de football américain de Jacksonville (navigationnelle)</li>
        <li>💻 Le système d'exploitation macOS Jaguar... pour les nostalgiques</li>
    </ul>
    <p class="text-intro mt-lg">Google analyse le <strong>contexte</strong> (localisation, historique, tendances) pour deviner votre intention. Et il affiche des résultats mixtes pour couvrir plusieurs cas.</p>
</div>`,

                `<div class="slide-seo">
    <h1>💡 Pourquoi c'est crucial pour le SEO ?</h1>
    <h2>Aligner votre contenu avec l'intention</h2>
    <p class="text-intro">Si votre page ne correspond pas à l'intention dominante d'une requête, elle ne se positionnera <strong>jamais</strong> — même avec un contenu excellent.</p>
    <ul>
        <li><strong>Requête info</strong> → Proposez un article de blog, un guide, un tutoriel</li>
        <li><strong>Requête transactionnelle</strong> → Proposez une page produit, une landing page</li>
        <li><strong>Requête commerciale</strong> → Proposez un comparatif, des tests, des avis</li>
        <li><strong>Requête navigationnelle</strong> → Assurez-vous que votre marque est bien positionnée sur son propre nom !</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>💡 L'erreur classique à éviter</h1>
    <h2>Vouloir vendre quand l'utilisateur veut apprendre</h2>
    <p class="text-intro">Imaginez : quelqu'un cherche "comment choisir un matelas". Google comprend que c'est une requête <strong>informationnelle</strong>.</p>
    <p class="text-light">Si vous positionnez votre page produit "Matelas XYZ – 599€" sur cette requête, elle ne remontera pas. Google affichera des <strong>guides d'achat</strong>, pas des fiches produits.</p>
    <p class="slide-tip">💡 <strong>La solution ?</strong> Créez un article "Comment choisir son matelas : le guide complet" qui renvoie ensuite vers vos produits. C'est le principe du funnel de contenu.</p>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 1</h1>
    <h2>Ce qu'il faut absolument retenir</h2>
    <ul>
        <li>🕷️ <strong>Crawl</strong> : Googlebot explore le web de lien en lien. Facilitez-lui la tâche.</li>
        <li>📦 <strong>Indexation</strong> : Seules les pages jugées utiles entrent dans l'index.</li>
        <li>🏆 <strong>Classement</strong> : 200+ facteurs décident de votre position. La qualité prime.</li>
        <li>📈 <strong>Évolution</strong> : De PageRank à l'IA, Google est devenu un expert en compréhension du langage.</li>
        <li>🎯 <strong>Intention</strong> : Comprenez ce que veut l'utilisateur avant de créer du contenu.</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 Questions de réflexion</h1>
    <h2>Pour aller plus loin</h2>
    <ul>
        <li>Votre site est-il entièrement crawlable ? Avez-vous vérifié la Search Console ?</li>
        <li>Vos pages les plus importantes sont-elles bien indexées ?</li>
        <li>Pour vos mots-clés cibles, quel type de contenu Google affiche-t-il en première page ?</li>
        <li>Votre contenu correspond-il à l'intention de recherche dominante ?</li>
    </ul>
    <p class="slide-tip">💡 <strong>Exercice :</strong> Tapez votre mot-clé principal dans Google. Analysez les 10 premiers résultats. Sont-ils des articles ? Des pages produits ? Des vidéos ? C'est ce que Google attend de vous.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔧 Chapitre 2</h1>
    <h2>L'Audit Technique : La base de l'édifice</h2>
    <p class="text-intro">Un contenu excellent sur un site techniquement défaillant, c'est comme un chef étoilé qui cuisine dans une cuisine insalubre. Personne n'y goûtera jamais.</p>
    <div class="slide-agenda">
        <p>🤖 Explorabilité et indexabilité (Robots.txt, Sitemap)</p>
        <p>⚡ Performance et Core Web Vitals</p>
        <p>📱 Mobile-First : l'ergonomie mobile</p>
        <p>🏗️ Architecture du site et structure des URLs</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 Qu'est-ce que le fichier robots.txt ?</h1>
    <h2>Le premier fichier que les robots consultent</h2>
    <p class="text-intro">Le fichier <strong>robots.txt</strong> est un simple fichier texte que les webmasters créent pour indiquer aux robots des moteurs de recherche (aussi appelés <em>bots</em> ou <em>crawlers</em>) comment explorer et indexer les pages de leur site.</p>
    <ul>
        <li><strong>Emplacement</strong> : toujours à la racine du site → <code>https://monsite.fr/robots.txt</code></li>
        <li><strong>Format</strong> : texte brut, pas de HTML ni de code complexe</li>
        <li><strong>Rôle</strong> : donner des instructions aux robots <em>avant</em> qu'ils explorent</li>
    </ul>
    <p class="slide-tip">💡 C'est comme un panneau à l'entrée d'un bâtiment : "Visiteurs autorisés ici, zone privée là-bas".</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 La directive User-agent</h1>
    <h2>Cibler un robot spécifique ou tous les robots</h2>
    <p class="text-intro">La directive <code>User-agent</code> spécifie à <strong>quel robot</strong> les instructions suivantes s'appliquent. Chaque moteur de recherche a son propre robot avec un nom unique.</p>
    <div class="code-block">
        <span class="code-comment"># S'applique à TOUS les robots</span><br>
        <span class="code-keyword">User-agent:</span> *<br><br>
        <span class="code-comment"># S'applique uniquement à Google</span><br>
        <span class="code-keyword">User-agent:</span> Googlebot<br><br>
        <span class="code-comment"># S'applique uniquement à Bing</span><br>
        <span class="code-keyword">User-agent:</span> Bingbot
    </div>
    <p class="slide-tip">💡 Utilisez <code>*</code> pour des règles générales, et des User-agents spécifiques pour des exceptions.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 Les directives : Disallow, Allow, Sitemap</h1>
    <h2>Les 3 instructions principales</h2>
    <div class="mt-md">
        <p class="mb-md"><span class="label-disallow">Disallow</span> — Interdit l'accès à un chemin</p>
        <div class="code-block-sm">
            <span class="code-keyword">Disallow:</span> /admin/ <span class="code-comment">← bloque tout le dossier admin</span>
        </div>

        <p class="mb-md"><span class="label-allow">Allow</span> — Autorise l'accès (utile pour créer des exceptions)</p>
        <div class="code-block-sm">
            <span class="code-keyword">Allow:</span> /admin/public/ <span class="code-comment">← exception dans un dossier bloqué</span>
        </div>

        <p class="mb-md"><span class="label-sitemap">Sitemap</span> — Indique l'emplacement du sitemap XML</p>
        <div class="code-block-sm mb-0">
            <span class="code-keyword">Sitemap:</span> https://monsite.fr/sitemap.xml
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 Exemple complet de robots.txt</h1>
    <h2>Un fichier bien structuré</h2>
    <div class="code-block">
        <span class="code-comment"># Règles pour tous les robots</span><br>
        <span class="code-keyword">User-agent:</span> *<br>
        <span class="code-keyword">Disallow:</span> /admin/<br>
        <span class="code-keyword">Disallow:</span> /panier/<br>
        <span class="code-keyword">Disallow:</span> /compte/<br>
        <span class="code-keyword">Allow:</span> /admin/produits-publics/<br><br>
        <span class="code-comment"># Règle spécifique pour Googlebot Images</span><br>
        <span class="code-keyword">User-agent:</span> Googlebot-Image<br>
        <span class="code-keyword">Disallow:</span> /images/privees/<br><br>
        <span class="code-comment"># Sitemap</span><br>
        <span class="code-keyword">Sitemap:</span> https://monsite.fr/sitemap.xml
    </div>
    <p class="text-intro">Les règles se lisent de haut en bas. La première correspondance l'emporte.</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚠️ Note importante sur robots.txt</h1>
    <h2>Une directive, pas une règle absolue</h2>
    <p class="text-intro">Le fichier robots.txt est une <strong>convention</strong>, pas une barrière technique. Les robots "respectueux" (Google, Bing, etc.) suivront vos instructions, mais...</p>
    <ul>
        <li><strong>Certains robots peuvent l'ignorer</strong> : bots malveillants, scrapers, etc.</li>
        <li><strong>Ce n'est PAS une sécurité</strong> : ne mettez jamais de données sensibles derrière un simple Disallow</li>
        <li><strong>Le fichier est public</strong> : n'importe qui peut lire votre robots.txt</li>
        <li><strong>Disallow ≠ désindexation</strong> : une page bloquée peut quand même apparaître dans Google (sans contenu)</li>
    </ul>
    <p class="slide-warning">⚠️ Pour vraiment protéger une page : utilisez une authentification, pas robots.txt !</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 Erreurs courantes avec robots.txt</h1>
    <h2>Ce qu'il ne faut surtout pas faire</h2>
    <ul>
        <li><strong>Bloquer tout le site par erreur</strong> : <code>Disallow: /</code> = plus aucune page crawlée</li>
        <li><strong>Bloquer le CSS/JS</strong> : Google doit pouvoir rendre vos pages correctement</li>
        <li><strong>Oublier le fichier</strong> : sans robots.txt, tout est crawlable (parfois trop)</li>
        <li><strong>Confondre avec noindex</strong> : robots.txt bloque le crawl, pas l'indexation</li>
        <li><strong>Syntaxe incorrecte</strong> : une faute de frappe peut tout casser</li>
    </ul>
    <p class="slide-tip">💡 <strong>Astuce :</strong> Testez votre robots.txt dans la Google Search Console > Paramètres > robots.txt</p>
</div>`,

                `<div class="slide-seo">
    <h1>🗺️ Le Sitemap XML</h1>
    <h2>La carte routière de votre site</h2>
    <p class="text-intro">Un sitemap est un fichier XML qui liste toutes les URLs importantes de votre site. C'est comme donner un GPS à Googlebot au lieu de le laisser errer.</p>
    <ul>
        <li><strong>Facilite la découverte</strong> : surtout pour les nouvelles pages ou les sites volumineux</li>
        <li><strong>Indique la priorité</strong> : quelles pages sont les plus importantes ?</li>
        <li><strong>Signale les mises à jour</strong> : date de dernière modification</li>
        <li><strong>Définit la fréquence</strong> : à quelle fréquence la page change-t-elle ?</li>
    </ul>
    <p class="text-muted mt-md">Emplacement standard : <code>https://votresite.fr/sitemap.xml</code></p>
</div>`,

                `<div class="slide-seo">
    <h1>🗺️ Structure d'un Sitemap XML</h1>
    <h2>Exemple complet avec toutes les balises</h2>
    <div class="code-block">
        <span class="code-comment">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span><br>
        <span class="code-keyword">&lt;urlset</span> xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"<span class="code-keyword">&gt;</span><br>
        &nbsp;&nbsp;<span class="code-value-green">&lt;url&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;loc&gt;</span>https://monsite.fr/<span class="code-value-orange">&lt;/loc&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;lastmod&gt;</span>2026-01-15<span class="code-value-orange">&lt;/lastmod&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;changefreq&gt;</span>weekly<span class="code-value-orange">&lt;/changefreq&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;priority&gt;</span>1.0<span class="code-value-orange">&lt;/priority&gt;</span><br>
        &nbsp;&nbsp;<span class="code-value-green">&lt;/url&gt;</span><br>
        &nbsp;&nbsp;<span class="code-value-green">&lt;url&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;loc&gt;</span>https://monsite.fr/blog/<span class="code-value-orange">&lt;/loc&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;lastmod&gt;</span>2026-01-28<span class="code-value-orange">&lt;/lastmod&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;changefreq&gt;</span>daily<span class="code-value-orange">&lt;/changefreq&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-orange">&lt;priority&gt;</span>0.8<span class="code-value-orange">&lt;/priority&gt;</span><br>
        &nbsp;&nbsp;<span class="code-value-green">&lt;/url&gt;</span><br>
        <span class="code-keyword">&lt;/urlset&gt;</span>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🗺️ Les balises du Sitemap expliquées</h1>
    <h2>À quoi sert chaque élément ?</h2>
    <ul>
        <li><strong>&lt;urlset&gt;</strong> — Conteneur principal qui englobe toutes les URLs. Définit le namespace XML du protocole sitemap.</li>
        <li><strong>&lt;url&gt;</strong> — Conteneur pour chaque URL individuelle et ses métadonnées.</li>
        <li><strong>&lt;loc&gt;</strong> — <span class="text-accent">(obligatoire)</span> L'URL complète de la page. Doit être absolue (avec https://).</li>
        <li><strong>&lt;lastmod&gt;</strong> — Date de dernière modification de la page (format : YYYY-MM-DD).</li>
        <li><strong>&lt;changefreq&gt;</strong> — Fréquence estimée de modification : <code>always</code>, <code>hourly</code>, <code>daily</code>, <code>weekly</code>, <code>monthly</code>, <code>yearly</code>, <code>never</code>.</li>
        <li><strong>&lt;priority&gt;</strong> — Importance relative de la page (0.0 à 1.0). Par défaut : 0.5.</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>⚠️ Note importante sur les Sitemaps</h1>
    <h2>Des indications, pas des commandes</h2>
    <p class="text-intro">Comme pour robots.txt, les informations du sitemap sont des <strong>suggestions</strong> aux moteurs de recherche, pas des ordres.</p>
    <ul>
        <li><strong>changefreq</strong> : Google peut ignorer cette valeur et crawler selon sa propre logique</li>
        <li><strong>priority</strong> : Utile pour indiquer l'importance <em>relative</em> entre vos pages, mais n'influence pas le classement global</li>
        <li><strong>lastmod</strong> : Respecté uniquement si la date est fiable (Google vérifie !)</li>
    </ul>
    <p class="slide-warning">⚠️ Google a officiellement déclaré ignorer <code>changefreq</code> et <code>priority</code> dans la plupart des cas. Seuls <code>loc</code> et <code>lastmod</code> sont vraiment pris en compte.</p>
    <p class="slide-tip">💡 <strong>Soumettez votre sitemap</strong> dans la Search Console > Sitemaps pour un crawl plus rapide.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🏷️ Les balises d'indexation</h1>
    <h2>Contrôle fin page par page</h2>
    <p class="text-intro">Au-delà du robots.txt global, vous pouvez contrôler l'indexation de chaque page individuellement avec la balise <code>meta robots</code>.</p>
    <div class="code-block">
        <span class="code-comment">&lt;!-- Dans le &lt;head&gt; de la page --&gt;</span><br>
        <span class="code-keyword">&lt;meta</span> name="robots" content="<span class="code-value-green">noindex, nofollow</span>"<span class="code-keyword">&gt;</span>
    </div>
    <ul class="mt-md">
        <li><strong>index / noindex</strong> : autoriser ou interdire l'indexation</li>
        <li><strong>follow / nofollow</strong> : suivre ou ignorer les liens de la page</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🏷️ Quand utiliser noindex ?</h1>
    <h2>Les cas d'usage légitimes</h2>
    <ul>
        <li><strong>Pages de remerciement</strong> après un formulaire (merci pour votre inscription)</li>
        <li><strong>Pages de résultats de recherche interne</strong> (souvent du contenu dupliqué)</li>
        <li><strong>Pages de filtres/tri</strong> sur un e-commerce (variations infinies)</li>
        <li><strong>Pages légales</strong> peu utiles pour le SEO (CGV, mentions légales)</li>
        <li><strong>Pages en staging/test</strong> avant mise en production</li>
    </ul>
    <p class="slide-warning">⚠️ Ne mettez jamais vos pages importantes en noindex par erreur. Vérifiez régulièrement dans la Search Console !</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚡ Core Web Vitals</h1>
    <h2>Les 3 métriques de performance selon Google</h2>
    <p class="text-intro-lg">Depuis 2021, Google intègre officiellement la performance dans ses critères de classement. Trois métriques clés mesurent l'expérience utilisateur.</p>
    <div class="slide-diagram flex-col gap-md">
        <div class="cwv-item">
            <span class="step cwv-lcp">LCP</span>
            <span class="text-light">Largest Contentful Paint – Temps d'affichage du contenu principal</span>
        </div>
        <div class="cwv-item">
            <span class="step cwv-inp">INP</span>
            <span class="text-light">Interaction to Next Paint – Réactivité aux interactions</span>
        </div>
        <div class="cwv-item">
            <span class="step cwv-cls">CLS</span>
            <span class="text-light">Cumulative Layout Shift – Stabilité visuelle de la page</span>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>⚡ LCP : Largest Contentful Paint</h1>
    <h2>À quelle vitesse le contenu principal apparaît-il ?</h2>
    <p class="text-intro">Le LCP mesure le temps de chargement du plus grand élément visible (souvent une image hero ou un bloc de texte).</p>
    <p class="text-light mt-sm"><strong>💡 Image Hero :</strong> C'est le premier grand visuel que vous voyez en haut d'une page web, juste en dessous du menu de navigation. C'est l'élément qui doit "sauver" l'attention du visiteur dès les premières secondes.</p>
    <div class="market-share mt-lg">
        <div class="share-bar">
            <span class="share-label">Bon</span>
            <div class="share-fill w-50 share-fill-good"></div>
            <span class="share-value">≤ 2,5s</span>
        </div>
        <div class="share-bar">
            <span class="share-label">À améliorer</span>
            <div class="share-fill w-30 share-fill-ok"></div>
            <span class="share-value">≤ 4s</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Mauvais</span>
            <div class="share-fill w-20 share-fill-bad"></div>
            <span class="share-value">&gt; 4s</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Optimisations</strong> : compression d'images, lazy loading, CDN, cache navigateur</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚡ INP : Interaction to Next Paint</h1>
    <h2>Le site réagit-il vite aux clics ?</h2>
    <p class="text-intro">INP (qui a remplacé FID en 2024) mesure le temps entre une interaction utilisateur (clic, tap, touche) et la réponse visuelle de la page.</p>
    <div class="market-share mt-lg">
        <div class="share-bar">
            <span class="share-label">Bon</span>
            <div class="share-fill w-50 share-fill-good"></div>
            <span class="share-value">≤ 200ms</span>
        </div>
        <div class="share-bar">
            <span class="share-label">À améliorer</span>
            <div class="share-fill w-30 share-fill-ok"></div>
            <span class="share-value">≤ 500ms</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Mauvais</span>
            <div class="share-fill w-20 share-fill-bad"></div>
            <span class="share-value">&gt; 500ms</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Optimisations</strong> : réduire le JavaScript, différer les scripts non critiques, utiliser des Web Workers</p>
    <p class="slide-note">🔧 <strong>Web Workers</strong> : scripts JS qui s'exécutent en arrière-plan, dans un thread séparé. Ils permettent d'effectuer des calculs lourds sans bloquer l'interface utilisateur.</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚡ CLS : Cumulative Layout Shift</h1>
    <h2>La page bouge-t-elle de façon inattendue ?</h2>
    <p class="text-intro">Vous avez déjà cliqué sur un bouton... et une pub s'est chargée, décalant tout ? C'est exactement ce que mesure le CLS.</p>
    <div class="market-share mt-lg">
        <div class="share-bar">
            <span class="share-label">Bon</span>
            <div class="share-fill w-50 share-fill-good"></div>
            <span class="share-value">≤ 0,1</span>
        </div>
        <div class="share-bar">
            <span class="share-label">À améliorer</span>
            <div class="share-fill w-30 share-fill-ok"></div>
            <span class="share-value">≤ 0,25</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Mauvais</span>
            <div class="share-fill w-20 share-fill-bad"></div>
            <span class="share-value">&gt; 0,25</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Optimisations</strong> : dimensions fixes pour images/vidéos, réserver l'espace des pubs, éviter les insertions dynamiques</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Outils pour mesurer la performance</h1>
    <h2>Diagnostiquer avant d'optimiser</h2>
    <ul>
        <li><strong>Google PageSpeed Insights</strong> : analyse une URL et donne des recommandations détaillées</li>
        <li><strong>Lighthouse</strong> : intégré à Chrome DevTools (F12 > Lighthouse)</li>
        <li><strong>Search Console</strong> : rapport "Expérience sur la page" avec données réelles</li>
    </ul>
    <p class="slide-warning">⚠️ PageSpeed donne des données lab (simulées). La Search Console donne des données terrain (vrais utilisateurs). Les deux sont utiles !</p>
</div>`,

                `<div class="slide-seo">
    <h1>📱 Mobile-First Indexing</h1>
    <h2>Google crawle d'abord la version mobile</h2>
    <p class="text-intro">Depuis 2019, Google utilise principalement la <strong>version mobile</strong> de votre site pour l'indexation et le classement. La version desktop est secondaire.</p>
    <ul>
        <li><strong>60%+ du trafic web</strong> vient des mobiles</li>
        <li>Si votre site mobile est moins riche que le desktop, vous perdez du contenu indexé</li>
        <li>Un site non responsive est pénalisé dans les résultats mobiles</li>
    </ul>
    <p class="slide-highlight mt-lg">Règle d'or : ce qui n'est pas sur mobile n'existe pas pour Google.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📱 Responsive vs m.site</h1>
    <h2>Quelle approche choisir ?</h2>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>✅ Responsive (recommandé)</h3>
            <ul>
                <li>Une seule URL pour tous les appareils</li>
                <li>Le CSS adapte l'affichage</li>
                <li>Maintenance simplifiée</li>
                <li>Préféré par Google</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>⚠️ Site mobile séparé (m.)</h3>
            <ul>
                <li>URLs différentes (m.site.fr)</li>
                <li>Contenu parfois différent</li>
                <li>Risque de duplication</li>
                <li>Indiquer à Google où se trouve la page d'origine</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 En 2026, le responsive design est le standard. Les sites "m." sont considérés comme obsolètes.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📱 Checklist Mobile-Friendly</h1>
    <h2>Votre site passe-t-il le test ?</h2>
    <ul>
        <li>✅ Texte lisible sans zoomer (min. 16px recommandé)</li>
        <li>✅ Boutons et liens assez grands pour le doigt (min. 48x48px)</li>
        <li>✅ Pas de scroll horizontal</li>
        <li>✅ Viewport configuré : <code>&lt;meta name="viewport" content="width=device-width"&gt;</code></li>
        <li>✅ Contenu identique entre mobile et desktop</li>
        <li>✅ Pop-ups non intrusives (sinon pénalité Google)</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🏗️ Architecture du site</h1>
    <h2>La structure qui plaît à Google (et aux humains)</h2>
    <p class="text-intro">Une bonne architecture facilite le crawl, distribue le "jus de lien" équitablement, et aide les utilisateurs à trouver ce qu'ils cherchent.</p>
    <div class="slide-diagram flex-col gap-sm items-center">
        <span class="step step-home">Accueil</span>
        <span class="text-info">↓</span>
        <div class="arch-categories">
            <span class="step">Catégorie A</span>
            <span class="step">Catégorie B</span>
            <span class="step">Catégorie C</span>
        </div>
        <span class="text-info">↓</span>
        <div class="arch-pages">
            <span class="step step-sm">Page 1</span>
            <span class="step step-sm">Page 2</span>
            <span class="step step-sm">Page 3</span>
            <span class="step step-sm">...</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Règle des 3 clics</strong> : toute page importante devrait être accessible en 3 clics max depuis l'accueil.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🏗️ Structure des URLs</h1>
    <h2>Des URLs propres et compréhensibles</h2>
    <p class="text-intro">Une bonne URL est à la fois parlante pour l'utilisateur et optimisée pour le SEO.</p>
    <div class="mt-lg">
        <p class="url-bad">❌ <code>monsite.fr/p?id=12847&cat=3&ref=nav</code></p>
        <p class="url-good">✅ <code>monsite.fr/chaussures/baskets-running-homme</code></p>
    </div>
    <ul>
        <li><strong>Mots-clés dans l'URL</strong> : oui, mais sans sur-optimiser</li>
        <li><strong>Tirets (-)</strong> pour séparer les mots, pas d'underscores (_)</li>
        <li><strong>Tout en minuscules</strong> : évite les problèmes de duplication</li>
        <li><strong>Courte et descriptive</strong> : idéalement < 75 caractères</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Les URLs canoniques</h1>
    <h2>Éviter le contenu dupliqué</h2>
    <p class="text-intro">Un même contenu peut être accessible via plusieurs URLs (avec/sans www, avec paramètres de tri, etc.). La balise <strong>canonical</strong> indique à Google quelle URL est "la vraie".</p>
    <div class="code-block">
        <span class="code-comment">&lt;!-- Dans le &lt;head&gt; --&gt;</span><br>
        <span class="code-keyword">&lt;link</span> rel="canonical" href="https://monsite.fr/page-principale"<span class="code-keyword">&gt;</span>
    </div>
    <ul class="mt-md">
        <li>Consolidation du "jus de lien" sur une seule URL</li>
        <li>Évite les pénalités pour contenu dupliqué</li>
        <li>Google peut ignorer votre canonical s'il juge qu'une autre URL est meilleure</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🔒 HTTPS : Non négociable</h1>
    <h2>La sécurité comme facteur de classement</h2>
    <p class="text-intro">Depuis 2014, Google favorise les sites en HTTPS. Depuis 2018, Chrome affiche "Non sécurisé" pour les sites HTTP.</p>
    <ul>
        <li><strong>Signal de classement</strong> : léger boost SEO pour les sites HTTPS</li>
        <li><strong>Confiance utilisateur</strong> : le cadenas vert rassure</li>
        <li><strong>Données protégées</strong> : formulaires, paiements, connexions</li>
        <li><strong>HTTP/2</strong> : protocole plus rapide, nécessite HTTPS</li>
    </ul>
    <p class="slide-warning">⚠️ Un site e-commerce sans HTTPS en 2026 ? C'est rédhibitoire pour Google ET pour vos clients.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Checklist Audit Technique</h1>
    <h2>Les points à vérifier systématiquement</h2>
    <ul>
        <li>☐ <strong>robots.txt</strong> bien configuré (pas de blocage accidentel)</li>
        <li>☐ <strong>Sitemap XML</strong> soumis dans la Search Console</li>
        <li>☐ <strong>Core Web Vitals</strong> dans le vert (LCP, INP, CLS)</li>
        <li>☐ <strong>Mobile-friendly</strong> vérifié avec l'outil Google</li>
        <li>☐ <strong>HTTPS</strong> activé sur tout le site</li>
        <li>☐ <strong>Canonicals</strong> en place pour éviter les doublons</li>
        <li>☐ <strong>Erreurs 404</strong> identifiées et corrigées (ou redirigées)</li>
        <li>☐ <strong>Redirections 301</strong> pour les anciennes URLs</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 2</h1>
    <h2>Ce qu'il faut absolument retenir</h2>
    <ul>
        <li>🤖 <strong>Robots.txt & Sitemap</strong> : guidez Googlebot, ne le bloquez pas.</li>
        <li>⚡ <strong>Core Web Vitals</strong> : LCP < 2,5s, INP < 200ms, CLS < 0,1.</li>
        <li>📱 <strong>Mobile-First</strong> : votre site mobile EST votre site pour Google.</li>
        <li>🏗️ <strong>Architecture</strong> : structure claire, URLs propres, 3 clics max.</li>
        <li>🔒 <strong>HTTPS</strong> : obligatoire, point final.</li>
    </ul>
    <p class="slide-tip">💡 Un audit technique est le <strong>premier pas</strong> de toute stratégie SEO. Sans fondations solides, rien ne tient.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 Exercice pratique</h1>
    <h2>Auditez votre propre site</h2>
    <ul>
        <li><strong>1.</strong> Allez sur <code>votresite.fr/robots.txt</code> — est-il bien configuré ?</li>
        <li><strong>2.</strong> Testez une page sur PageSpeed Insights — quels sont vos Core Web Vitals ?</li>
        <li><strong>3.</strong> Utilisez le test mobile-friendly de Google — des problèmes détectés ?</li>
        <li><strong>4.</strong> Vérifiez dans la Search Console > Indexation — combien de pages indexées vs soumises ?</li>
    </ul>
    <p class="slide-tip">💡 <strong>Prochain chapitre :</strong> La recherche de mots-clés et l'étude sémantique — comment choisir les batailles à mener.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔑 Chapitre 3</h1>
    <h2>La recherche de mots-clés et l'étude sémantique</h2>
    <p class="text-intro">Avant de créer du contenu, il faut savoir sur quoi se positionner. La recherche de mots-clés est le <strong>GPS de votre stratégie SEO</strong> : elle vous dit où aller et comment y arriver.</p>
    <div class="slide-agenda">
        <p>📊 Typologie des mots-clés (courte traîne vs longue traîne)</p>
        <p>🛠️ Outils de planification et analyse de la concurrence</p>
        <p>🗺️ Cartographie de contenu (Keyword Mapping)</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔑 Qu'est-ce qu'un mot-clé ?</h1>
    <h2>La base de toute stratégie SEO</h2>
    <p class="text-intro">Un <strong>mot-clé</strong> (ou keyword) est le terme ou l'expression que les internautes tapent dans un moteur de recherche pour trouver une information, un produit ou un service.</p>
    <ul>
        <li><strong>Mot-clé simple</strong> : "chaussures" (1 mot)</li>
        <li><strong>Expression-clé</strong> : "chaussures de running" (plusieurs mots)</li>
        <li><strong>Requête de recherche</strong> : "quelles sont les meilleures chaussures de running pour marathon"</li>
    </ul>
    <p class="slide-tip">💡 En SEO, on parle souvent de "mots-clés" pour désigner toutes ces variations. L'objectif : comprendre ce que cherchent vos clients potentiels.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Courte traîne vs Longue traîne</h1>
    <h2>Deux stratégies, deux philosophies</h2>
    <p class="text-intro-lg">Les mots-clés se divisent en deux grandes familles, avec des caractéristiques opposées.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>🎯 Courte traîne (Head)</h3>
            <ul>
                <li><strong>1-2 mots</strong> maximum</li>
                <li><strong>Volume élevé</strong> de recherches</li>
                <li><strong>Concurrence féroce</strong></li>
                <li><strong>Intention floue</strong></li>
            </ul>
            <p class="text-muted mt-sm">Ex : "chaussures", "SEO", "voyage"</p>
        </div>
        <div class="comparison-col">
            <h3>🐍 Longue traîne (Long Tail)</h3>
            <ul>
                <li><strong>3+ mots</strong>, phrases complètes</li>
                <li><strong>Volume faible</strong> individuellement</li>
                <li><strong>Concurrence modérée</strong></li>
                <li><strong>Intention précise</strong></li>
            </ul>
            <p class="text-muted mt-sm">Ex : "chaussures running femme pronateur"</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📈 Le concept de la longue traîne</h1>
    <h2>Visualiser la distribution des recherches</h2>
    <p class="text-intro">Le terme "longue traîne" vient de la forme de la courbe de distribution des recherches. Quelques mots-clés génèrent beaucoup de trafic, mais la majorité du trafic vient d'une multitude de requêtes spécifiques.</p>
    <div class="longtail-diagram">
        <div class="longtail-chart">
            <div class="longtail-head">
                <div class="longtail-bar longtail-bar-1"></div>
                <div class="longtail-bar longtail-bar-2"></div>
                <div class="longtail-bar longtail-bar-3"></div>
            </div>
            <div class="longtail-tail">
                <div class="longtail-bar longtail-bar-4"></div>
                <div class="longtail-bar longtail-bar-5"></div>
                <div class="longtail-bar longtail-bar-6"></div>
                <div class="longtail-bar longtail-bar-7"></div>
                <div class="longtail-bar longtail-bar-8"></div>
                <div class="longtail-bar longtail-bar-9"></div>
                <div class="longtail-bar longtail-bar-10"></div>
            </div>
        </div>
        <div class="longtail-labels">
            <span class="longtail-label-head">Courte traîne<br><small>30% du trafic</small></span>
            <span class="longtail-label-tail">Longue traîne<br><small>70% du trafic</small></span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Révélation :</strong> 70% du trafic de recherche provient de requêtes longue traîne. C'est là que se cachent les opportunités !</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Exemple concret</h1>
    <h2>Du générique au spécifique</h2>
    <p class="text-intro">Observons comment le volume et la conversion évoluent selon la précision du mot-clé.</p>
    <div class="keyword-funnel">
        <div class="funnel-row">
            <span class="funnel-keyword funnel-head">"ordinateur"</span>
            <span class="funnel-stats">450 000 recherches/mois • Conversion ~0,5%</span>
        </div>
        <div class="funnel-row">
            <span class="funnel-keyword funnel-mid">"ordinateur portable"</span>
            <span class="funnel-stats">110 000 recherches/mois • Conversion ~1,5%</span>
        </div>
        <div class="funnel-row">
            <span class="funnel-keyword funnel-mid2">"ordinateur portable gamer"</span>
            <span class="funnel-stats">27 000 recherches/mois • Conversion ~3%</span>
        </div>
        <div class="funnel-row">
            <span class="funnel-keyword funnel-tail">"ordinateur portable gamer pas cher 2026"</span>
            <span class="funnel-stats">880 recherches/mois • Conversion ~8%</span>
        </div>
    </div>
    <p class="slide-tip">💡 Plus le mot-clé est précis, plus l'intention d'achat est claire. Moins de visiteurs, mais des visiteurs plus qualifiés !</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚖️ Avantages et inconvénients</h1>
    <h2>Courte traîne : les promesses et les pièges</h2>
    <div class="pros-cons">
        <div class="pros">
            <h3>✅ Avantages</h3>
            <ul>
                <li>Volume de trafic potentiel énorme</li>
                <li>Notoriété de marque renforcée</li>
                <li>Impact visible si on réussit à se positionner</li>
            </ul>
        </div>
        <div class="cons">
            <h3>❌ Inconvénients</h3>
            <ul>
                <li>Concurrence extrême (Amazon, Wikipedia...)</li>
                <li>Coût d'acquisition très élevé en SEA</li>
                <li>Intention de recherche souvent floue</li>
                <li>Taux de conversion généralement faible</li>
            </ul>
        </div>
    </div>
    <p class="slide-warning">⚠️ Se positionner sur "chaussures" peut prendre des années et des milliers d'euros en contenu. Est-ce vraiment rentable pour vous ?</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚖️ Avantages et inconvénients</h1>
    <h2>Longue traîne : l'arme secrète du SEO</h2>
    <div class="pros-cons">
        <div class="pros">
            <h3>✅ Avantages</h3>
            <ul>
                <li>Concurrence modérée, plus accessible</li>
                <li>Intention de recherche claire et qualifiée</li>
                <li>Taux de conversion nettement supérieur</li>
                <li>Effet cumulatif : des centaines de petits ruisseaux font une rivière</li>
            </ul>
        </div>
        <div class="cons">
            <h3>❌ Inconvénients</h3>
            <ul>
                <li>Volume individuel faible</li>
                <li>Nécessite de produire beaucoup de contenu</li>
                <li>Résultats moins spectaculaires à court terme</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Stratégie recommandée :</strong> Commencez par la longue traîne pour générer du trafic qualifié, puis attaquez progressivement les termes plus concurrentiels.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Le volume de recherche</h1>
    <h2>Comprendre les métriques clés</h2>
    <p class="text-intro">Le <strong>volume de recherche</strong> indique combien de fois un mot-clé est recherché par mois. C'est une moyenne mensuelle, souvent calculée sur 12 mois.</p>
    <ul>
        <li><strong>Volume élevé</strong> (>10 000/mois) : mots-clés très demandés, forte concurrence</li>
        <li><strong>Volume moyen</strong> (1 000-10 000/mois) : sweet spot pour de nombreux sites</li>
        <li><strong>Volume faible</strong> (<1 000/mois) : niches, mais souvent très qualifiées</li>
    </ul>
     <p class="slide-tip">💡 <strong>Le "sweet spot"</strong> est l'équilibre stratégique idéal entre un volume de recherche suffisant pour générer du trafic et une concurrence assez faible pour permettre un positionnement rapide.</p>
    <p class="slide-warning">⚠️ Un volume de 0 ne signifie pas qu'il n'y a pas de recherches ! Les outils ont des seuils de détection. Un mot-clé à "0" peut générer 10-50 recherches/mois.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 La difficulté de mot-clé (KD)</h1>
    <h2>Mesurer la concurrence</h2>
    <p class="text-intro">La <strong>Keyword Difficulty</strong> (KD) est un score de 0 à 100 qui estime à quel point il sera difficile de se positionner en première page pour un mot-clé donné.</p>
    <div class="kd-scale">
        <div class="kd-item kd-easy">
            <span class="kd-score">0-30</span>
            <span class="kd-label">Facile</span>
            <p class="kd-desc">Sites récents, peu de backlinks nécessaires</p>
        </div>
        <div class="kd-item kd-medium">
            <span class="kd-score">31-60</span>
            <span class="kd-label">Moyen</span>
            <p class="kd-desc">Contenu de qualité + quelques backlinks</p>
        </div>
        <div class="kd-item kd-hard">
            <span class="kd-score">61-100</span>
            <span class="kd-label">Difficile</span>
            <p class="kd-desc">Sites établis, stratégie backlinks intensive</p>
        </div>
    </div>
    <p class="slide-tip">💡 Le KD varie selon les outils (Ahrefs, SEMrush, Moz). Utilisez-le comme indicateur relatif, pas absolu.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🧪 Exercice : Testez la difficulté !</h1>
    <h2>Découvrez le KD de mots-clés concurrentiels</h2>
    <p class="text-intro">Rendez-vous sur l'outil gratuit d'Ahrefs pour analyser la difficulté de ces mots-clés très disputés :</p>
    <p class="mt-md"><a href="https://ahrefs.com/fr/keyword-difficulty" target="_blank" class="tool-link">🔗 ahrefs.com/fr/keyword-difficulty</a></p>
    <div class="keyword-test-grid">
        <span class="keyword-chip">assurance</span>
        <span class="keyword-chip">assurance auto</span>
        <span class="keyword-chip">crédit immobilier</span>
        <span class="keyword-chip">mutuelle santé</span>
        <span class="keyword-chip">hôtel Paris</span>
        <span class="keyword-chip">rachat de crédit</span>
        <span class="keyword-chip">plombier Paris</span>
        <span class="keyword-chip">voiture occasion</span>
        <span class="keyword-chip">formation en ligne</span>
        <span class="keyword-chip">avocat divorce</span>
        <span class="keyword-chip">site de rencontre</span>
        <span class="keyword-chip">voyage pas cher</span>
    </div>
    <p class="slide-tip">💡 <strong>Observez :</strong> Ces mots-clés ont généralement un KD > 50. Ce sont des secteurs très concurrentiels où seuls les gros acteurs peuvent rivaliser en courte traîne.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Les outils gratuits</h1>
    <h2>Commencer sans budget</h2>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>📊 Google Keyword Planner</h3>
            <p>L'outil officiel de Google, intégré à Google Ads. Donne les volumes de recherche et les tendances saisonnières.</p>
            <p class="text-muted">✓ Gratuit avec un compte Google Ads <i>(Google Ads/outils/outil de planification des mots clés)</i></p>
        </div>
        <div class="tool-card">
            <h3>📈 Google Trends</h3>
            <p>Analyse l'évolution de l'intérêt pour un terme dans le temps. Parfait pour détecter les tendances et la saisonnalité.</p>
            <p class="text-muted">✓ 100% gratuit. <i>Testez avec Avatar 3 pour mesurer l'intérêt suscité</i></p>
        </div>
        <div class="tool-card">
            <h3>🔍 Google Search Console</h3>
            <p>Montre les requêtes réelles qui amènent du trafic sur votre site. Une mine d'or souvent sous-exploitée !</p>
            <p class="text-muted">✓ Gratuit pour votre propre site</p>
        </div>
        <div class="tool-card">
            <h3>💡 AnswerThePublic</h3>
            <p>Visualise les questions que les gens posent autour d'un sujet. Idéal pour trouver des idées de contenu.</p>
            <p class="text-muted">✓ 3 recherches gratuites/jour</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Google Keyword Planner</h1>
    <h2>L'outil de référence, mode d'emploi</h2>
    <p class="text-intro">Le Keyword Planner est accessible via Google Ads (gratuit, pas besoin de dépenser en pub). Il propose deux fonctionnalités principales :</p>
    <ul>
        <li><strong>Découvrir de nouveaux mots-clés</strong> : entrez un sujet ou une URL, l'outil suggère des centaines de mots-clés associés</li>
        <li><strong>Obtenir le volume de recherche</strong> : entrez une liste de mots-clés, obtenez leurs statistiques</li>
    </ul>
    <div class="metrics-list mt-lg">
        <p><span class="metric-label">Volume moyen mensuel</span> Nombre de recherches par mois (fourchette ou chiffre exact si vous avez des campagnes actives)</p>
        <p><span class="metric-label">Concurrence</span> Niveau de compétition publicitaire (Faible/Moyenne/Forte)</p>
        <p><span class="metric-label">Enchère suggérée</span> Coût par clic estimé en SEA — indicateur indirect de la valeur commerciale</p>
    </div>
    <p class="slide-tip">💡 <strong>Astuce :</strong> Une enchère élevée = mot-clé à forte valeur commerciale. Même si vous faites du SEO, c'est un signal intéressant !</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Google Trends</h1>
    <h2>Détecter les tendances et la saisonnalité</h2>
    <p class="text-intro">Google Trends ne donne pas de volumes absolus, mais montre l'<strong>évolution de l'intérêt</strong> pour un terme dans le temps et par zone géographique.</p>
    <ul>
        <li><strong>Comparer des termes</strong> : "SEO" vs "référencement naturel" — lequel est le plus recherché ?</li>
        <li><strong>Détecter la saisonnalité</strong> : "maillot de bain" explose en juin, "doudoune" en novembre</li>
        <li><strong>Identifier les tendances émergentes</strong> : un terme qui monte = opportunité à saisir</li>
        <li><strong>Analyser par région</strong> : le terme est-il populaire dans votre zone de chalandise ?</li>
    </ul>
    <p class="slide-warning">⚠️ L'échelle de Trends est relative (0-100). Un score de 50 signifie "moitié moins de recherches que le pic", pas "50 recherches".</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Les outils payants</h1>
    <h2>Passer au niveau supérieur</h2>
    <div class="tools-grid">
        <div class="tool-card tool-premium">
            <h3>🔷 SEMrush</h3>
            <p>Suite complète : mots-clés, audit technique, suivi de positions, analyse concurrentielle. Le couteau suisse du SEO.</p>
            <p class="text-accent">À partir de ~120€/mois</p>
        </div>
        <div class="tool-card tool-premium">
            <h3>🟠 Ahrefs</h3>
            <p>Référence pour l'analyse de backlinks, mais aussi excellent pour la recherche de mots-clés et l'audit de contenu.</p>
            <p class="text-accent">À partir de ~99$/mois</p>
        </div>
        <div class="tool-card tool-premium">
            <h3>🟣 Moz Pro</h3>
            <p>Interface intuitive, bon pour les débutants.</p>
            <p class="text-accent">À partir de ~99$/mois</p>
        </div>
        <div class="tool-card tool-premium">
            <h3>🟢 Ubersuggest</h3>
            <p>Version allégée et abordable. Bon rapport qualité/prix pour les petits budgets.</p>
            <p class="text-accent">À partir de ~29€/mois (ou achat à vie)</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔍 Analyse de la concurrence</h1>
    <h2>Espionner (légalement) vos concurrents</h2>
    <p class="text-intro">Pourquoi réinventer la roue ? Vos concurrents ont déjà fait le travail de recherche de mots-clés. Analysez leurs positions pour identifier des opportunités.</p>
    <ul>
        <li><strong>Identifier les concurrents SEO</strong> : ce ne sont pas forcément vos concurrents commerciaux ! Cherchez qui se positionne sur vos mots-clés cibles.</li>
        <li><strong>Analyser leur trafic organique</strong> : SEMrush et Ahrefs estiment le trafic de n'importe quel site</li>
        <li><strong>Lister leurs mots-clés</strong> : sur quels termes sont-ils positionnés que vous avez ratés ?</li>
        <li><strong>Étudier leur contenu</strong> : quel format utilisent-ils ? Quelle longueur ? Quels angles ?</li>
    </ul>
    <p class="slide-tip">💡 <strong>Content Gap Analysis :</strong> Cette technique consiste à trouver les mots-clés sur lesquels vos concurrents rankent... mais pas vous. C'est de l'or en barre !</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔍 Méthode d'analyse concurrentielle</h1>
    <h2>Les 5 étapes clés</h2>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Identifier 3-5 concurrents SEO</strong>
                <p>Tapez vos mots-clés principaux et notez qui apparaît systématiquement en page 1</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Analyser leur profil de mots-clés</strong>
                <p>Utilisez Ahrefs/SEMrush pour exporter la liste de leurs mots-clés positionnés</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Identifier les opportunités</strong>
                <p>Filtrez les mots-clés à volume correct et difficulté accessible</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Analyser les pages qui rankent</strong>
                <p>Étudiez le format, la longueur, la structure des contenus gagnants</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">5</span>
            <div class="step-content">
                <strong>Créer du contenu supérieur</strong>
                <p>Technique du "Skyscraper" : faites mieux, plus complet, plus à jour</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🏗️ La technique Skyscraper</h1>
    <h2>Surpasser les contenus existants</h2>
    <p class="text-intro">Inventée par Brian Dean (Backlinko), la technique du <strong>Skyscraper</strong> (gratte-ciel) consiste à créer le contenu le plus complet et le plus qualitatif sur un sujet donné.</p>
    <div class="skyscraper-steps">
        <div class="skyscraper-step">
            <span class="emoji">🔍</span>
            <p><strong>1. Trouvez</strong> un contenu populaire qui génère des backlinks</p>
        </div>
        <div class="skyscraper-step">
            <span class="emoji">📝</span>
            <p><strong>2. Créez</strong> une version nettement supérieure (plus longue, plus à jour, mieux illustrée)</p>
        </div>
        <div class="skyscraper-step">
            <span class="emoji">📧</span>
            <p><strong>3. Contactez</strong> les sites qui ont fait des liens vers l'original pour leur proposer votre version</p>
        </div>
    </div>
    <p class="slide-tip">💡 Un contenu "10x" (10 fois meilleur) a naturellement plus de chances d'attirer des backlinks et des partages.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🗺️ Le Keyword Mapping</h1>
    <h2>Qu'est-ce que la cartographie de mots-clés ?</h2>
    <p class="text-intro">Le <strong>Keyword Mapping</strong> (ou cartographie de mots-clés) est le processus d'attribution de mots-clés spécifiques à des pages spécifiques de votre site.</p>
    <p class="slide-highlight mt-lg">1 page = 1 intention = 1 groupe de mots-clés</p>
    <ul class="mt-lg">
        <li><strong>Évite la cannibalisation</strong> : deux pages qui ciblent le même mot-clé se font concurrence</li>
        <li><strong>Structure le contenu</strong> : chaque page a un objectif SEO clair</li>
        <li><strong>Facilite le suivi</strong> : on sait quelle page doit ranker sur quel terme</li>
        <li><strong>Identifie les lacunes</strong> : quels mots-clés n'ont pas encore de page dédiée ?</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>⚠️ La cannibalisation de mots-clés</h1>
    <h2>Quand vos pages se battent entre elles</h2>
    <p class="text-intro">La <strong>cannibalisation</strong> se produit quand plusieurs pages de votre site ciblent le même mot-clé. Google ne sait plus laquelle afficher, et souvent... il n'en affiche aucune correctement.</p>
    <div class="cannibalization-example">
        <div class="cannibal-bad">
            <h4>❌ Mauvaise approche</h4>
            <p><code>/blog/seo-guide</code> → "guide SEO"</p>
            <p><code>/blog/seo-debutant</code> → "guide SEO"</p>
            <p><code>/services/seo</code> → "guide SEO"</p>
            <p class="result">Résultat : les 3 pages se cannibalisent</p>
        </div>
        <div class="cannibal-good">
            <h4>✅ Bonne approche</h4>
            <p><code>/blog/seo-guide</code> → "guide SEO complet"</p>
            <p><code>/blog/seo-debutant</code> → "SEO pour débutant"</p>
            <p><code>/services/seo</code> → "agence SEO Lyon"</p>
            <p class="result">Résultat : chaque page a son territoire</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🗺️ Créer son Keyword Map</h1>
    <h2>La méthodologie pas à pas</h2>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Inventorier les pages existantes</strong>
                <p>Listez toutes les URLs de votre site (utilisez Screaming Frog ou une extraction de sitemap)</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Exporter vos données Search Console</strong>
                <p>Pour chaque page, identifiez les requêtes qui génèrent déjà des impressions</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Regrouper les mots-clés par intention</strong>
                <p>Créez des clusters sémantiques : mots-clés principaux + secondaires + variations</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Attribuer à chaque page son cluster</strong>
                <p>1 page = 1 mot-clé principal + 3-5 mots-clés secondaires</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">5</span>
            <div class="step-content">
                <strong>Identifier les gaps</strong>
                <p>Quels clusters importants n'ont pas encore de page ? → contenu à créer</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📋 Exemple de Keyword Map</h1>
    <h2>Un tableau structuré</h2>
    <div class="keyword-map-table">
        <div class="km-header">
            <span>URL</span>
            <span>Mot-clé principal</span>
            <span>Volume</span>
            <span>KD</span>
            <span>Mots-clés secondaires</span>
        </div>
        <div class="km-row">
            <span class="km-url">/chaussures-running/</span>
            <span class="km-kw">chaussures running</span>
            <span class="km-vol">18 000</span>
            <span class="km-kd kd-hard-sm">72</span>
            <span class="km-sec">basket running, chaussures course à pied</span>
        </div>
        <div class="km-row">
            <span class="km-url">/blog/choisir-running/</span>
            <span class="km-kw">comment choisir chaussures running</span>
            <span class="km-vol">2 400</span>
            <span class="km-kd kd-medium-sm">41</span>
            <span class="km-sec">guide chaussures running, quelle chaussure running</span>
        </div>
        <div class="km-row">
            <span class="km-url">/running-pronateur/</span>
            <span class="km-kw">chaussures running pronateur</span>
            <span class="km-vol">1 600</span>
            <span class="km-kd kd-easy-sm">28</span>
            <span class="km-sec">running pronation, chaussures surpronation</span>
        </div>
        <div class="km-row km-row-gap">
            <span class="km-url">⚠️ À créer</span>
            <span class="km-kw">chaussures running femme</span>
            <span class="km-vol">8 100</span>
            <span class="km-kd kd-medium-sm">55</span>
            <span class="km-sec">running femme, basket running femme</span>
        </div>
    </div>
    <p class="slide-tip">💡 Ce tableau peut être réalisé sur Excel, Google Sheets, ou dans des outils comme Ahrefs/SEMrush qui proposent des fonctionnalités de mapping intégrées.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Les clusters sémantiques</h1>
    <h2>Organiser les mots-clés par thématique</h2>
    <p class="text-intro">Un <strong>cluster sémantique</strong> est un groupe de mots-clés qui partagent la même intention de recherche. Google comprend que ces termes sont liés et s'attend à les trouver ensemble.</p>
    <div class="cluster-diagram">
        <div class="cluster-center">
            <span class="cluster-main">chaussures running</span>
        </div>
        <div class="cluster-satellites">
            <span class="cluster-sat">basket running</span>
            <span class="cluster-sat">chaussures course</span>
            <span class="cluster-sat">running shoes</span>
            <span class="cluster-sat">chaussures jogging</span>
            <span class="cluster-sat">sneakers running</span>
            <span class="cluster-sat">chaussures pour courir</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Astuce :</strong> Utilisez les "recherches associées" en bas de page Google et les suggestions de saisie pour enrichir vos clusters.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📐 Architecture en Topic Clusters</h1>
    <h2>La structure moderne du contenu SEO</h2>
    <p class="text-intro">L'approche <strong>Topic Cluster</strong> (ou Pillar/Cluster) organise votre contenu autour de pages piliers (sujets principaux) et de pages satellites (sous-sujets) liées entre elles.</p>
    <div class="topic-cluster-diagram">
        <div class="pillar-page">
            <strong>PAGE PILIER</strong>
            <p>Guide complet du running</p>
            <p class="text-muted">(3000+ mots, couvre tout le sujet)</p>
        </div>
        <div class="cluster-links">
            <span class="link-line">↔</span>
            <span class="link-line">↔</span>
            <span class="link-line">↔</span>
        </div>
        <div class="cluster-pages">
            <div class="cluster-page">Choisir ses chaussures</div>
            <div class="cluster-page">Programme débutant</div>
            <div class="cluster-page">Nutrition du coureur</div>
            <div class="cluster-page">Éviter les blessures</div>
            <div class="cluster-page">Préparer un marathon</div>
        </div>
    </div>
    <p class="slide-tip">💡 Les pages satellites font des liens vers la page pilier (et vice-versa). Cela renforce l'autorité thématique de l'ensemble.</p>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Bonnes pratiques du Keyword Mapping</h1>
    <h2>Les règles d'or à respecter</h2>
    <ul>
        <li><strong>1 mot-clé principal par page</strong> — Ne dispersez pas vos efforts</li>
        <li><strong>Évitez la sur-optimisation</strong> — Le mot-clé dans le titre, 1-2 fois dans le contenu, c'est suffisant</li>
        <li><strong>Privilégiez l'intention sur le volume</strong> — 100 visiteurs qualifiés > 10 000 visiteurs perdus</li>
        <li><strong>Mettez à jour régulièrement</strong> — Les volumes changent, de nouvelles opportunités apparaissent</li>
        <li><strong>Documentez vos décisions</strong> — Un Google Sheet partagé évite les doublons dans l'équipe</li>
        <li><strong>Pensez parcours utilisateur</strong> — Du contenu informatif (blog) vers le transactionnel (produits)</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Prioriser ses mots-clés</h1>
    <h2>La matrice Opportunité / Effort</h2>
    <p class="text-intro">Tous les mots-clés ne méritent pas le même investissement. Utilisez une matrice pour prioriser vos actions.</p>
    <div class="priority-matrix">
        <div class="matrix-quadrant matrix-q1">
            <h4>🎯 Priorité 1</h4>
            <p>Volume correct + KD faible</p>
            <p class="text-muted">Quick wins à saisir !</p>
        </div>
        <div class="matrix-quadrant matrix-q2">
            <h4>📈 Priorité 2</h4>
            <p>Volume élevé + KD moyen</p>
            <p class="text-muted">Investissement rentable</p>
        </div>
        <div class="matrix-quadrant matrix-q3">
            <h4>🔬 Priorité 3</h4>
            <p>Volume faible + KD faible</p>
            <p class="text-muted">Niches à explorer</p>
        </div>
        <div class="matrix-quadrant matrix-q4">
            <h4>⏳ Priorité 4</h4>
            <p>Volume élevé + KD très élevé</p>
            <p class="text-muted">Long terme, besoin d'autorité</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 3</h1>
    <h2>Ce qu'il faut absolument retenir</h2>
    <ul>
        <li>📊 <strong>Courte vs Longue traîne</strong> : commencez par la longue traîne (moins de concurrence, meilleure conversion)</li>
        <li>🛠️ <strong>Outils</strong> : Keyword Planner et Search Console en gratuit, SEMrush/Ahrefs pour aller plus loin</li>
        <li>🔍 <strong>Analyse concurrentielle</strong> : étudiez vos concurrents SEO, identifiez les opportunités (Content Gap)</li>
        <li>🗺️ <strong>Keyword Mapping</strong> : 1 page = 1 intention = 1 cluster de mots-clés</li>
        <li>📐 <strong>Topic Clusters</strong> : organisez votre contenu en piliers + satellites pour l'autorité thématique</li>
    </ul>
    <p class="slide-tip">💡 La recherche de mots-clés n'est pas un exercice ponctuel. C'est un processus continu qui évolue avec votre marché.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 Exercice pratique</h1>
    <h2>Créez votre premier Keyword Map</h2>
    <ul>
        <li><strong>1.</strong> Listez 3 pages importantes de votre site</li>
        <li><strong>2.</strong> Pour chaque page, identifiez le mot-clé principal (utilisez Keyword Planner)</li>
        <li><strong>3.</strong> Trouvez 3-5 mots-clés secondaires par page</li>
        <li><strong>4.</strong> Vérifiez qu'il n'y a pas de cannibalisation (2 pages sur le même mot-clé)</li>
        <li><strong>5.</strong> Identifiez 1 opportunité de contenu à créer (mot-clé sans page dédiée)</li>
    </ul>
    <p class="slide-tip">💡 <strong>Prochain chapitre :</strong> L'optimisation on-page — comment structurer vos pages pour maximiser leur potentiel de classement.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🚀 Formation SEO</h1>
    <h2>Jour 2 – Optimisation & Contenu</h2>
    <p class="slide-subtitle">Du technique au créatif : faire briller vos pages</p>
    <p class="mt-xl text-info">Maintenant que les fondations sont posées, il est temps de <strong>construire</strong>.</p>
    <p class="mt-lg text-muted">Aujourd'hui, nous allons apprendre à optimiser chaque page pour qu'elle atteigne son plein potentiel dans les résultats de recherche.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📋 Programme du Jour 2</h1>
    <h2>Ce que nous allons couvrir</h2>
    <div class="slide-agenda">
        <p>📝 <strong>Chapitre 1 :</strong> L'optimisation on-page (balises, structure, contenu)</p>
        <p>✍️ <strong>Chapitre 2 :</strong> La rédaction SEO et le content marketing</p>
        <p>🔗 <strong>Chapitre 3 :</strong> Le netlinking et l'autorité de domaine</p>
    </div>
    <p class="slide-tip">💡 L'optimisation on-page, c'est tout ce que vous contrôlez directement sur votre site. C'est la base de votre stratégie SEO.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📝 Chapitre 1</h1>
    <h2>L'optimisation on-page</h2>
    <p class="text-intro">L'optimisation on-page (ou "on-site") regroupe toutes les techniques d'optimisation appliquées <strong>directement sur vos pages web</strong>. C'est le premier levier d'action du SEO car vous en avez le contrôle total.</p>
    <div class="slide-agenda">
        <p>🏷️ Les balises Title et Meta Description</p>
        <p>📐 La hiérarchie des titres (H1-H6)</p>
        <p>🖼️ L'optimisation des images</p>
        <p>🔗 Le maillage interne</p>
        <p>📊 Les données structurées (Schema.org)</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Qu'est-ce que l'optimisation on-page ?</h1>
    <h2>Définition et périmètre</h2>
    <p class="text-intro">L'optimisation on-page consiste à optimiser les <strong>éléments individuels de chaque page</strong> pour améliorer leur pertinence et leur lisibilité, tant pour les moteurs de recherche que pour les utilisateurs.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>✅ Ce qui est on-page</h3>
            <ul>
                <li>Balises Title et Meta Description</li>
                <li>Contenu textuel et mots-clés</li>
                <li>Structure des titres (H1-H6)</li>
                <li>Images et attributs alt</li>
                <li>URLs et liens internes</li>
                <li>Données structurées</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>❌ Ce qui est off-page</h3>
            <ul>
                <li>Backlinks (liens entrants)</li>
                <li>Mentions de marque</li>
                <li>Réseaux sociaux</li>
                <li>Avis clients externes</li>
                <li>Relations presse</li>
                <li>Réputation en ligne</li>
            </ul>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🏷️ La balise Title</h1>
    <h2>L'élément le plus important du SEO on-page</h2>
    <p class="text-intro">La balise <code>&lt;title&gt;</code> définit le titre de votre page. C'est ce qui apparaît dans l'onglet du navigateur et, surtout, comme <strong>lien cliquable bleu</strong> dans les résultats de recherche.</p>
    <div class="code-block">
        <span class="code-comment">&lt;!-- Dans le &lt;head&gt; de votre page --&gt;</span><br>
        <span class="code-keyword">&lt;title&gt;</span>Chaussures Running Homme | Livraison Gratuite | MonSite<span class="code-keyword">&lt;/title&gt;</span>
    </div>
    <ul class="mt-md">
        <li><strong>Facteur de classement direct</strong> : Google analyse le titre pour comprendre le sujet</li>
        <li><strong>Impact sur le CTR</strong> : un bon titre = plus de clics</li>
        <li><strong>Premier contact</strong> : c'est souvent la première chose que l'utilisateur lit</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🏷️ Anatomie d'un bon Title</h1>
    <h2>Les règles d'or à respecter</h2>
    <ul>
        <li><strong>Longueur idéale : 50-60 caractères</strong> — Au-delà, Google tronque avec "..."</li>
        <li><strong>Mot-clé principal au début</strong> — Les premiers mots ont plus de poids</li>
        <li><strong>Unique pour chaque page</strong> — Pas de titres dupliqués sur le site</li>
        <li><strong>Attractif et incitatif</strong> — Donnez envie de cliquer !</li>
        <li><strong>Marque à la fin</strong> — Format : "Sujet | Marque" ou "Sujet - Marque"</li>
    </ul>
    <div class="mt-lg">
        <p class="url-bad">❌ <code>Accueil - MonSite.fr</code> <span class="text-muted">(vide de sens, pas de mot-clé)</span></p>
        <p class="url-good">✅ <code>Chaussures Running Homme : Guide d'Achat 2026 | MonSite</code></p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🏷️ Exemples de bons Titles</h1>
    <h2>Différents formats selon l'intention</h2>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">🛒</span>
            <div class="step-content">
                <strong>Page produit / catégorie</strong>
                <p>"Chaussures Running Homme Nike | Livraison 24h | SportShop"</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">📝</span>
            <div class="step-content">
                <strong>Article de blog</strong>
                <p>"Comment Choisir ses Chaussures de Running en 2026 [Guide Complet]"</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">🔍</span>
            <div class="step-content">
                <strong>Page service / landing</strong>
                <p>"Agence SEO Paris | +150% de Trafic Garanti | WebAgency"</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">❓</span>
            <div class="step-content">
                <strong>FAQ / Question</strong>
                <p>"Combien de Temps pour Courir un Marathon ? Temps Moyen par Niveau"</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📄 La Meta Description</h1>
    <h2>Votre argumentaire de vente en 155 caractères</h2>
    <p class="text-intro">La <strong>meta description</strong> est le petit texte qui apparaît sous le titre dans les résultats de recherche. Elle ne compte pas directement pour le classement, mais influence fortement le <strong>taux de clic (CTR)</strong>.</p>
    <div class="code-block">
        <span class="code-keyword">&lt;meta</span> name="description" content="<span class="code-value-green">Découvrez notre sélection de chaussures running homme. Livraison gratuite dès 50€. Retours sous 30 jours. Nike, Adidas, Asics...</span>"<span class="code-keyword">&gt;</span>
    </div>
    <p class="slide-warning">⚠️ Google peut choisir d'afficher un autre texte s'il juge que votre meta description ne correspond pas à la requête de l'utilisateur. C'est normal !</p>
</div>`,

                `<div class="slide-seo">
    <h1>📄 Rédiger une Meta Description efficace</h1>
    <h2>Les bonnes pratiques</h2>
    <ul>
        <li><strong>Longueur : 150-160 caractères</strong> — Au-delà, elle sera tronquée</li>
        <li><strong>Inclure le mot-clé principal</strong> — Il sera mis en gras par Google</li>
        <li><strong>Call-to-action clair</strong> — "Découvrez", "Comparez", "Achetez", "Apprenez"...</li>
        <li><strong>Unique pour chaque page</strong> — Comme le title, pas de duplication</li>
        <li><strong>Valeur ajoutée</strong> — Pourquoi cliquer sur VOUS plutôt qu'un concurrent ?</li>
    </ul>
    <div class="slide-tip">💡 <strong>Astuce CTR :</strong> Utilisez des chiffres ("Top 10", "+50% de réduction"), des dates ("Guide 2026"), ou des symboles Unicode (✓, ★) pour attirer l'œil.</div>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Le CTR : Pourquoi c'est crucial</h1>
    <h2>Un signal indirect de qualité</h2>
    <p class="text-intro">Le <strong>CTR (Click-Through Rate)</strong> mesure le pourcentage d'utilisateurs qui cliquent sur votre résultat par rapport au nombre d'impressions. Un CTR élevé suggère à Google que votre page répond bien à la requête.</p>
    <div class="market-share mt-lg">
        <div class="share-bar">
            <span class="share-label">Position 1</span>
            <div class="share-fill w-50 share-fill-google"></div>
            <span class="share-value">~28% CTR</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Position 2</span>
            <div class="share-fill w-20 share-fill-bing"></div>
            <span class="share-value">~15% CTR</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Position 3</span>
            <div class="share-fill w-4 share-fill-yandex"></div>
            <span class="share-value">~11% CTR</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Positions 4-10</span>
            <div class="share-fill w-3 share-fill-yahoo"></div>
            <span class="share-value">2-7% CTR</span>
        </div>
    </div>
    <p class="slide-tip">💡 Améliorer votre CTR de 2% peut avoir autant d'impact que gagner une position dans le classement !</p>
</div>`,

                `<div class="slide-seo">
    <h1>📐 La hiérarchie des titres (Hn)</h1>
    <h2>Structurer le contenu pour Google et les lecteurs</h2>
    <p class="text-intro">Les balises de titre <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code> structurent votre contenu comme un plan de document. Google les utilise pour <strong>comprendre la hiérarchie de l'information</strong>.</p>
    <div class="code-block">
        <span class="code-keyword">&lt;h1&gt;</span>Guide Complet du Running<span class="code-keyword">&lt;/h1&gt;</span> <span class="code-comment">← Titre principal (1 seul par page)</span><br>
        &nbsp;&nbsp;<span class="code-value-orange">&lt;h2&gt;</span>Choisir son équipement<span class="code-value-orange">&lt;/h2&gt;</span> <span class="code-comment">← Section principale</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-green">&lt;h3&gt;</span>Les chaussures<span class="code-value-green">&lt;/h3&gt;</span> <span class="code-comment">← Sous-section</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-green">&lt;h3&gt;</span>Les vêtements<span class="code-value-green">&lt;/h3&gt;</span><br>
        &nbsp;&nbsp;<span class="code-value-orange">&lt;h2&gt;</span>S'entraîner efficacement<span class="code-value-orange">&lt;/h2&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-value-green">&lt;h3&gt;</span>Programme débutant<span class="code-value-green">&lt;/h3&gt;</span>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📐 Les règles des balises Hn</h1>
    <h2>Ce qu'il faut absolument respecter</h2>
    <ul>
        <li><strong>Un seul H1 par page</strong> — C'est le titre principal, unique et descriptif</li>
        <li><strong>Hiérarchie logique</strong> — H2 sous H1, H3 sous H2... pas de saut de niveau</li>
        <li><strong>Mots-clés naturels</strong> — Intégrez vos mots-clés dans les titres, sans forcing</li>
        <li><strong>Descriptif, pas décoratif</strong> — Les Hn servent à structurer, pas à styliser</li>
        <li><strong>Pensez accessibilité</strong> — Les lecteurs d'écran utilisent les Hn pour naviguer</li>
    </ul>
    <div class="mt-lg">
        <p class="url-bad">❌ <code>&lt;h1&gt;Bienvenue&lt;/h1&gt;</code> suivi de <code>&lt;h4&gt;Nos produits&lt;/h4&gt;</code></p>
        <p class="url-good">✅ <code>&lt;h1&gt;Chaussures Running Homme&lt;/h1&gt;</code> suivi de <code>&lt;h2&gt;Nos meilleures ventes&lt;/h2&gt;</code></p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📐 H1 vs Title : quelle différence ?</h1>
    <h2>Deux éléments complémentaires mais distincts</h2>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>🏷️ Balise Title</h3>
            <ul>
                <li>Apparaît dans les <strong>résultats de recherche</strong></li>
                <li>Visible dans l'<strong>onglet du navigateur</strong></li>
                <li>Peut inclure le nom de marque</li>
                <li>Optimisé pour le <strong>CTR</strong></li>
                <li>Max ~60 caractères</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>📝 Balise H1</h3>
            <ul>
                <li>Apparaît <strong>sur la page</strong> elle-même</li>
                <li>Visible par le visiteur directement</li>
                <li>Généralement sans la marque</li>
                <li>Optimisé pour la <strong>clarté</strong></li>
                <li>Pas de limite stricte de longueur</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 Le Title et le H1 peuvent être similaires, mais pas forcément identiques. Le Title peut être plus "marketing", le H1 plus descriptif.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🖼️ L'optimisation des images</h1>
    <h2>Un potentiel SEO souvent négligé</h2>
    <p class="text-intro">Les images représentent en moyenne <strong>50% du poids</strong> d'une page web. Bien les optimiser impacte à la fois la performance (Core Web Vitals) et le référencement (Google Images).</p>
    <ul>
        <li><strong>Nom de fichier</strong> : descriptif avec mots-clés (<code>chaussures-running-nike-pegasus.jpg</code>)</li>
        <li><strong>Attribut alt</strong> : description textuelle de l'image pour l'accessibilité et le SEO</li>
        <li><strong>Compression</strong> : réduire le poids sans perte visible de qualité</li>
        <li><strong>Format moderne</strong> : WebP offre une meilleure compression que JPG/PNG</li>
        <li><strong>Dimensions adaptées</strong> : pas d'image 4000px affichée en 400px</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🖼️ L'attribut Alt en détail</h1>
    <h2>Accessible, informatif, optimisé</h2>
    <p class="text-intro">L'attribut <code>alt</code> (texte alternatif) décrit le contenu de l'image. Il est lu par les <strong>lecteurs d'écran</strong> (accessibilité) et par <strong>Googlebot</strong> (SEO).</p>
    <div class="code-block">
        <span class="code-comment">&lt;!-- Mauvais exemples --&gt;</span><br>
        <span class="code-keyword">&lt;img</span> src="img1.jpg" alt=""<span class="code-keyword">&gt;</span> <span class="code-comment">← Vide</span><br>
        <span class="code-keyword">&lt;img</span> src="photo.jpg" alt="chaussures chaussures running running nike"<span class="code-keyword">&gt;</span> <span class="code-comment">← Bourrage</span><br><br>
        <span class="code-comment">&lt;!-- Bon exemple --&gt;</span><br>
        <span class="code-keyword">&lt;img</span> src="nike-pegasus-40.jpg" alt="<span class="code-value-green">Nike Pegasus 40 bleue, chaussure de running sur fond blanc</span>"<span class="code-keyword">&gt;</span>
    </div>
    <p class="slide-tip">💡 <strong>Règle :</strong> Décrivez l'image comme si vous l'expliquiez à quelqu'un qui ne peut pas la voir. Soyez précis mais concis (125 caractères max recommandés).</p>
</div>`,

                `<div class="slide-seo">
    <h1>🖼️ Formats d'image et compression</h1>
    <h2>Choisir le bon format pour chaque usage</h2>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>📸 JPEG / JPG</h3>
            <p>Idéal pour les <strong>photos</strong> avec beaucoup de couleurs et de détails.</p>
            <p class="text-muted">Compression avec perte • Pas de transparence</p>
        </div>
        <div class="tool-card">
            <h3>🎨 PNG</h3>
            <p>Parfait pour les <strong>logos, icônes, graphiques</strong> avec peu de couleurs.</p>
            <p class="text-muted">Sans perte • Transparence supportée</p>
        </div>
        <div class="tool-card">
            <h3>🌐 WebP</h3>
            <p>Format moderne de Google : <strong>30% plus léger</strong> que JPEG à qualité égale.</p>
            <p class="text-muted">Supporté par tous les navigateurs modernes</p>
        </div>
        <div class="tool-card">
            <h3>🎬 SVG</h3>
            <p>Pour les <strong>icônes et illustrations vectorielles</strong>. Redimensionnable sans perte.</p>
            <p class="text-muted">Très léger • Parfait pour les logos</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Outils gratuits :</strong> TinyPNG, Squoosh.app, ImageOptim pour compresser vos images avant upload.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🖼️ Lazy Loading : charger malin</h1>
    <h2>Ne chargez que ce qui est visible</h2>
    <p class="text-intro">Le <strong>lazy loading</strong> (chargement différé) consiste à ne charger les images que lorsqu'elles arrivent dans le viewport (la zone visible de l'écran). Cela améliore drastiquement le temps de chargement initial.</p>
    <div class="code-block">
        <span class="code-comment">&lt;!-- Lazy loading natif HTML (recommandé) --&gt;</span><br>
        <span class="code-keyword">&lt;img</span> src="photo.jpg" alt="Description" <span class="code-value-green">loading="lazy"</span><span class="code-keyword">&gt;</span><br><br>
        <span class="code-comment">&lt;!-- Pour les images importantes (LCP), ne PAS utiliser lazy --&gt;</span><br>
        <span class="code-keyword">&lt;img</span> src="hero-banner.jpg" alt="Description" <span class="code-value-orange">loading="eager"</span><span class="code-keyword">&gt;</span>
    </div>
    <p class="slide-warning">⚠️ N'appliquez pas le lazy loading aux images "above the fold" (visibles sans scroller) car cela dégrade le LCP (Core Web Vitals).</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Le maillage interne</h1>
    <h2>Tisser la toile de votre site</h2>
    <p class="text-intro">Le <strong>maillage interne</strong> désigne l'ensemble des liens qui connectent vos pages entre elles. C'est un levier SEO puissant et souvent sous-exploité.</p>
    <ul>
        <li><strong>Facilite le crawl</strong> : Googlebot suit les liens pour découvrir vos pages</li>
        <li><strong>Distribue le "jus de lien"</strong> : les pages liées héritent d'une partie de l'autorité</li>
        <li><strong>Guide l'utilisateur</strong> : réduit le taux de rebond, augmente les pages vues</li>
        <li><strong>Définit les priorités</strong> : plus une page reçoit de liens internes, plus elle est "importante"</li>
    </ul>
    <p class="slide-tip">💡 <strong>Concept clé :</strong> Le "jus de lien" (link juice) est la valeur SEO transmise d'une page à une autre via un lien. Plus une page a d'autorité, plus elle en transmet.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Stratégies de maillage interne</h1>
    <h2>Comment lier intelligemment vos pages</h2>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Lien contextuel dans le contenu</strong>
                <p>Insérez des liens naturels dans vos paragraphes, vers des pages thématiquement liées</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Ancres descriptives</strong>
                <p>Utilisez des textes d'ancrage explicites : "guide des chaussures running" plutôt que "cliquez ici"</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Liens depuis les pages fortes</strong>
                <p>Identifiez vos pages avec le plus de trafic/backlinks et ajoutez-y des liens vers vos pages stratégiques</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Structure en silo</strong>
                <p>Regroupez les pages par thématique et liez-les entre elles (Topic Clusters vus au Jour 1)</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Les ancres de lien</h1>
    <h2>Le texte cliquable compte !</h2>
    <p class="text-intro">L'<strong>ancre de lien</strong> (anchor text) est le texte visible et cliquable d'un hyperlien. Google l'utilise pour comprendre le sujet de la page cible.</p>
    <div class="mt-lg">
        <p class="url-bad">❌ <code>Pour en savoir plus, &lt;a href="..."&gt;cliquez ici&lt;/a&gt;</code></p>
        <p class="url-bad">❌ <code>&lt;a href="..."&gt;https://monsite.fr/chaussures&lt;/a&gt;</code></p>
        <p class="url-good">✅ <code>Découvrez notre &lt;a href="..."&gt;guide complet des chaussures de running&lt;/a&gt;</code></p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Visualiser son maillage interne</h1>
    <h2>Cartographier les connexions</h2>
    <p class="text-intro">Pour optimiser votre maillage, il faut d'abord le <strong>visualiser</strong>. Plusieurs outils permettent de créer une carte des liens internes de votre site.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>🕷️ Screaming Frog</h3>
            <p>Crawle votre site et génère un rapport complet des liens internes. Export possible vers des outils de visualisation.</p>
            <p class="text-muted">Gratuit jusqu'à 500 URLs</p>
        </div>
        <div class="tool-card">
            <h3>📊 Google Search Console</h3>
            <p>Section "Liens" > "Liens internes" : liste les pages les plus liées en interne.</p>
            <p class="text-muted">100% gratuit</p>
        </div>
        <div class="tool-card">
            <h3>🔷 Ahrefs / SEMrush</h3>
            <p>Audit de site avec visualisation du maillage et détection des pages orphelines.</p>
            <p class="text-muted">Payant</p>
        </div>
        <div class="tool-card">
            <h3>🗺️ Gephi</h3>
            <p>Logiciel gratuit de visualisation de graphes. Importez les données Screaming Frog pour créer des cartes visuelles.</p>
            <p class="text-muted">Gratuit, open source</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>⚠️ Les pages orphelines</h1>
    <h2>Des pages invisibles pour Google</h2>
    <p class="text-intro">Une <strong>page orpheline</strong> est une page qui n'est liée par aucune autre page de votre site. Elle est quasiment impossible à découvrir pour Googlebot (sauf via le sitemap).</p>
    <ul>
        <li><strong>Problème de crawl</strong> : si Googlebot ne trouve pas de lien vers la page, il ne la crawle pas</li>
        <li><strong>Pas de transmission d'autorité</strong> : la page ne reçoit aucun "jus de lien"</li>
        <li><strong>Mauvaise UX</strong> : les utilisateurs ne peuvent pas la trouver en naviguant</li>
    </ul>
    <p class="slide-tip">💡 <strong>Comment les trouver ?</strong> Comparez la liste des URLs de votre sitemap avec les URLs trouvées par un crawl (Screaming Frog). Les URLs absentes du crawl sont potentiellement orphelines.</p>
    <p class="slide-warning">⚠️ Les pages orphelines sont souvent des anciennes pages oubliées, des pages de test, ou des pages mal intégrées après une refonte.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Les données structurées</h1>
    <h2>Parler le langage de Google</h2>
    <p class="text-intro">Les <strong>données structurées</strong> (ou schema markup) sont un code standardisé qui aide les moteurs de recherche à <strong>comprendre le contenu</strong> de vos pages. Elles permettent d'afficher des résultats enrichis (rich snippets).</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>⭐ Avis / Notes</h3>
            <p>Étoiles dans les résultats</p>
            <p class="text-muted">★★★★☆ 4.5/5 (127 avis)</p>
        </div>
        <div class="intent-card">
            <h3>🛒 Produits</h3>
            <p>Prix, disponibilité</p>
            <p class="text-muted">89,99 € • En stock</p>
        </div>
        <div class="intent-card">
            <h3>📅 Événements</h3>
            <p>Date, lieu, billets</p>
            <p class="text-muted">15 mars 2026 • Paris</p>
        </div>
        <div class="intent-card">
            <h3>❓ FAQ</h3>
            <p>Questions/réponses dépliables</p>
            <p class="text-muted">Directement dans les SERP</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Schema.org : le vocabulaire standard</h1>
    <h2>Un langage commun pour les moteurs</h2>
    <p class="text-intro"><strong>Schema.org</strong> est un vocabulaire collaboratif créé par Google, Bing, Yahoo et Yandex. Il définit des centaines de types d'entités (Article, Product, Person, Organization...)</p>
    <ul>
        <li><strong>Article</strong> : articles de blog, actualités</li>
        <li><strong>Product</strong> : produits e-commerce avec prix, avis, disponibilité</li>
        <li><strong>LocalBusiness</strong> : entreprises locales avec adresse, horaires, téléphone</li>
        <li><strong>FAQPage</strong> : pages de questions fréquentes</li>
        <li><strong>HowTo</strong> : tutoriels étape par étape</li>
        <li><strong>Recipe</strong> : recettes de cuisine avec ingrédients, temps de cuisson</li>
        <li><strong>Event</strong> : événements avec date, lieu, prix des billets</li>
        <li><strong>BreadcrumbList</strong> : fil d'Ariane pour la navigation</li>
    </ul>
    <p class="slide-note">🔗 Documentation complète : <a href="https://schema.org" style="color: white" target="_blank">schema.org</a></p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Exemple : Schema FAQ</h1>
    <h2>Afficher des questions dans les SERP</h2>
    <p class="text-intro">Le schema <strong>FAQPage</strong> permet d'afficher des questions/réponses directement dans les résultats de recherche, augmentant considérablement la visibilité de votre page.</p>
    <div class="code-block">
        <span class="code-keyword">&lt;script</span> type="application/ld+json"<span class="code-keyword">&gt;</span><br>
        {<br>
        &nbsp;&nbsp;"@context": "<span class="code-value-green">https://schema.org</span>",<br>
        &nbsp;&nbsp;"@type": "<span class="code-value-orange">FAQPage</span>",<br>
        &nbsp;&nbsp;"mainEntity": [{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"@type": "Question",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"name": "<span class="code-value-blue">Quelle chaussure pour débuter le running ?</span>",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"acceptedAnswer": {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"@type": "Answer",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"text": "Pour débuter, privilégiez une chaussure avec un bon amorti..."<br>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
        &nbsp;&nbsp;}]<br>
        }<br>
        <span class="code-keyword">&lt;/script&gt;</span>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Exemple : Schema Product</h1>
    <h2>Enrichir les résultats e-commerce</h2>
    <div class="code-block">
        <span class="code-keyword">&lt;script</span> type="application/ld+json"<span class="code-keyword">&gt;</span><br>
        {<br>
        &nbsp;&nbsp;"@context": "https://schema.org",<br>
        &nbsp;&nbsp;"@type": "<span class="code-value-orange">Product</span>",<br>
        &nbsp;&nbsp;"name": "<span class="code-value-blue">Nike Air Pegasus 40</span>",<br>
        &nbsp;&nbsp;"image": "https://monsite.fr/images/pegasus-40.jpg",<br>
        &nbsp;&nbsp;"description": "Chaussure de running polyvalente...",<br>
        &nbsp;&nbsp;"brand": { "@type": "Brand", "name": "Nike" },<br>
        &nbsp;&nbsp;"offers": {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"@type": "Offer",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"price": "<span class="code-value-green">129.99</span>",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"priceCurrency": "EUR",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"availability": "https://schema.org/<span class="code-value-green">InStock</span>"<br>
        &nbsp;&nbsp;},<br>
        &nbsp;&nbsp;"aggregateRating": {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"@type": "AggregateRating",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"ratingValue": "<span class="code-value-orange">4.5</span>", "reviewCount": "127"<br>
        &nbsp;&nbsp;}<br>
        }<br>
        <span class="code-keyword">&lt;/script&gt;</span>
    </div>
    <p class="slide-tip">💡 Le "@" indique une propriété technique obligatoire. Il oblige à utiliser des valeurs prédéfinies (comme @type: "Product") pour que Google comprenne instantanément la nature exacte de ta page.</p>
    
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Outils pour les données structurées</h1>
    <h2>Générer et valider votre schema</h2>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>✅ Rich Results Test</h3>
            <p>Outil officiel de Google pour tester si votre page est éligible aux résultats enrichis.</p>
            <p class="text-muted">search.google.com/test/rich-results</p>
        </div>
        <div class="tool-card">
            <h3>🔍 Schema Markup Validator</h3>
            <p>Valide la syntaxe de votre schema et détecte les erreurs.</p>
            <p class="text-muted">validator.schema.org</p>
        </div>
        <div class="tool-card">
            <h3>🧰 Schema Markup Generator</h3>
            <p>Génère le code JSON-LD à partir d'un formulaire simple. Idéal pour les débutants.</p>
            <p class="text-muted">technicalseo.com/tools/schema-markup-generator</p>
        </div>
        <div class="tool-card">
            <h3>📊 Search Console</h3>
            <p>Rapport "Améliorations" : liste les erreurs de données structurées détectées sur votre site.</p>
            <p class="text-muted">Monitoring continu</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Impact des Rich Snippets</h1>
    <h2>Pourquoi investir dans les données structurées ?</h2>
    <p class="text-intro">Les pages avec des résultats enrichis se démarquent visuellement dans les SERP et captent plus l'attention. L'impact sur le CTR peut être significatif.</p>
    <div class="market-share mt-lg">
        <div class="share-bar">
            <span class="share-label">Avec étoiles</span>
            <div class="share-fill w-50 share-fill-good"></div>
            <span class="share-value">+35% CTR</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Avec FAQ</span>
            <div class="share-fill w-30 share-fill-ok"></div>
            <span class="share-value">+25% CTR</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Avec prix</span>
            <div class="share-fill w-30 share-fill-bing"></div>
            <span class="share-value">+20% CTR</span>
        </div>
    </div>
    <p class="slide-warning">⚠️ Attention : Google peut choisir de ne pas afficher vos rich snippets même si votre schema est correct. Il n'y a aucune garantie.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📝 Optimisation du contenu textuel</h1>
    <h2>Les bonnes pratiques rédactionnelles</h2>
    <p class="text-intro">Au-delà des balises techniques, le <strong>contenu lui-même</strong> doit être optimisé. Voici les principes fondamentaux de la rédaction SEO-friendly.</p>
    <ul>
        <li><strong>Mot-clé principal dans les 100 premiers mots</strong> — Google accorde plus d'importance au début</li>
        <li><strong>Densité naturelle</strong> — Le mot-clé apparaît naturellement, sans répétition forcée</li>
        <li><strong>Champ sémantique riche</strong> — Utilisez des synonymes, termes associés, variations</li>
        <li><strong>Paragraphes courts</strong> — 2-3 phrases max pour faciliter la lecture sur écran</li>
        <li><strong>Listes à puces</strong> — Améliorent la lisibilité</li>
        <li><strong>Longueur suffisante</strong> — Les contenus longs rankent souvent mieux (mais qualité > quantité)</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>📏 Quelle longueur de contenu ?</h1>
    <h2>La taille compte-t-elle vraiment ?</h2>
    <p class="text-intro">Google ne définit pas de longueur minimale ou idéale. Cependant, des études montrent une corrélation entre <strong>longueur du contenu et positions dans les SERP</strong>.</p>
    <div class="kd-scale">
        <div class="kd-item kd-easy">
            <span class="kd-score">300-500</span>
            <span class="kd-label">Minimum</span>
            <p class="kd-desc">Pages produits, fiches simples</p>
        </div>
        <div class="kd-item kd-medium">
            <span class="kd-score">1000-1500</span>
            <span class="kd-label">Standard</span>
            <p class="kd-desc">Articles de blog, pages services</p>
        </div>
        <div class="kd-item kd-hard">
            <span class="kd-score">2000+</span>
            <span class="kd-label">Pilier</span>
            <p class="kd-desc">Guides complets</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>La vraie règle :</strong> votre contenu doit être <strong>aussi long que nécessaire</strong> pour répondre complètement à la question de l'utilisateur. Pas plus, pas moins.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 E-E-A-T : les critères de qualité Google</h1>
    <h2>Experience, Expertise, Authoritativeness, Trustworthiness</h2>
    <p class="text-intro"><strong>E-E-A-T</strong> est un ensemble de critères que les Quality Raters de Google utilisent pour évaluer la qualité des pages. C'est particulièrement important pour les sujets YMYL (Your Money, Your Life).</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>👁️ Experience</h3>
            <p>L'auteur a-t-il une expérience directe du sujet ?</p>
            <p class="text-accent mt-sm">→ Témoignages, cas pratiques, photos personnelles</p>
        </div>
        <div class="intent-card">
            <h3>🎓 Expertise</h3>
            <p>L'auteur possède-t-il les compétences nécessaires ?</p>
            <p class="text-accent mt-sm">→ Qualifications, formation, réalisations</p>
        </div>
        <div class="intent-card">
            <h3>🏆 Authoritativeness</h3>
            <p>Le site est-il reconnu comme une référence ?</p>
            <p class="text-accent mt-sm">→ Backlinks, mentions, citations</p>
        </div>
        <div class="intent-card">
            <h3>🔒 Trustworthiness</h3>
            <p>Le contenu est-il fiable et transparent ?</p>
            <p class="text-accent mt-sm">→ Sources, mentions légales, HTTPS</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>⚠️ YMYL : les sujets sensibles</h1>
    <h2>Your Money, Your Life</h2>
    <p class="text-intro">Les pages <strong>YMYL</strong> traitent de sujets pouvant impacter la santé, la sécurité, le bien-être financier ou le bonheur des utilisateurs. Google y applique des critères E-E-A-T encore plus stricts.</p>
    <ul>
        <li><strong>Santé</strong> : symptômes, traitements, médicaments, maladies</li>
        <li><strong>Finance</strong> : investissements, impôts, retraite, assurances, crédits</li>
        <li><strong>Juridique</strong> : droits, procédures, conseils légaux</li>
        <li><strong>Actualités</strong> : événements, politique, sciences</li>
        <li><strong>E-commerce</strong> : transactions financières</li>
        <li><strong>Groupes de personnes</strong> : contenu sur des groupes ethniques, religieux, etc.</li>
    </ul>
    <p class="slide-warning">⚠️ Sur ces sujets, un contenu amateur ou non sourcé sera sévèrement pénalisé. Faites appel à des experts et citez vos sources !</p>
</div>`,

                `<div class="slide-seo">
    <h1>✍️ Les signaux de confiance on-page</h1>
    <h2>Rassurer Google (et vos visiteurs)</h2>
    <ul>
        <li><strong>Page "À propos"</strong> : présentez votre entreprise, votre équipe, votre histoire</li>
        <li><strong>Pages auteur</strong> : biographies avec qualifications pour les articles de blog</li>
        <li><strong>Mentions légales complètes</strong> : CGV, politique de confidentialité, CGU</li>
        <li><strong>Coordonnées visibles</strong> : adresse, téléphone, email (pas juste un formulaire)</li>
        <li><strong>Sources et références</strong> : citez vos sources, linkez vers des études</li>
        <li><strong>Date de publication/mise à jour</strong> : montrez que le contenu est maintenu</li>
        <li><strong>Avis clients authentiques</strong> : témoignages, notes, badges de confiance</li>
    </ul>
    <p class="slide-tip">💡 Ces éléments ne sont pas des facteurs de classement directs, mais ils contribuent à la perception de confiance par les algorithmes.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Checklist Optimisation On-Page</h1>
    <h2>Les points à vérifier pour chaque page</h2>
    <ul>
        <li>☐ <strong>Title</strong> unique, 50-60 caractères, mot-clé au début</li>
        <li>☐ <strong>Meta description</strong> unique, 150-160 caractères, call-to-action</li>
        <li>☐ <strong>H1</strong> unique, descriptif, contenant le mot-clé principal</li>
        <li>☐ <strong>Hiérarchie Hn</strong> logique (H2, H3...) sans saut de niveau</li>
        <li>☐ <strong>Images</strong> compressées, nommées correctement, avec alt descriptif</li>
        <li>☐ <strong>Liens internes</strong> pertinents avec ancres descriptives</li>
        <li>☐ <strong>Données structurées</strong> appropriées au type de contenu</li>
        <li>☐ <strong>Contenu</strong> suffisamment long, structuré, avec champ sémantique riche</li>
        <li>☐ <strong>URL</strong> courte, descriptive, avec mot-clé</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 1 (Jour 2)</h1>
    <h2>Ce qu'il faut absolument retenir</h2>
    <ul>
        <li>🏷️ <strong>Title & Meta Description</strong> : votre vitrine dans les SERP, optimisez le CTR</li>
        <li>📐 <strong>Hiérarchie Hn</strong> : structurez logiquement, un seul H1, pas de saut de niveau</li>
        <li>🖼️ <strong>Images</strong> : compression, format WebP, alt descriptif, lazy loading</li>
        <li>🔗 <strong>Maillage interne</strong> : liens contextuels, ancres descriptives, pas de pages orphelines</li>
        <li>📊 <strong>Données structurées</strong> : schema.org pour les rich snippets</li>
        <li>🎯 <strong>E-E-A-T</strong> : Experience, Expertise, Autorité, Confiance — surtout pour YMYL</li>
    </ul>
    <p class="slide-tip">💡 L'optimisation on-page est le fondement de votre SEO. Sans elle, même les meilleurs backlinks ne suffiront pas.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 Exercice pratique</h1>
    <h2>Auditez une page de votre site</h2>
    <ul>
        <li><strong>1.</strong> Choisissez une page importante (page d'accueil, top produit, article clé)</li>
        <li><strong>2.</strong> Vérifiez le Title et la Meta Description avec un outil comme Yoast ou SERP Simulator</li>
        <li><strong>3.</strong> Analysez la structure Hn avec l'extension Chrome "HeadingsMap"</li>
        <li><strong>4.</strong> Passez les images au crible : poids, format, attribut alt</li>
        <li><strong>5.</strong> Comptez les liens internes sortants et entrants</li>
        <li><strong>6.</strong> Testez les données structurées avec Rich Results Test</li>
    </ul>
    <p class="slide-tip">💡 <strong>Prochain chapitre :</strong> La rédaction SEO et le content marketing — créer du contenu qui convertit.</p>
</div>`,


                `<div class="slide-seo">
    <h1>✍️ Chapitre 2</h1>
    <h2>Stratégie de contenu et Copywriting SEO</h2>
    <p class="text-intro">Créer du contenu optimisé ne suffit pas. Il faut créer du contenu qui <strong>captive, convainc et convertit</strong>. Le copywriting SEO est l'art de concilier les exigences des moteurs de recherche avec les attentes des humains.</p>
    <div class="slide-agenda">
        <p>📝 Les fondamentaux de la rédaction SEO</p>
        <p>🎯 Le copywriting orienté conversion</p>
        <p>📅 La stratégie éditoriale et le calendrier de contenu</p>
        <p>🔄 Le recyclage et l'optimisation de contenu existant</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📝 Qu'est-ce que le copywriting SEO ?</h1>
    <h2>L'alliance de deux disciplines</h2>
    <p class="text-intro">Le <strong>copywriting SEO</strong> combine l'art de la rédaction persuasive (copywriting) avec les techniques d'optimisation pour les moteurs de recherche (SEO). L'objectif : créer du contenu qui <strong>ranke ET convertit</strong>.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>✍️ Copywriting classique</h3>
            <ul>
                <li>Focus sur la persuasion</li>
                <li>Déclencheur émotionnel</li>
                <li>Appel à l'action clair</li>
                <li>Bénéfices avant fonctionnalités</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>🔍 SEO classique</h3>
            <ul>
                <li>Focus sur les mots-clés</li>
                <li>Structure technique</li>
                <li>Densité et sémantique</li>
                <li>Optimisation des balises</li>
            </ul>
        </div>
    </div>
    <p class="slide-highlight mt-lg">Copywriting SEO = Persuader les humains + Satisfaire Google</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 L'intention avant les mots-clés</h1>
    <h2>Écrire pour l'utilisateur, pas pour l'algorithme</h2>
    <p class="text-intro">La première étape de toute rédaction SEO est de comprendre <strong>pourquoi</strong> l'utilisateur effectue cette recherche. Que veut-il vraiment ? Quel problème cherche-t-il à résoudre ?</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Identifier l'intention</strong>
                <p>Informationnelle ? Transactionnelle ? Commerciale ? Navigationnelle ?</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Analyser les SERP</strong>
                <p>Quel type de contenu Google affiche-t-il ? Articles ? Vidéos ? Pages produits ?</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Définir l'angle</strong>
                <p>Comment apporter plus de valeur que les contenus existants ?</p>
            </div>
        </div>
    </div>
    <p class="slide-tip">💡 Si vous écrivez un article "comment choisir un matelas" mais que l'utilisateur veut acheter immédiatement, vous avez raté l'intention.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📐 La structure d'un contenu SEO efficace</h1>
    <h2>L'anatomie d'un article qui performe</h2>
    <p class="text-intro">Un contenu bien structuré facilite la lecture humaine ET l'analyse par Google. Voici les éléments essentiels d'une structure gagnante.</p>
    <ul>
        <li><strong>Titre accrocheur (H1)</strong> : promet une valeur claire, inclut le mot-clé</li>
        <li><strong>Introduction percutante</strong> : accroche + problème + promesse de solution (100-150 mots)</li>
        <li><strong>Table des matières</strong> : facilite la navigation et génère des sitelinks</li>
        <li><strong>Sections claires (H2/H3)</strong> : un sujet par section, titres explicites</li>
        <li><strong>Paragraphes courts</strong> : 2-3 phrases max, une idée par paragraphe</li>
        <li><strong>Éléments visuels</strong> : images, schémas, tableaux pour aérer</li>
        <li><strong>Conclusion + CTA</strong> : résumé et appel à l'action</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🎣 L'accroche : les premières secondes décisives</h1>
    <h2>Capturer l'attention immédiatement</h2>
    <p class="text-intro">Vous avez <strong>3 secondes</strong> pour convaincre le lecteur de rester. L'accroche (ou "hook") est le premier paragraphe qui décide si l'utilisateur continue ou repart.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>❓ La question</h3>
            <p>"Vous perdez du trafic sans comprendre pourquoi ? Votre site souffre peut-être d'un problème invisible..."</p>
        </div>
        <div class="tool-card">
            <h3>📊 La statistique choc</h3>
            <p>"75% des utilisateurs ne vont jamais au-delà de la première page Google. Êtes-vous dans les 25% ?"</p>
        </div>
        <div class="tool-card">
            <h3>😱 Le problème</h3>
            <p>"Chaque jour, vous perdez des clients qui ne trouvent pas votre site. Voici comment y remédier."</p>
        </div>
        <div class="tool-card">
            <h3>🎯 La promesse</h3>
            <p>"Dans les 10 prochaines minutes, vous allez apprendre à doubler votre trafic organique."</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔺 La pyramide inversée</h1>
    <h2>L'essentiel d'abord, les détails ensuite</h2>
    <p class="text-intro">Empruntée au journalisme, la <strong>pyramide inversée</strong> consiste à présenter l'information la plus importante en premier, puis à développer progressivement les détails.</p>
    <div class="slide-diagram flex-col gap-sm items-center">
        <span class="step" style="width: 80%; background: linear-gradient(135deg, rgba(0, 212, 170, 0.4) 0%, rgba(124, 58, 237, 0.4) 100%);">🎯 Information clé / Réponse principale</span>
        <span class="step" style="width: 65%; opacity: 0.8;">📋 Détails importants</span>
        <span class="step step-sm" style="width: 50%; opacity: 0.6;">📝 Contexte et exemples</span>
        <span class="step step-sm" style="width: 35%; opacity: 0.4;">🔍 Détails complémentaires</span>
    </div>
    <p class="slide-tip">💡 <strong>Pourquoi ?</strong> L'utilisateur trouve immédiatement sa réponse (satisfaction). S'il veut en savoir plus, il continue. Sinon, il a quand même eu ce qu'il cherchait.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Le format "Featured Snippet"</h1>
    <h2>Viser la position zéro</h2>
    <p class="text-intro">Le <strong>Featured Snippet</strong> (ou position zéro) est l'encadré qui apparaît au-dessus des résultats naturels. Il répond directement à la question de l'utilisateur. Voici comment l'obtenir :</p>
    <ul>
        <li><strong>Répondez directement</strong> : la réponse en 40-60 mots juste après la question en H2</li>
        <li><strong>Utilisez des listes</strong> : Google adore les listes numérotées et à puces</li>
        <li><strong>Créez des tableaux</strong> : comparatifs, données structurées</li>
        <li><strong>Posez la question exacte</strong> : "Qu'est-ce que le SEO ?" puis répondez</li>
        <li><strong>Soyez concis</strong> : le snippet affiche ~50 mots max</li>
    </ul>
    <p class="slide-warning">⚠️ Le Featured Snippet peut parfois réduire les clics (la réponse est déjà visible). Mais il renforce considérablement votre autorité.</p>
</div>`,

                `<div class="slide-seo">
    <h1>✍️ Les techniques de copywriting SEO</h1>
    <h2>Écrire pour convaincre</h2>
    <p class="text-intro">Au-delà de la structure, le <strong>style d'écriture</strong> influence l'engagement et les conversions. Voici les principes fondamentaux du copywriting appliqués au SEO.</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>🗣️ Voix active</h3>
            <p>"Optimisez votre site" plutôt que "Votre site doit être optimisé"</p>
            <p class="text-accent mt-sm">→ Plus direct, plus engageant</p>
        </div>
        <div class="intent-card">
            <h3>👤 Le "vous"</h3>
            <p>Adressez-vous directement au lecteur</p>
            <p class="text-accent mt-sm">→ Crée une connexion personnelle</p>
        </div>
        <div class="intent-card">
            <h3>💬 Langage simple</h3>
            <p>Évitez le jargon, expliquez les termes techniques</p>
            <p class="text-accent mt-sm">→ Accessible à tous</p>
        </div>
        <div class="intent-card">
            <h3>🎯 Bénéfices</h3>
            <p>"Gagnez du temps" plutôt que "Fonctionnalité d'automatisation"</p>
            <p class="text-accent mt-sm">→ Ce que l'utilisateur y gagne</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🧲 Les mots puissants (Power Words)</h1>
    <h2>Déclencher l'émotion et l'action</h2>
    <p class="text-intro">Les <strong>power words</strong> sont des mots qui déclenchent une réponse émotionnelle chez le lecteur. Ils augmentent le CTR dans les titres et l'engagement dans le contenu.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>⚡ Urgence / Rareté</h3>
            <ul>
                <li>Maintenant, Immédiatement</li>
                <li>Limité, Exclusif, Dernier</li>
                <li>Ne manquez pas, Urgent</li>
                <li>Aujourd'hui seulement</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>✨ Valeur / Bénéfice</h3>
            <ul>
                <li>Gratuit, Bonus, Cadeau</li>
                <li>Garanti, Prouvé, Testé</li>
                <li>Secret, Révélé, Découvrez</li>
                <li>Facile, Simple, Rapide</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Attention :</strong> n'abusez pas ! Trop de power words = spam. Utilisez-les stratégiquement dans les titres.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📝 Les formules de copywriting éprouvées</h1>
    <h2>AIDA, PAS, BAB : des structures qui fonctionnent</h2>
    <p class="text-intro">Ces formules sont utilisées depuis des décennies en publicité. Elles structurent votre argumentaire pour maximiser l'impact.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">AIDA</span>
            <div class="step-content">
                <strong>Attention → Intérêt → Désir → Action</strong>
                <p>Captez l'attention, suscitez l'intérêt, créez le désir, incitez à l'action</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">PAS</span>
            <div class="step-content">
                <strong>Problem → Agitation → Solution</strong>
                <p>Identifiez le problème, amplifiez la douleur, présentez la solution</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">BAB</span>
            <div class="step-content">
                <strong>Before → After → Bridge</strong>
                <p>Montrez la situation actuelle, la situation idéale, puis le chemin pour y arriver</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 AIDA en pratique</h1>
    <h2>Exemple appliqué à une landing page SEO</h2>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">A</span>
            <div class="step-content">
                <strong>Attention (Titre)</strong>
                <p>"Votre site est invisible sur Google ? Découvrez pourquoi 90% des sites n'atteignent jamais la première page."</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">I</span>
            <div class="step-content">
                <strong>Intérêt (Problème)</strong>
                <p>"Chaque jour, des milliers de clients potentiels cherchent vos services... mais trouvent vos concurrents."</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">D</span>
            <div class="step-content">
                <strong>Désir (Solution + Bénéfices)</strong>
                <p>"Notre audit SEO identifie les blocages et vous donne un plan d'action clair. Résultats visibles en 90 jours."</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">A</span>
            <div class="step-content">
                <strong>Action (CTA)</strong>
                <p>"Demandez votre audit gratuit → Recevez votre rapport personnalisé sous 48h"</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Le champ sémantique</h1>
    <h2>Au-delà du mot-clé principal</h2>
    <p class="text-intro">Google ne cherche plus seulement votre mot-clé exact. Il analyse le <strong>champ sémantique</strong> complet de votre page pour évaluer sa pertinence et sa profondeur.</p>
    <p class="text-light"><strong>💡 Champ sémantique :</strong> Ensemble des mots et expressions qui gravitent autour d'un sujet. Pour "running", le champ sémantique inclut : course à pied, jogging, footing, foulée, cardio, endurance, marathon, semi-marathon, chrono, etc.</p>
    <div class="cluster-diagram mt-lg">
        <div class="cluster-center">
            <span class="cluster-main">chaussures running</span>
        </div>
        <div class="cluster-satellites">
            <span class="cluster-sat">amorti</span>
            <span class="cluster-sat">foulée</span>
            <span class="cluster-sat">pronation</span>
            <span class="cluster-sat">drop</span>
            <span class="cluster-sat">semelle</span>
            <span class="cluster-sat">stabilité</span>
            <span class="cluster-sat">légèreté</span>
            <span class="cluster-sat">respirabilité</span>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>⚠️ Le keyword stuffing : l'erreur à éviter</h1>
    <h2>Quand l'optimisation devient sur-optimisation</h2>
    <p class="text-intro">Le <strong>keyword stuffing</strong> (bourrage de mots-clés) consiste à répéter excessivement un mot-clé dans l'espoir d'améliorer le classement. C'est une technique "Black Hat" pénalisée par Google.</p>
    <div class="cannibalization-example">
        <div class="cannibal-bad">
            <h4>❌ Keyword stuffing</h4>
            <p>"Nos <strong>chaussures running</strong> sont les meilleures <strong>chaussures running</strong> du marché. Si vous cherchez des <strong>chaussures running</strong>, nos <strong>chaussures running</strong> sont faites pour vous."</p>
            <p class="result">Résultat : pénalité Google, mauvaise expérience utilisateur</p>
        </div>
        <div class="cannibal-good">
            <h4>✅ Rédaction naturelle</h4>
            <p>"Découvrez notre collection de <strong>chaussures de running</strong>. Que vous soyez débutant ou marathonien confirmé, nos modèles offrent confort, amorti et légèreté pour chaque foulée."</p>
            <p class="result">Résultat : lecture fluide, sémantique riche</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📊 La densité de mot-clé idéale</h1>
    <h2>Mythe ou réalité ?</h2>
    <p class="text-intro">Pendant longtemps, les SEO visaient une "densité de mot-clé" de 2-3%. Cette métrique est aujourd'hui <strong>obsolète</strong>. Google est bien plus sophistiqué.</p>
    <ul>
        <li><strong>Pas de pourcentage magique</strong> : Google ne compte pas les occurrences</li>
        <li><strong>Pertinence contextuelle</strong> : le mot-clé doit apparaître naturellement</li>
        <li><strong>Emplacements stratégiques</strong> : titre, H1, premier paragraphe, conclusion</li>
        <li><strong>Variations et synonymes</strong> : plus importants que la répétition</li>
    </ul>
    <p class="slide-tip">💡 <strong>La vraie règle :</strong> si en relisant votre texte à voix haute, le mot-clé semble forcé ou répétitif, c'est trop. Écrivez naturellement.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📅 La stratégie éditoriale</h1>
    <h2>Planifier pour performer</h2>
    <p class="text-intro">Une <strong>stratégie éditoriale</strong> est un plan qui définit quoi publier, quand, pour qui, et pourquoi. Sans stratégie, vous publiez au hasard. Avec, vous construisez une autorité thématique.</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>🎯 Objectifs</h3>
            <p>Que voulez-vous accomplir ?</p>
            <p class="text-accent mt-sm">→ Trafic, leads, ventes, notoriété ?</p>
        </div>
        <div class="intent-card">
            <h3>👥 Audience</h3>
            <p>Pour qui écrivez-vous ?</p>
            <p class="text-accent mt-sm">→ Personas, besoins, questions</p>
        </div>
        <div class="intent-card">
            <h3>📝 Sujets</h3>
            <p>Quels thèmes couvrir ?</p>
            <p class="text-accent mt-sm">→ Clusters thématiques, mots-clés</p>
        </div>
        <div class="intent-card">
            <h3>📊 KPIs</h3>
            <p>Comment mesurer le succès ?</p>
            <p class="text-accent mt-sm">→ Trafic, positions, conversions</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>👤 Les personas : connaître son audience</h1>
    <h2>Écrire pour quelqu'un de précis</h2>
    <p class="text-intro">Un <strong>persona</strong> est une représentation fictive de votre client idéal. Définir vos personas vous aide à créer du contenu qui résonne avec votre audience.</p>
    <div class="code-block">
        <span class="code-comment">/* Exemple de persona */</span><br>
        <span class="code-keyword">Nom :</span> Marie, 35 ans<br>
        <span class="code-keyword">Métier :</span> Responsable marketing PME<br>
        <span class="code-keyword">Objectif :</span> Augmenter la visibilité de son entreprise en ligne<br>
        <span class="code-keyword">Frustrations :</span> Budget limité, peu de temps, jargon technique<br>
        <span class="code-keyword">Questions :</span> "Par où commencer ?", "Combien ça coûte ?", "Combien de temps pour voir des résultats ?"<br>
        <span class="code-keyword">Canaux :</span> LinkedIn, Google, newsletters professionnelles
    </div>
    <p class="slide-tip">💡 Quand vous écrivez, imaginez que vous vous adressez directement à ce persona. Votre ton et votre contenu seront naturellement plus pertinents.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🗺️ Le parcours utilisateur (Customer Journey)</h1>
    <h2>Du contenu pour chaque étape</h2>
    <p class="text-intro">Vos clients potentiels passent par différentes étapes avant d'acheter. Votre contenu doit les accompagner à <strong>chaque phase</strong> de ce parcours.</p>
    <div class="slide-diagram flex-col gap-md">
        <div class="cwv-item">
            <span class="step cwv-lcp" style="width: 170px;">Découverte</span>
            <span class="text-light">L'utilisateur prend conscience d'un besoin → Contenu éducatif, articles de blog</span>
        </div>
        <div class="cwv-item">
            <span class="step cwv-inp" style="width: 170px; background: #fbbc04;">Considération</span>
            <span class="text-light">Il compare les solutions → Guides comparatifs, études de cas, avis</span>
        </div>
        <div class="cwv-item">
            <span class="step cwv-cls" style="width: 170px;">Décision</span>
            <span class="text-light">Il est prêt à acheter → Pages produits, démos, offres, témoignages</span>
        </div>
    </div>
    <p class="slide-tip">💡 Créez du contenu pour chaque étape. Un blog attire en phase "Découverte", vos pages services convertissent en phase "Décision".</p>
</div>`,

                `<div class="slide-seo">
    <h1>📅 Le calendrier éditorial</h1>
    <h2>Planifier pour ne jamais manquer d'idées</h2>
    <p class="text-intro">Le <strong>calendrier éditorial</strong> est votre outil de planification. Il organise vos publications sur plusieurs semaines/mois et assure une cohérence dans votre stratégie.</p>
    <div class="keyword-map-table">
        <div class="km-header">
            <span>Date</span>
            <span>Titre prévu</span>
            <span>Mot-clé</span>
            <span>Format</span>
            <span>Statut</span>
        </div>
        <div class="km-row">
            <span class="km-url">15/02</span>
            <span class="km-kw">Guide complet du SEO local</span>
            <span class="km-vol">SEO local</span>
            <span class="km-sec">Article pilier</span>
            <span class="km-kd kd-easy-sm">Publié</span>
        </div>
        <div class="km-row">
            <span class="km-url">22/02</span>
            <span class="km-kw">Comment optimiser sa fiche Google Business</span>
            <span class="km-vol">Google Business Profile</span>
            <span class="km-sec">Tutoriel</span>
            <span class="km-kd kd-medium-sm">En cours</span>
        </div>
        <div class="km-row">
            <span class="km-url">01/03</span>
            <span class="km-kw">Les avis clients : impact sur le SEO</span>
            <span class="km-vol">avis clients SEO</span>
            <span class="km-sec">Article</span>
            <span class="km-kd kd-hard-sm">Planifié</span>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📝 Les types de contenu SEO</h1>
    <h2>Diversifier pour maximiser l'impact</h2>
    <p class="text-intro">Tous les contenus ne servent pas le même objectif. Variez les formats pour toucher différentes audiences et intentions de recherche.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>📚 Articles de blog</h3>
            <p>Contenus informatifs, guides, tutoriels. Idéaux pour la longue traîne et le trafic organique.</p>
            <p class="text-muted">Phase : Découverte</p>
        </div>
        <div class="tool-card">
            <h3>📊 Études de cas</h3>
            <p>Démontrez vos résultats concrets. Preuves sociales puissantes pour convaincre.</p>
            <p class="text-muted">Phase : Considération</p>
        </div>
        <div class="tool-card">
            <h3>📋 Pages piliers</h3>
            <p>Contenus exhaustifs (+3000 mots) sur un sujet central. Attirent des backlinks.</p>
            <p class="text-muted">Phase : Découverte</p>
        </div>
        <div class="tool-card">
            <h3>❓ FAQ</h3>
            <p>Réponses aux questions fréquentes. Parfaites pour les Featured Snippets et People Also Ask.</p>
            <p class="text-muted">Toutes phases</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📝 Encore plus de formats de contenu</h1>
    <h2>Au-delà du texte classique</h2>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>📊 Infographies</h3>
            <p>Données visuelles partageables. Excellent potentiel de backlinks naturels.</p>
            <p class="text-muted">Trafic référent + social</p>
        </div>
        <div class="tool-card">
            <h3>🎬 Vidéos</h3>
            <p>YouTube est le 2ème moteur de recherche. Intégrez-les dans vos articles.</p>
            <p class="text-muted">Engagement + SEO YouTube</p>
        </div>
        <div class="tool-card">
            <h3>📥 Ebooks / Guides PDF</h3>
            <p>Contenus premium en échange d'un email. Génération de leads.</p>
            <p class="text-muted">Lead magnet</p>
        </div>
        <div class="tool-card">
            <h3>🛠️ Outils gratuits</h3>
            <p>Calculateurs, templates, checklist. Génèrent des backlinks et du trafic récurrent.</p>
            <p class="text-muted">Linkbait + fidélisation</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Linkbait :</strong> Contenu spécialement conçu pour attirer des liens naturels. Les outils gratuits, études originales et infographies sont d'excellents linkbaits.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📈 La fréquence de publication</h1>
    <h2>Qualité vs Quantité : le débat éternel</h2>
    <p class="text-intro">Faut-il publier beaucoup ou publier bien ? La réponse dépend de vos ressources, mais une chose est certaine : la <strong>régularité</strong> est clé.</p>
    <div class="kd-scale">
        <div class="kd-item kd-easy">
            <span class="kd-score">1-2/mois</span>
            <span class="kd-label">Minimum viable</span>
            <p class="kd-desc">Pour maintenir une présence. Contenus longs et approfondis.</p>
        </div>
        <div class="kd-item kd-medium">
            <span class="kd-score">1/semaine</span>
            <span class="kd-label">Rythme optimal</span>
            <p class="kd-desc">Bon équilibre qualité/quantité pour la plupart des sites.</p>
        </div>
        <div class="kd-item kd-hard">
            <span class="kd-score">3-5/semaine</span>
            <span class="kd-label">Intensif</span>
            <p class="kd-desc">Pour les médias et sites à forte audience. Équipe dédiée nécessaire.</p>
        </div>
    </div>
    <p class="slide-warning">⚠️ Mieux vaut 1 article excellent par mois que 4 articles médiocres par semaine. Google privilégie la qualité.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔄 Le recyclage de contenu</h1>
    <h2>Faire plus avec ce que vous avez déjà</h2>
    <p class="text-intro">Créer du contenu from scratch est chronophage. Le <strong>recyclage</strong> consiste à réutiliser et adapter vos contenus existants pour maximiser leur impact.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">📝</span>
            <div class="step-content">
                <strong>Article → Infographie</strong>
                <p>Transformez les données d'un article en visuel partageable</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">🎬</span>
            <div class="step-content">
                <strong>Article → Vidéo</strong>
                <p>Convertissez un guide en tutoriel vidéo YouTube</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">📧</span>
            <div class="step-content">
                <strong>Articles → Newsletter</strong>
                <p>Compilez vos meilleurs articles en digest hebdomadaire</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">📱</span>
            <div class="step-content">
                <strong>Article → Posts sociaux</strong>
                <p>Découpez un article en 5-10 posts LinkedIn/Twitter</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔄 L'optimisation de contenu existant</h1>
    <h2>Le ROI du content refresh</h2>
    <p class="text-intro">Mettre à jour d'anciens contenus est souvent <strong>plus rentable</strong> que d'en créer de nouveaux. Un article qui a déjà de l'autorité peut rapidement remonter avec quelques optimisations.</p>
    <ul>
        <li><strong>Identifier les opportunités</strong> : articles en position 5-20 avec du potentiel</li>
        <li><strong>Actualiser les informations</strong> : dates, statistiques, liens cassés</li>
        <li><strong>Enrichir le contenu</strong> : nouvelles sections, questions fréquentes, exemples</li>
        <li><strong>Améliorer l'optimisation</strong> : title, meta description, maillage interne</li>
        <li><strong>Ajouter des médias</strong> : images, vidéos, infographies</li>
    </ul>
    <p class="slide-tip">💡 <strong>Astuce Search Console :</strong> Filtrez par position 5-15 et impressions élevées. Ce sont vos contenus avec le meilleur potentiel de "quick win".</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Mesurer la performance du contenu</h1>
    <h2>Les KPIs à suivre</h2>
    <p class="text-intro">Un bon contenu SEO doit être mesuré. Voici les métriques clés pour évaluer la performance de votre stratégie de contenu.</p>
    <div class="metrics-list">
        <p><span class="metric-label">Trafic organique</span> Nombre de visiteurs venant de Google (Search Console, Analytics)</p>
        <p><span class="metric-label">Positions</span> Classement sur vos mots-clés cibles (SEMrush, Ahrefs, Search Console)</p>
        <p><span class="metric-label">CTR</span> Taux de clic dans les résultats de recherche (Search Console)</p>
        <p><span class="metric-label">Temps sur page</span> Engagement des lecteurs (Analytics)</p>
        <p><span class="metric-label">Taux de rebond</span> % de visiteurs qui partent immédiatement (Analytics)</p>
        <p><span class="metric-label">Conversions</span> Actions réalisées (formulaires, achats, inscriptions)</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Le CTA : l'appel à l'action</h1>
    <h2>Transformer le lecteur en prospect</h2>
    <p class="text-intro">Un contenu sans <strong>CTA</strong> (Call-to-Action) est une impasse. Chaque page doit guider l'utilisateur vers une action, qu'elle soit directe (achat) ou indirecte (inscription newsletter).</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>📝 CTA informatif</h3>
            <p>"Téléchargez notre guide gratuit"</p>
            <p class="text-muted">Phase : Découverte</p>
        </div>
        <div class="tool-card">
            <h3>🔍 CTA comparatif</h3>
            <p>"Demandez une démo personnalisée"</p>
            <p class="text-muted">Phase : Considération</p>
        </div>
        <div class="tool-card">
            <h3>🛒 CTA transactionnel</h3>
            <p>"Ajouter au panier" / "Commencer maintenant"</p>
            <p class="text-muted">Phase : Décision</p>
        </div>
        <div class="tool-card">
            <h3>📧 CTA relationnel</h3>
            <p>"Inscrivez-vous à notre newsletter"</p>
            <p class="text-muted">Toutes phases</p>
        </div>
    </div>
    <p class="slide-tip">💡 Un CTA efficace est visible, clair, et crée un sentiment d'urgence ou de bénéfice immédiat.</p>
</div>`,

                `<div class="slide-seo">
    <h1>✍️ Les erreurs de copywriting à éviter</h1>
    <h2>Ce qui tue vos conversions</h2>
    <ul>
        <li><strong>Parler de vous au lieu du client</strong> : "Nous sommes les meilleurs" → "Vous allez gagner du temps"</li>
        <li><strong>Être trop technique</strong> : jargon incompréhensible pour votre cible</li>
        <li><strong>Murs de texte</strong> : paragraphes trop longs, pas d'aération</li>
        <li><strong>CTA flou</strong> : "En savoir plus" → "Recevez votre devis gratuit"</li>
        <li><strong>Pas de preuve</strong> : affirmations sans témoignages, chiffres ou études</li>
        <li><strong>Trop de CTAs</strong> : choix paralysant, l'utilisateur ne fait rien</li>
        <li><strong>Oublier le mobile</strong> : texte illisible sur petit écran</li>
    </ul>
    <p class="slide-warning">⚠️ Relisez toujours vos contenus avec les yeux de votre persona. Comprendrait-il ? Serait-il convaincu ?</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 L'IA et la rédaction SEO</h1>
    <h2>ChatGPT, Claude & co : menace ou opportunité ?</h2>
    <p class="text-intro">Les outils d'IA générative révolutionnent la création de contenu. Mais attention : Google sait détecter (et potentiellement pénaliser) le contenu 100% généré par IA sans valeur ajoutée.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>✅ Bon usage de l'IA</h3>
            <ul>
                <li>Brainstorming et idéation</li>
                <li>Création de structures/plans</li>
                <li>Premier jet à améliorer</li>
                <li>Réécriture et reformulation</li>
                <li>Recherche d'angles</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>❌ Mauvais usage de l'IA</h3>
            <ul>
                <li>Publier sans relecture</li>
                <li>Contenu générique sans expertise</li>
                <li>Mass content sans valeur</li>
                <li>Copier des concurrents</li>
                <li>Ignorer les faits et sources</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 L'IA est un <strong>assistant</strong>, pas un remplaçant. Votre expertise, votre voix et votre vérification des faits restent indispensables.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Checklist Rédaction SEO</h1>
    <h2>Avant de publier, vérifiez...</h2>
    <ul>
        <li>☐ <strong>Intention</strong> : le contenu répond-il à l'intention de recherche ?</li>
        <li>☐ <strong>Titre</strong> : accrocheur, inclut le mot-clé, < 60 caractères</li>
        <li>☐ <strong>Accroche</strong> : les 3 premières secondes donnent-elles envie de lire ?</li>
        <li>☐ <strong>Structure</strong> : titres H2/H3 clairs, paragraphes courts</li>
        <li>☐ <strong>Sémantique</strong> : champ lexical riche, pas de keyword stuffing</li>
        <li>☐ <strong>Médias</strong> : images optimisées, vidéos si pertinent</li>
        <li>☐ <strong>Liens</strong> : maillage interne vers contenus connexes</li>
        <li>☐ <strong>CTA</strong> : appel à l'action clair et visible</li>
        <li>☐ <strong>Relecture</strong> : orthographe, clarté, vérification des faits</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 2 (Jour 2)</h1>
    <h2>Ce qu'il faut absolument retenir</h2>
    <ul>
        <li>✍️ <strong>Copywriting SEO</strong> : écrire pour les humains ET pour Google, pas l'un ou l'autre</li>
        <li>🎯 <strong>Intention d'abord</strong> : comprenez ce que veut l'utilisateur avant d'écrire</li>
        <li>📐 <strong>Structure gagnante</strong> : accroche, pyramide inversée, featured snippet</li>
        <li>🧲 <strong>Techniques de persuasion</strong> : AIDA, PAS, power words, bénéfices</li>
        <li>📅 <strong>Stratégie éditoriale</strong> : personas, calendrier, diversité des formats</li>
        <li>🔄 <strong>Content refresh</strong> : optimiser l'existant est souvent plus rentable que créer du neuf</li>
        <li>🎯 <strong>CTA clair</strong> : chaque contenu doit mener à une action</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 Exercice pratique</h1>
    <h2>Rédigez un article optimisé</h2>
    <ul>
        <li><strong>1.</strong> Choisissez un mot-clé longue traîne de votre secteur</li>
        <li><strong>2.</strong> Analysez les 5 premiers résultats Google : format, longueur, angles</li>
        <li><strong>3.</strong> Créez un plan avec H1, H2, H3 incluant les questions "People Also Ask"</li>
        <li><strong>4.</strong> Rédigez l'introduction en utilisant la formule AIDA ou PAS</li>
        <li><strong>5.</strong> Enrichissez le champ sémantique avec 1.fr ou les recherches associées</li>
        <li><strong>6.</strong> Ajoutez un CTA adapté à l'intention de recherche</li>
    </ul>
    <p class="slide-tip">💡 <strong>Prochain chapitre :</strong> Les nouveaux formats et la recherche moderne — recherche vocale, vidéo, IA et E-E-A-T.</p>
</div>`,

                // ==================== CHAPITRE 3 : LES NOUVEAUX FORMATS ET LA RECHERCHE MODERNE ====================

                `<div class="slide-seo">
    <h1>🚀 Chapitre 3</h1>
    <h2>Les nouveaux formats et la recherche moderne</h2>
    <p class="text-intro">Le SEO évolue constamment. Au-delà des résultats textuels classiques, Google propose désormais de <strong>nombreux formats</strong> qui transforment la manière dont les utilisateurs trouvent l'information. Maîtriser ces nouveaux canaux est essentiel pour rester compétitif.</p>
    <div class="slide-agenda">
        <p>🎤 La recherche vocale et les assistants virtuels</p>
        <p>🎬 Le SEO vidéo et YouTube</p>
        <p>📰 Google Discover et Google News</p>
        <p>🏆 L'E-E-A-T et les critères de qualité</p>
        <p>🤖 L'IA générative et la Search Generative Experience (SGE)</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🎤 La recherche vocale</h1>
    <h2>Une révolution dans les comportements de recherche</h2>
    <p class="text-intro">La <strong>recherche vocale</strong> permet aux utilisateurs de parler à leur appareil au lieu de taper. Avec Siri, Google Assistant, Alexa et Cortana, plus de <strong>50% des recherches</strong> intègrent désormais une composante vocale.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>⌨️ Recherche textuelle</h3>
            <ul>
                <li>"météo Paris"</li>
                <li>"restaurant italien Lyon"</li>
                <li>"prix iPhone 15"</li>
                <li>"horaires SNCF"</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>🎤 Recherche vocale</h3>
            <ul>
                <li>"Quel temps fait-il à Paris ?"</li>
                <li>"Trouve-moi un bon italien près de moi"</li>
                <li>"Combien coûte le nouvel iPhone ?"</li>
                <li>"À quelle heure part le prochain train ?"</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Différence clé :</strong> Les requêtes vocales sont plus longues, conversationnelles et souvent formulées sous forme de questions.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🗣️ Caractéristiques de la recherche vocale</h1>
    <h2>Comprendre pour mieux optimiser</h2>
    <p class="text-intro">La recherche vocale présente des caractéristiques distinctes qui influencent directement votre stratégie SEO.</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>💬 Langage naturel</h3>
            <p>Phrases complètes et conversationnelles</p>
            <p class="text-accent mt-sm">→ Optimisez pour le langage parlé</p>
        </div>
        <div class="intent-card">
            <h3>❓ Questions fréquentes</h3>
            <p>Qui, quoi, où, quand, comment, pourquoi</p>
            <p class="text-accent mt-sm">→ Créez du contenu FAQ</p>
        </div>
        <div class="intent-card">
            <h3>📍 Recherche locale</h3>
            <p>"Près de moi", "à proximité"</p>
            <p class="text-accent mt-sm">→ SEO local indispensable</p>
        </div>
        <div class="intent-card">
            <h3>📱 Mobile-first</h3>
            <p>80% des recherches vocales sur mobile</p>
            <p class="text-accent mt-sm">→ Site mobile optimisé obligatoire</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Optimiser pour la recherche vocale</h1>
    <h2>Stratégies concrètes</h2>
    <p class="text-intro">Pour capter le trafic vocal, adaptez votre contenu aux spécificités de ce canal.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Ciblez les questions longue traîne</strong>
                <p>"Comment faire une tarte aux pommes maison" plutôt que "recette tarte pomme"</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Répondez directement et concisément</strong>
                <p>La réponse idéale fait 29 mots en moyenne (format Featured Snippet)</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Créez des pages FAQ structurées</strong>
                <p>Questions en H2, réponses courtes en paragraphe, balisage Schema FAQ</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Optimisez votre fiche Google Business</strong>
                <p>40% des recherches vocales sont locales : adresse, horaires, téléphone à jour</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🏆 La Position Zéro (Featured Snippet)</h1>
    <h2>Le Graal de la recherche vocale</h2>
    <p class="text-intro">Le <strong>Featured Snippet</strong> est l'encadré qui apparaît au-dessus des résultats organiques. Il répond directement à la question de l'utilisateur et est souvent <strong>lu par les assistants vocaux</strong>.</p>
    <div class="slide-diagram flex-col gap-md items-center">
        <div class="featured-snippet-demo" style="background: rgba(255,255,255,0.05); border: 2px solid #4285f4; border-radius: 12px; padding: 20px; width: 100%; max-width: 600px;">
            <p style="color: #888; font-size: 0.85rem; margin-bottom: 8px !important;">www.exemple.com › guide-seo</p>
            <p style="color: #fff; font-weight: 600; margin-bottom: 12px !important;">Qu'est-ce que le SEO ?</p>
            <p style="color: #ccc; font-size: 0.95rem !important;">Le SEO (Search Engine Optimization) désigne l'ensemble des techniques visant à améliorer la visibilité d'un site web dans les résultats naturels des moteurs de recherche comme Google.</p>
        </div>
    </div>
    <p class="slide-warning">⚠️ <strong>Paradoxe du Featured Snippet :</strong> Il peut réduire les clics (l'info est déjà visible), mais il capte 100% des réponses vocales et renforce votre autorité.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📋 Types de Featured Snippets</h1>
    <h2>Adapter son contenu au format recherché</h2>
    <p class="text-intro">Google affiche différents types de Featured Snippets selon la nature de la requête. Identifiez le format dominant pour votre mot-clé et structurez votre contenu en conséquence.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>📝 Paragraphe</h3>
            <p>Définitions, explications courtes (40-60 mots)</p>
            <p class="text-muted">"Qu'est-ce que...", "Pourquoi..."</p>
        </div>
        <div class="tool-card">
            <h3>📋 Liste à puces</h3>
            <p>Étapes, caractéristiques, éléments</p>
            <p class="text-muted">"Comment faire...", "Les meilleurs..."</p>
        </div>
        <div class="tool-card">
            <h3>🔢 Liste numérotée</h3>
            <p>Processus étape par étape, classements</p>
            <p class="text-muted">"Étapes pour...", "Top 10..."</p>
        </div>
        <div class="tool-card">
            <h3>📊 Tableau</h3>
            <p>Comparaisons, données structurées</p>
            <p class="text-muted">"Comparatif...", "Prix de..."</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Astuce :</strong> Tapez votre mot-clé dans Google et observez le type de Featured Snippet affiché. Reproduisez ce format dans votre contenu.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎬 Le SEO Vidéo</h1>
    <h2>YouTube : le 2ème moteur de recherche mondial</h2>
    <p class="text-intro">YouTube compte plus de <strong>2 milliards d'utilisateurs</strong> actifs mensuels. C'est le 2ème site le plus visité au monde après Google. Ignorer la vidéo, c'est ignorer un canal de trafic massif.</p>
    <div class="market-share">
        <div class="share-bar">
            <span class="share-label">Google</span>
            <span class="share-fill share-fill-google" style="width: 92%;"></span>
            <span class="share-value">92%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">YouTube</span>
            <span class="share-fill" style="width: 79%; background: linear-gradient(90deg, #ff0000, #cc0000);"></span>
            <span class="share-value">2ème</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Facebook</span>
            <span class="share-fill" style="width: 65%; background: #1877f2;"></span>
            <span class="share-value">3ème</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Double visibilité :</strong> Les vidéos YouTube apparaissent aussi dans les résultats Google, sous forme de carrousels vidéo et de Featured Snippets vidéo.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎥 Optimisation YouTube SEO</h1>
    <h2>Les facteurs de classement sur YouTube</h2>
    <p class="text-intro">L'algorithme YouTube évalue des critères spécifiques pour classer les vidéos. Voici les éléments à optimiser pour maximiser votre visibilité.</p>
    <ul>
        <li><strong>Titre optimisé</strong> : mot-clé principal au début, < 60 caractères, accrocheur</li>
        <li><strong>Description détaillée</strong> : 200-300 mots, mots-clés naturels, liens, timestamps</li>
        <li><strong>Tags pertinents</strong> : 5-10 tags mélangeant termes génériques et spécifiques</li>
        <li><strong>Miniature (thumbnail)</strong> : visage, texte lisible, contraste fort, format 16:9</li>
        <li><strong>Sous-titres (CC)</strong> : ajoutez-les manuellement pour plus de précision</li>
        <li><strong>Chapitres (timestamps)</strong> : facilitent la navigation et génèrent des "Key Moments"</li>
        <li><strong>Cards et écrans de fin</strong> : encouragent l'engagement et le visionnage continu</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>📈 Métriques d'engagement YouTube</h1>
    <h2>Ce que l'algorithme mesure vraiment</h2>
    <p class="text-intro">YouTube privilégie les vidéos qui <strong>retiennent l'attention</strong>. Les métriques d'engagement sont cruciales pour le classement.</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>⏱️ Watch Time</h3>
            <p>Temps de visionnage total</p>
            <p class="text-accent mt-sm">→ Le facteur n°1 de l'algorithme</p>
        </div>
        <div class="intent-card">
            <h3>📊 Rétention</h3>
            <p>% de la vidéo regardée en moyenne</p>
            <p class="text-accent mt-sm">→ Visez > 50% de rétention</p>
        </div>
        <div class="intent-card">
            <h3>👍 Engagement</h3>
            <p>Likes, commentaires, partages</p>
            <p class="text-accent mt-sm">→ Incitez à interagir</p>
        </div>
        <div class="intent-card">
            <h3>🔄 Session Watch Time</h3>
            <p>Temps passé sur YouTube après votre vidéo</p>
            <p class="text-accent mt-sm">→ Recommandez d'autres vidéos</p>
        </div>
    </div>
    <p class="slide-warning">⚠️ <strong>Attention au "Clickbait" :</strong> Un titre accrocheur qui déçoit = taux de rétention faible = vidéo pénalisée.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Vidéos dans les résultats Google</h1>
    <h2>Apparaître dans les SERPs avec vos vidéos</h2>
    <p class="text-intro">Google intègre de plus en plus de vidéos dans ses résultats de recherche. Voici comment maximiser vos chances d'y apparaître.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Ciblez des requêtes "vidéo-friendly"</strong>
                <p>Tutoriels, how-to, reviews, démonstrations → Google affiche souvent des vidéos</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Utilisez le balisage Schema VideoObject</strong>
                <p>Permet à Google de comprendre et d'afficher les métadonnées de votre vidéo</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Intégrez la vidéo dans un article optimisé</strong>
                <p>La vidéo YouTube + contenu textuel SEO = double visibilité</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Créez des "Key Moments"</strong>
                <p>Les timestamps apparaissent comme liens cliquables dans Google</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📰 Google Discover</h1>
    <h2>Le flux personnalisé qui vous trouve</h2>
    <p class="text-intro"><strong>Google Discover</strong> est un flux de contenu personnalisé qui apparaît sur la page d'accueil de l'app Google et sur Chrome mobile. Contrairement à la recherche classique, l'utilisateur ne cherche pas : <strong>le contenu vient à lui</strong>.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>🔍 Google Search</h3>
            <ul>
                <li>L'utilisateur tape une requête</li>
                <li>Intention explicite</li>
                <li>Résultats basés sur les mots-clés</li>
                <li>Trafic prévisible et stable</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>📱 Google Discover</h3>
            <ul>
                <li>Le contenu est suggéré automatiquement</li>
                <li>Basé sur les centres d'intérêt</li>
                <li>Résultats basés sur l'historique utilisateur</li>
                <li>Trafic volatile mais massif</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Potentiel énorme :</strong> Un article qui "prend" sur Discover peut générer des dizaines de milliers de visites en quelques heures.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Optimiser pour Google Discover</h1>
    <h2>Les critères de visibilité</h2>
    <p class="text-intro">Google Discover favorise le contenu qui suscite l'intérêt et l'engagement. Voici les leviers d'optimisation.</p>
    <ul>
        <li><strong>Images de haute qualité</strong> : minimum 1200px de large, format 16:9, visuellement attractives</li>
        <li><strong>Titres engageants</strong> : suscitent la curiosité sans être "clickbait"</li>
        <li><strong>Contenu frais et original</strong> : actualités, tendances, sujets d'intérêt</li>
        <li><strong>E-E-A-T solide</strong> : expertise démontrée, auteur identifié, sources citées</li>
        <li><strong>Pas de contenu trompeur</strong> : le titre doit refléter fidèlement le contenu</li>
        <li><strong>Site rapide et mobile-friendly</strong> : Core Web Vitals optimisés</li>
    </ul>
    <p class="slide-warning">⚠️ <strong>Attention :</strong> Discover est imprévisible. Ne construisez pas votre stratégie uniquement sur ce canal. C'est un bonus, pas une base.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📰 Google News</h1>
    <h2>Le référencement pour les éditeurs d'actualité</h2>
    <p class="text-intro"><strong>Google News</strong> est un agrégateur d'actualités qui compile les articles de milliers de sources. Être référencé sur Google News offre une visibilité considérable pour les contenus d'actualité.</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>✅ Critères d'éligibilité</h3>
            <p>Contenu original, actualités fraîches, rédaction professionnelle</p>
            <p class="text-accent mt-sm">→ Pas de contenu sponsorisé</p>
        </div>
        <div class="intent-card">
            <h3>📝 Exigences techniques</h3>
            <p>URLs propres, dates claires, sitemap News</p>
            <p class="text-accent mt-sm">→ Balisage Article structuré</p>
        </div>
        <div class="intent-card">
            <h3>🏢 Politique éditoriale</h3>
            <p>Mentions légales, équipe identifiée, contact visible</p>
            <p class="text-accent mt-sm">→ Transparence obligatoire</p>
        </div>
        <div class="intent-card">
            <h3>⚡ Fraîcheur</h3>
            <p>Publication rapide, mises à jour fréquentes</p>
            <p class="text-accent mt-sm">→ Actualité = rapidité</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔧 Sitemap Google News</h1>
    <h2>Déclarer vos articles d'actualité</h2>
    <p class="text-intro">Un <strong>sitemap News</strong> est un fichier XML spécifique qui signale vos articles récents à Google News. Il ne contient que les articles des <strong>2 derniers jours</strong>.</p>
    <div class="code-block">
        <span class="code-comment">&lt;!-- Structure d'un sitemap News --&gt;</span><br>
        <span class="code-keyword">&lt;urlset</span> xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"<span class="code-keyword">&gt;</span><br>
        &nbsp;&nbsp;<span class="code-keyword">&lt;url&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">&lt;loc&gt;</span><span class="code-value-blue">https://exemple.com/article-actu</span><span class="code-keyword">&lt;/loc&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">&lt;news:news&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">&lt;news:publication_date&gt;</span><span class="code-value-green">2025-01-30</span><span class="code-keyword">&lt;/news:publication_date&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">&lt;news:title&gt;</span>Titre de l'article<span class="code-keyword">&lt;/news:title&gt;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">&lt;/news:news&gt;</span><br>
        &nbsp;&nbsp;<span class="code-keyword">&lt;/url&gt;</span><br>
        <span class="code-keyword">&lt;/urlset&gt;</span>
    </div>
    <p class="slide-tip">💡 <strong>Automatisation :</strong> La plupart des CMS (WordPress, Drupal) génèrent automatiquement le sitemap News avec les bons plugins.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 L'IA générative et le SEO</h1>
    <h2>ChatGPT, Claude, Gemini : la nouvelle donne</h2>
    <p class="text-intro">L'émergence des <strong>IA génératives</strong> bouleverse la recherche d'information. Les utilisateurs posent désormais leurs questions à des chatbots qui synthétisent les réponses au lieu de lister des liens.</p>
    <div class="slide-diagram flex-col gap-sm items-center mt-lg">
        <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap; justify-content: center;">
            <span class="step" style="background: rgba(16, 163, 127, 0.3); border-color: #10a37f;">ChatGPT</span>
            <span class="step" style="background: rgba(204, 120, 50, 0.3); border-color: #cc7832;">Claude</span>
            <span class="step" style="background: rgba(66, 133, 244, 0.3); border-color: #4285f4;">Gemini</span>
            <span class="step" style="background: rgba(244, 114, 182, 0.3); border-color: #f472b6;">Perplexity</span>
        </div>
    </div>
    <p class="slide-warning mt-lg">⚠️ <strong>Impact SEO :</strong> Si l'IA répond directement à la question, l'utilisateur ne clique plus sur votre site. Le trafic "zéro-clic" s'accélère.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔮 SGE : Search Generative Experience</h1>
    <h2>La réponse IA intégrée à Google</h2>
    <p class="text-intro">La <strong>SGE</strong> (Search Generative Experience) est la fonctionnalité de Google qui génère des réponses IA directement dans les résultats de recherche, au-dessus des liens organiques.</p>
    <div class="cannibalization-example">
        <div class="cannibal-bad">
            <h4>📉 Impact potentiel</h4>
            <p style="font-family: inherit !important;">Les réponses IA cannibalisent les clics</p>
            <p style="font-family: inherit !important;">Moins de trafic vers les sites sources</p>
            <p style="font-family: inherit !important;">Position 1 organique perd de la valeur</p>
        </div>
        <div class="cannibal-good">
            <h4>📈 Opportunités</h4>
            <p style="font-family: inherit !important;">Être cité comme source dans la réponse IA</p>
            <p style="font-family: inherit !important;">Les requêtes complexes nécessitent toujours des clics</p>
            <p style="font-family: inherit !important;">Le contenu approfondi reste indispensable</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Adaptation :</strong> Créez du contenu si complet et unique que l'IA devra citer votre source. Le contenu générique sera absorbé ; le contenu expert sera référencé.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Optimiser pour l'ère de l'IA</h1>
    <h2>Stratégies d'adaptation</h2>
    <p class="text-intro">Face à l'IA générative, le SEO évolue. Voici comment adapter votre stratégie pour rester visible dans ce nouveau paradigme.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Créez du contenu "non-résumable"</strong>
                <p>Outils interactifs, calculateurs, configurateurs, données exclusives</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Développez votre marque</strong>
                <p>Les utilisateurs rechercheront directement "votre marque + sujet"</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Misez sur l'expérience personnelle</strong>
                <p>L'IA ne peut pas avoir VÉCU l'expérience que vous décrivez</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Construisez une communauté</strong>
                <p>Newsletter, forum, Discord → trafic direct, indépendant de Google</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📱 Les "Zero-Click Searches"</h1>
    <h2>Quand Google répond sans clic</h2>
    <p class="text-intro">Les <strong>recherches zéro-clic</strong> sont des requêtes pour lesquelles l'utilisateur obtient sa réponse directement dans les SERPs, sans visiter aucun site. Ce phénomène s'amplifie avec l'IA.</p>
    <div class="market-share">
        <div class="share-bar">
            <span class="share-label">Zéro-clic</span>
            <span class="share-fill share-fill-bad" style="width: 65%;"></span>
            <span class="share-value">~65%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Clics organiques</span>
            <span class="share-fill share-fill-good" style="width: 25%;"></span>
            <span class="share-value">~25%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Clics payants</span>
            <span class="share-fill share-fill-ok" style="width: 10%;"></span>
            <span class="share-value">~10%</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Stratégie :</strong> Visez les requêtes complexes qui nécessitent des clics (comparatifs, guides approfondis, tutoriels) plutôt que les définitions simples.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Les données structurées avancées</h1>
    <h2>Alimenter les résultats enrichis et l'IA</h2>
    <p class="text-intro">Les <strong>données structurées</strong> (Schema.org) permettent à Google de mieux comprendre votre contenu et d'afficher des résultats enrichis (rich snippets). Elles deviennent cruciales pour être cité par l'IA.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>❓ FAQPage</h3>
            <p>Questions/réponses affichées dans les SERPs</p>
            <p class="text-muted">Visibilité + Featured Snippets</p>
        </div>
        <div class="tool-card">
            <h3>📝 HowTo</h3>
            <p>Étapes d'un tutoriel avec images</p>
            <p class="text-muted">Carrousel d'étapes dans Google</p>
        </div>
        <div class="tool-card">
            <h3>⭐ Review</h3>
            <p>Notes et avis avec étoiles</p>
            <p class="text-muted">CTR boosté par les étoiles</p>
        </div>
        <div class="tool-card">
            <h3>📅 Event</h3>
            <p>Événements avec dates et lieux</p>
            <p class="text-muted">Apparition dans Google Events</p>
        </div>
    </div>
    <p class="slide-note">📝 <strong>Outil :</strong> Utilisez le <a href="https://search.google.com/test/rich-results" style="color: #00d4aa;">Rich Results Test</a> de Google pour valider vos données structurées.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🌐 Le Knowledge Graph</h1>
    <h2>Devenir une entité reconnue par Google</h2>
    <p class="text-intro">Le <strong>Knowledge Graph</strong> est la base de données de Google qui relie les entités (personnes, entreprises, lieux, concepts) entre elles. Y figurer augmente considérablement votre visibilité.</p>
    <div class="slide-diagram flex-col gap-md items-center">
        <div style="background: rgba(255,255,255,0.05); border: 2px solid #7c3aed; border-radius: 12px; padding: 20px; width: 100%; max-width: 500px;">
            <p style="color: #a78bfa; font-size: 0.9rem; margin-bottom: 8px !important;">Knowledge Panel</p>
            <p style="color: #fff; font-weight: 600; font-size: 1.3rem; margin-bottom: 8px !important;">Votre Entreprise</p>
            <p style="color: #888; font-size: 0.9rem !important; margin-bottom: 4px !important;">📍 Siège social : Paris, France</p>
            <p style="color: #888; font-size: 0.9rem !important; margin-bottom: 4px !important;">👤 Fondateur : Jean Dupont</p>
            <p style="color: #888; font-size: 0.9rem !important; margin-bottom: 4px !important;">🌐 Site : www.exemple.com</p>
            <p style="color: #888; font-size: 0.9rem !important;">📱 Réseaux : LinkedIn, Twitter</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Comment y entrer :</strong> Wikipedia, Wikidata, Google Business Profile, données structurées Organization, mentions cohérentes sur le web.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔍 Tendances SEO 2025-2026</h1>
    <h2>Ce qui arrive et comment s'y préparer</h2>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>🤖 IA omniprésente</h3>
            <p>SGE déployée mondialement</p>
            <p class="text-accent mt-sm">→ Contenu unique et expert</p>
        </div>
        <div class="intent-card">
            <h3>🎤 Multimodal</h3>
            <p>Recherche par image, voix, vidéo combinées</p>
            <p class="text-accent mt-sm">→ Optimisez tous les formats</p>
        </div>
        <div class="intent-card">
            <h3>📱 Mobile-only</h3>
            <p>Index mobile-first total</p>
            <p class="text-accent mt-sm">→ Expérience mobile parfaite</p>
        </div>
        <div class="intent-card">
            <h3>🔒 Privacy-first</h3>
            <p>Fin des cookies tiers, moins de données</p>
            <p class="text-accent mt-sm">→ SEO + first-party data (informations collectées sur vos utilisateurs)</p>
        </div>
    </div>
    <p class="slide-warning">⚠️ <strong>Le SEO ne meurt pas, il évolue.</strong> Les fondamentaux (contenu de qualité, technique propre, autorité) restent valables. Seuls les formats et canaux changent.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛡️ Checklist : Nouveaux formats</h1>
    <h2>Vérifiez votre présence sur tous les canaux</h2>
    <ul>
        <li>☐ <strong>Recherche vocale</strong> : contenu FAQ, langage naturel, SEO local</li>
        <li>☐ <strong>Featured Snippets</strong> : réponses directes, listes, tableaux</li>
        <li>☐ <strong>YouTube</strong> : titres optimisés, miniatures, timestamps, sous-titres</li>
        <li>☐ <strong>Google Discover</strong> : images HD, titres engageants, contenu frais</li>
        <li>☐ <strong>Google News</strong> : sitemap News, dates, auteurs identifiés</li>
        <li>☐ <strong>E-E-A-T</strong> : pages auteur, sources, transparence, expertise visible</li>
        <li>☐ <strong>Données structurées</strong> : FAQPage, HowTo, Review, Organization</li>
        <li>☐ <strong>Knowledge Graph</strong> : Wikidata, Google Business, mentions cohérentes</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 3 (Jour 2)</h1>
    <h2>Ce qu'il faut absolument retenir</h2>
    <ul>
        <li>🎤 <strong>Recherche vocale</strong> : questions longues, langage naturel, SEO local</li>
        <li>🏆 <strong>Featured Snippets</strong> : position zéro = réponse vocale + visibilité maximale</li>
        <li>🎬 <strong>YouTube SEO</strong> : watch time, rétention, miniatures, descriptions optimisées</li>
        <li>📱 <strong>Discover & News</strong> : images HD, fraîcheur, engagement (bonus de trafic)</li>
        <li>🏅 <strong>E-E-A-T</strong> : Experience, Expertise, Authority, Trust — critères de qualité Google</li>
        <li>🤖 <strong>IA générative</strong> : SGE arrive, créez du contenu "non-résumable" et unique</li>
        <li>📊 <strong>Données structurées</strong> : indispensables pour les rich snippets et l'IA</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 Exercice pratique</h1>
    <h2>Auditez votre présence multiformat</h2>
    <ul>
        <li><strong>1.</strong> Recherchez votre marque/produit sur Google : avez-vous un Knowledge Panel ?</li>
        <li><strong>2.</strong> Tapez une question clé de votre secteur : qui a le Featured Snippet ?</li>
        <li><strong>3.</strong> Recherchez sur YouTube : vos vidéos sont-elles optimisées ? Quels concurrents dominent ?</li>
        <li><strong>4.</strong> Testez vos pages avec le <a href="https://search.google.com/test/rich-results" style="color: #00d4aa;">Rich Results Test</a></li>
        <li><strong>5.</strong> Vérifiez vos pages auteur : expertise visible ? Bio complète ?</li>
        <li><strong>6.</strong> Posez une question de votre secteur à ChatGPT : cite-t-il votre site ?</li>
    </ul>
    <p class="slide-tip">💡 <strong>Prochain chapitre :</strong> Le netlinking et l'autorité de domaine — comment obtenir des backlinks de qualité.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Jour 3 – Le Netlinking</h1>
    <h2>Chapitre 1 : Bâtir l'autorité du domaine</h2>
    <p class="slide-subtitle">L'art de gagner la confiance de Google grâce aux liens</p>
    <p class="mt-xl text-info"><strong>Netlinking</strong> = Stratégie d'acquisition de <em>backlinks</em> (liens entrants)<br><span class="text-muted">Aussi appelé "link building" ou "off-page SEO"</span></p>
    <p class="mt-lg text-muted">Si le contenu est le <strong>roi</strong>, les liens sont la <strong>monnaie</strong> du web.<br>Ils représentent des votes de confiance d'un site vers un autre.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📚 Au programme</h1>
    <h2>Ce que vous allez apprendre</h2>
    <div class="slide-agenda">
        <p>🔗 Comprendre les backlinks et leur importance</p>
        <p>📊 L'autorité de domaine : définition et métriques</p>
        <p>⚖️ Liens DoFollow vs NoFollow : quelles différences ?</p>
        <p>🏗️ Le profil de liens idéal</p>
        <p>🛠️ Stratégies d'acquisition de backlinks</p>
        <p>⚠️ Les pratiques à éviter (Black Hat)</p>
        <p>📈 Outils d'analyse des backlinks</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Qu'est-ce qu'un backlink ?</h1>
    <h2>Le pilier fondamental du netlinking</h2>
    <p class="text-intro">Un <strong>backlink</strong> (ou lien entrant, lien retour) est un lien hypertexte situé sur un site externe qui pointe vers une page de votre site. C'est l'équivalent digital d'une recommandation.</p>
    <div class="slide-diagram">
        <div class="step" style="background: rgba(124, 58, 237, 0.2); border-color: #7c3aed;">Site A</div>
        <span class="arrow">→</span>
        <div class="step" style="font-size: 1.5rem;">🔗</div>
        <span class="arrow">→</span>
        <div class="step" style="background: rgba(0, 212, 170, 0.2); border-color: #00d4aa;">Votre site</div>
    </div>
    <p class="slide-tip">💡 <strong>Analogie :</strong> Imaginez chaque backlink comme une citation dans un article scientifique. Plus vous êtes cité par des sources réputées, plus votre travail est considéré comme fiable.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📜 L'histoire du PageRank</h1>
    <h2>Pourquoi les liens sont-ils si importants ?</h2>
    <p class="text-intro">En 1998, Larry Page (co-fondateur de Google) a révolutionné la recherche en inventant le <strong>PageRank</strong>, un algorithme qui évalue l'importance d'une page web en fonction des liens qu'elle reçoit.</p>
    <ul>
        <li>Chaque lien = un "vote" en faveur de la page cible</li>
        <li>Un vote depuis un site autoritaire vaut plus qu'un vote depuis un petit blog</li>
        <li>Le "jus de lien" (<strong>link juice</strong>) se transmet de page en page</li>
    </ul>
    <p class="slide-quote">"Le web est un graphe géant de pages interconnectées. Les liens révèlent la structure de confiance."<br><small>— Principe fondateur de Google</small></p>
</div>`,

                `<div class="slide-seo">
    <h1>⚡ Pourquoi les backlinks comptent ?</h1>
    <h2>Les 3 raisons majeures</h2>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>🏆 Facteur de classement</h3>
            <p>Les backlinks restent l'un des 3 principaux facteurs de ranking de Google</p>
            <p class="text-accent mt-sm">→ Plus de liens de qualité = meilleures positions</p>
        </div>
        <div class="intent-card">
            <h3>🕷️ Découverte & Crawl</h3>
            <p>Googlebot découvre de nouvelles pages en suivant les liens</p>
            <p class="text-accent mt-sm">→ Liens = chemins pour les robots</p>
        </div>
        <div class="intent-card">
            <h3>🚗 Trafic référent</h3>
            <p>Les visiteurs cliquent sur les liens et arrivent sur votre site</p>
            <p class="text-accent mt-sm">→ Source de trafic qualifié gratuit</p>
        </div>
        <div class="intent-card">
            <h3>🎖️ Crédibilité</h3>
            <p>Être cité par des sites reconnus renforce votre légitimité</p>
            <p class="text-accent mt-sm">→ E-E-A-T et confiance utilisateur</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📊 L'autorité de domaine</h1>
    <h2>Mesurer la "puissance" d'un site</h2>
    <p class="text-intro">L'<strong>autorité de domaine</strong> (Domain Authority / Domain Rating) est un score qui estime la capacité d'un site à bien se positionner dans les résultats de recherche, basé principalement sur son profil de backlinks.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>📏 Ce que ça mesure</h3>
            <ul>
                <li>Quantité de backlinks</li>
                <li>Qualité des sites qui font des liens</li>
                <li>Diversité des domaines référents</li>
                <li>Ancienneté du profil de liens</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>⚠️ Ce que ça n'est PAS</h3>
            <ul>
                <li>Une métrique officielle de Google</li>
                <li>Un indicateur absolu de ranking</li>
                <li>Un score comparable entre outils</li>
                <li>Une garantie de succès SEO</li>
            </ul>
        </div>
    </div>
    <p class="slide-warning">⚠️ Google n'utilise pas de score "Domain Authority". Ce sont des métriques créées par des outils tiers (Moz, Ahrefs, SEMrush) pour estimer l'autorité.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔢 Les différentes métriques</h1>
    <h2>DA, DR, TF... Décryptage</h2>
    <p class="text-intro">Chaque outil SEO a créé sa propre métrique d'autorité. Elles sont calculées différemment mais mesurent un concept similaire.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>🟣 DA (Domain Authority)</h3>
            <p>Créé par <strong>Moz</strong>. Score de 0 à 100.</p>
            <p class="text-muted">Basé sur le nombre et la qualité des liens entrants + âge du domaine</p>
        </div>
        <div class="tool-card">
            <h3>🟠 DR (Domain Rating)</h3>
            <p>Créé par <strong>Ahrefs</strong>. Score de 0 à 100.</p>
            <p class="text-muted">Basé sur la force du profil de backlinks (quantité × qualité)</p>
        </div>
        <div class="tool-card">
            <h3>🔵 AS (Authority Score)</h3>
            <p>Créé par <strong>SEMrush</strong>. Score de 0 à 100.</p>
            <p class="text-muted">Combine liens, trafic organique et signaux de spam</p>
        </div>
        <div class="tool-card">
            <h3>🟢 TF / CF (Trust & Citation Flow)</h3>
            <p>Créé par <strong>Majestic</strong>. Deux scores complémentaires.</p>
            <p class="text-muted">TF = qualité/confiance • CF = quantité/influence</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>📈 Échelle d'autorité</h1>
    <h2>Interpréter les scores (DR/DA)</h2>
    <p class="text-intro">L'échelle est <strong>logarithmique</strong> : passer de 20 à 30 est facile, mais de 70 à 80 demande un effort considérable.</p>
    <div class="kd-scale">
        <div class="kd-item kd-easy">
            <span class="kd-score">0-30</span>
            <span class="kd-label">Débutant</span>
            <p class="kd-desc">Nouveaux sites, blogs personnels, peu de backlinks</p>
        </div>
        <div class="kd-item kd-medium">
            <span class="kd-score">31-60</span>
            <span class="kd-label">Intermédiaire</span>
            <p class="kd-desc">PME établies, sites de niche, quelques années d'existence</p>
        </div>
        <div class="kd-item kd-hard">
            <span class="kd-score">61-100</span>
            <span class="kd-label">Autoritaire</span>
            <p class="kd-desc">Médias, grandes marques, sites gouvernementaux, Wikipedia</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Exemples :</strong> Wikipedia ≈ 93 DR, LeMonde.fr ≈ 90 DR, une PME typique ≈ 25-40 DR, un nouveau blog ≈ 5-15 DR</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔍 DoFollow vs NoFollow</h1>
    <h2>Tous les liens ne se valent pas</h2>
    <p class="text-intro">L'attribut <strong>rel</strong> d'un lien indique à Google comment traiter ce lien. Comprendre la différence est essentiel pour votre stratégie de netlinking.</p>
    <div class="comparison-table">
        <div class="comparison-col" style="border-color: rgba(0, 212, 170, 0.4);">
            <h3 style="color: #00d4aa;">✅ DoFollow (par défaut)</h3>
            <ul>
                <li>Transmet le "jus de lien" (PageRank)</li>
                <li>Compte comme un vote de confiance</li>
                <li>Aide au référencement de la page cible</li>
                <li>C'est le comportement par défaut d'un lien</li>
            </ul>
            <div class="code-block-sm mt-md">
                <code>&lt;a href="url"&gt;Lien&lt;/a&gt;</code>
            </div>
        </div>
        <div class="comparison-col" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🚫 NoFollow</h3>
            <ul>
                <li>Ne transmet PAS de jus de lien</li>
                <li>Demande à Google de ne pas le suivre</li>
                <li>Utilisé pour les liens sponsorisés/pubs</li>
                <li>Toujours utile pour le trafic et la notoriété</li>
            </ul>
            <div class="code-block-sm mt-md">
                <code>&lt;a href="url" <span class="code-value-red">rel="nofollow"</span>&gt;Lien&lt;/a&gt;</code>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🏷️ Les attributs de liens modernes</h1>
    <h2>Google a enrichi le vocabulaire en 2019</h2>
    <p class="text-intro">Google a introduit de nouveaux attributs pour mieux comprendre la nature des liens. Ces attributs sont des "indications" (hints), pas des directives strictes.</p>
    <div class="intent-grid">
        <div class="intent-card">
            <h3 style="color: #ea4335;">rel="nofollow"</h3>
            <p>Lien que vous ne voulez pas endosser</p>
            <p class="text-muted">Ex : commentaires utilisateurs, liens douteux</p>
        </div>
        <div class="intent-card">
            <h3 style="color: #fbbc04;">rel="sponsored"</h3>
            <p>Lien payant ou sponsorisé</p>
            <p class="text-muted">Ex : publicités, partenariats rémunérés</p>
        </div>
        <div class="intent-card">
            <h3 style="color: #4285f4;">rel="ugc"</h3>
            <p>User Generated Content</p>
            <p class="text-muted">Ex : commentaires, forums, publications utilisateurs</p>
        </div>
        <div class="intent-card">
            <h3 style="color: #00d4aa;">(aucun attribut)</h3>
            <p>DoFollow par défaut</p>
            <p class="text-muted">Lien éditorial, recommandation naturelle</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Depuis 2019 :</strong> Google traite les nofollow comme des "indices" et peut choisir de les suivre quand même. Le nofollow n'est plus un blocage absolu.</p>
</div>`,

                `<div class="slide-seo">
    <h1>⚖️ Faut-il ignorer les liens NoFollow ?</h1>
    <h2>La vraie valeur des liens NoFollow</h2>
    <p class="text-intro">Non ! Les liens nofollow ont toujours de la valeur, même s'ils ne transmettent pas de jus de lien directement.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>👍 Avantages des liens NoFollow</h3>
            <ul>
                <li><strong>Trafic référent</strong> : les gens cliquent quand même !</li>
                <li><strong>Notoriété</strong> : visibilité sur des sites populaires</li>
                <li><strong>Diversité</strong> : un profil 100% dofollow est suspect</li>
                <li><strong>Signaux indirects</strong> : Google peut les prendre en compte</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>📊 Ratio naturel typique</h3>
            <div class="market-share mt-md">
                <div class="share-bar">
                    <span class="share-label">DoFollow</span>
                    <span class="share-fill share-fill-good" style="width: 70%;"></span>
                    <span class="share-value">60-80%</span>
                </div>
                <div class="share-bar">
                    <span class="share-label">NoFollow</span>
                    <span class="share-fill share-fill-ok" style="width: 30%;"></span>
                    <span class="share-value">20-40%</span>
                </div>
            </div>
            <p class="text-muted mt-md">Un profil naturel contient les deux types de liens.</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🏗️ Anatomie d'un bon backlink</h1>
    <h2>Les critères de qualité</h2>
    <p class="text-intro">Tous les backlinks ne se valent pas. Voici les caractéristiques d'un lien de haute qualité.</p>
    <ul>
        <li><strong>🎯 Pertinence thématique</strong> : le site source parle d'un sujet lié au vôtre</li>
        <li><strong>🏆 Autorité du domaine</strong> : plus le site source est autoritaire, plus le lien a de poids</li>
        <li><strong>📍 Emplacement sur la page</strong> : un lien dans le contenu éditorial > footer/sidebar</li>
        <li><strong>🔤 Ancre de lien</strong> : le texte cliquable donne du contexte à Google</li>
        <li><strong>👥 Trafic du site source</strong> : un lien depuis un site actif a plus de valeur</li>
        <li><strong>✅ DoFollow</strong> : pour transmettre le maximum de jus de lien</li>
        <li><strong>🆕 Unicité</strong> : un premier lien depuis un domaine a plus d'impact que le 10ème</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🔤 L'ancre de lien (Anchor Text)</h1>
    <h2>Le texte qui fait toute la différence</h2>
    <p class="text-intro">L'<strong>ancre de lien</strong> est le texte cliquable du lien. Elle donne à Google un indice sur le contenu de la page cible.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>🎯 Ancre exacte</h3>
            <p>"chaussures de running"</p>
            <p class="text-muted">Mot-clé exact visé. Puissant mais risqué si sur-optimisé.</p>
        </div>
        <div class="tool-card">
            <h3>🔄 Ancre partielle</h3>
            <p>"meilleures chaussures pour courir"</p>
            <p class="text-muted">Variation du mot-clé. Plus naturel.</p>
        </div>
        <div class="tool-card">
            <h3>🏷️ Ancre de marque</h3>
            <p>"Nike" ou "guide Nike Running"</p>
            <p class="text-muted">Nom de marque/site. Très sûr et naturel.</p>
        </div>
        <div class="tool-card">
            <h3>📄 Ancre générique</h3>
            <p>"cliquez ici", "en savoir plus", "ce site"</p>
            <p class="text-muted">Aucune valeur sémantique mais très naturel.</p>
        </div>
    </div>
    <p class="slide-warning">⚠️ <strong>Attention :</strong> un profil avec 80% d'ancres exactes est un signal de manipulation pour Google (Penguin). Variez vos ancres !</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Profil d'ancres idéal</h1>
    <h2>La diversité est la clé</h2>
    <p class="text-intro">Un profil de liens naturel présente une grande variété d'ancres. Voici une distribution recommandée :</p>
    <div class="market-share">
        <div class="share-bar">
            <span class="share-label">Marque / URL</span>
            <span class="share-fill share-fill-google" style="width: 40%;"></span>
            <span class="share-value">30-40%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Génériques</span>
            <span class="share-fill share-fill-bing" style="width: 25%;"></span>
            <span class="share-value">20-25%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Partielles</span>
            <span class="share-fill share-fill-good" style="width: 20%;"></span>
            <span class="share-value">15-20%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Exactes</span>
            <span class="share-fill share-fill-bad" style="width: 10%;"></span>
            <span class="share-value">5-10%</span>
        </div>
        <div class="share-bar">
            <span class="share-label">Longue traîne</span>
            <span class="share-fill share-fill-ok" style="width: 15%;"></span>
            <span class="share-value">10-15%</span>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Règle d'or :</strong> Si vous hésitez sur l'ancre à utiliser, choisissez le nom de marque ou une ancre naturelle. Mieux vaut être trop prudent que sur-optimisé.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Domaines référents vs Backlinks</h1>
    <h2>Une distinction cruciale</h2>
    <p class="text-intro">Ne confondez pas le <strong>nombre de backlinks</strong> avec le <strong>nombre de domaines référents</strong>. La diversité des sources compte plus que la quantité brute.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>🔗 Exemple A</h3>
            <p class="text-center" style="font-size: 2rem; margin: 20px 0 !important;">100 backlinks</p>
            <p class="text-center">provenant de <strong style="color: #ea4335;">5 domaines</strong></p>
            <p class="text-muted text-center mt-md">= 20 liens par site en moyenne<br>Profil concentré, potentiellement manipulé</p>
        </div>
        <div class="comparison-col" style="border-color: rgba(0, 212, 170, 0.4);">
            <h3>🔗 Exemple B</h3>
            <p class="text-center" style="font-size: 2rem; margin: 20px 0 !important;">50 backlinks</p>
            <p class="text-center">provenant de <strong style="color: #00d4aa;">45 domaines</strong></p>
            <p class="text-muted text-center mt-md">= 1-2 liens par site en moyenne<br>Profil diversifié, plus naturel</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Le profil B est meilleur !</strong> Un premier lien depuis un nouveau domaine a beaucoup plus d'impact que le 20ème lien depuis le même site.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🏗️ Le profil de liens idéal</h1>
    <h2>Caractéristiques d'un profil sain</h2>
    <ul>
        <li><strong>📈 Croissance progressive</strong> : acquisition régulière, pas de pics suspects</li>
        <li><strong>🎯 Pertinence thématique</strong> : majorité de liens depuis des sites de votre secteur</li>
        <li><strong>🌍 Diversité géographique</strong> : liens depuis plusieurs pays (si pertinent)</li>
        <li><strong>📊 Mix DoFollow/NoFollow</strong> : ratio naturel (60-80% / 20-40%)</li>
        <li><strong>🔤 Variété d'ancres</strong> : pas de sur-optimisation sur un mot-clé</li>
        <li><strong>🏠 Diversité de domaines</strong> : beaucoup de sources différentes</li>
        <li><strong>📍 Liens contextuels</strong> : dans le contenu éditorial, pas juste en footer</li>
    </ul>
    <p class="slide-quote">"Un bon profil de liens ressemble à ce qui se passerait naturellement si votre contenu était excellent et que les gens le découvraient organiquement."</p>
</div>`,

                `<div class="slide-seo">
    <h1>📉 Signaux d'un profil toxique</h1>
    <h2>Les red flags à éviter</h2>
    <p class="text-intro">Google détecte les manipulations. Voici les signaux qui peuvent déclencher une pénalité algorithmique (Penguin) ou manuelle.</p>
    <div class="intent-grid">
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">📊 Croissance anormale</h3>
            <p>1000 liens en une semaine sur un nouveau site</p>
            <p class="text-muted">→ Signal d'achat de liens massif</p>
        </div>
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🔤 Sur-optimisation</h3>
            <p>90% des ancres = même mot-clé exact</p>
            <p class="text-muted">→ Manipulation évidente</p>
        </div>
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🗑️ Sites de spam</h3>
            <p>Liens depuis des fermes de liens, PBN, sites piratés</p>
            <p class="text-muted">→ Association à des réseaux toxiques</p>
        </div>
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🌐 Liens hors-thématique</h3>
            <p>Site de cuisine vers site de prêts immobiliers</p>
            <p class="text-muted">→ Aucune logique éditoriale</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Stratégies d'acquisition</h1>
    <h2>Les méthodes White Hat (légitimes)</h2>
    <p class="text-intro">Voici les techniques approuvées par Google pour obtenir des backlinks naturellement.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Contenu de qualité (Link Baiting)</strong>
                <p>Créez du contenu tellement bon que les gens veulent naturellement le partager et le citer.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Guest Blogging (Articles invités)</strong>
                <p>Rédigez des articles pour des blogs/sites de votre secteur en échange d'un lien vers votre site.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Relations Presse (Digital PR)</strong>
                <p>Contactez les journalistes et médias pour qu'ils parlent de votre entreprise/produit.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Broken Link Building</strong>
                <p>Trouvez des liens cassés sur d'autres sites et proposez votre contenu en remplacement.</p>
            </div>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🎣 Le Link Baiting</h1>
    <h2>Créer du contenu "aimant à liens"</h2>
    <p class="text-intro">Le <strong>link baiting</strong> consiste à créer du contenu si utile, original ou divertissant que les autres sites voudront naturellement le citer.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>📊 Études et données originales</h3>
            <p>Publiez des statistiques exclusives, sondages, analyses de votre secteur.</p>
            <p class="text-accent">→ Les journalistes adorent les chiffres inédits</p>
        </div>
        <div class="tool-card">
            <h3>🛠️ Outils gratuits</h3>
            <p>Créez des calculateurs, générateurs, templates téléchargeables.</p>
            <p class="text-accent">→ Les gens citent les outils qu'ils utilisent</p>
        </div>
        <div class="tool-card">
            <h3>📚 Guides ultimes</h3>
            <p>Créez LA ressource de référence sur un sujet (5000+ mots, exhaustif).</p>
            <p class="text-accent">→ Devient une référence citée par tous</p>
        </div>
        <div class="tool-card">
            <h3>📈 Infographies</h3>
            <p>Visualisez des données complexes de manière attrayante.</p>
            <p class="text-accent">→ Facilement partagées et intégrées</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Conseil :</strong> Investissez 10x plus de temps dans un contenu exceptionnel plutôt que de créer 10 contenus moyens. C'est l'excellence qui attire les liens.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🏗️ La technique Skyscraper</h1>
    <h2>Surpasser la concurrence</h2>
    <p class="text-intro">La technique <strong>Skyscraper</strong> (gratte-ciel), popularisée par Brian Dean de Backlinko, consiste à créer un contenu meilleur que tout ce qui existe déjà.</p>
    <div class="skyscraper-steps">
        <div class="skyscraper-step">
            <span class="emoji">🔍</span>
            <h3>1. Trouver</h3>
            <p>Identifiez un contenu populaire qui a beaucoup de backlinks</p>
        </div>
        <div class="skyscraper-step">
            <span class="emoji">🏗️</span>
            <h3>2. Améliorer</h3>
            <p>Créez quelque chose de 10x meilleur (plus complet, plus récent, mieux designé)</p>
        </div>
        <div class="skyscraper-step">
            <span class="emoji">📧</span>
            <h3>3. Promouvoir</h3>
            <p>Contactez les sites qui linkent l'original pour leur proposer votre version</p>
        </div>
    </div>
    <p class="slide-quote">"Pourquoi linker vers un immeuble de 10 étages quand il y a un gratte-ciel de 50 étages juste à côté ?"<br><small>— Brian Dean, Backlinko</small></p>
</div>`,

                `<div class="slide-seo">
    <h1>✍️ Le Guest Blogging</h1>
    <h2>Écrire pour obtenir des liens</h2>
    <p class="text-intro">Le <strong>guest blogging</strong> (articles invités) consiste à rédiger des articles de qualité pour d'autres sites en échange d'un lien retour vers votre site.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>✅ Les bonnes pratiques</h3>
            <ul>
                <li>Choisir des sites de qualité (DA > 30)</li>
                <li>Écrire du contenu vraiment utile aux lecteurs</li>
                <li>Lien naturel dans le contexte de l'article</li>
                <li>Varier les sites et les ancres</li>
                <li>Cibler des sites de votre thématique</li>
            </ul>
        </div>
        <div class="comparison-col">
            <h3>❌ Ce qu'il faut éviter</h3>
            <ul>
                <li>Sites "fermes à articles" de mauvaise qualité</li>
                <li>Articles de 300 mots bâclés</li>
                <li>Ancres sur-optimisées à chaque fois</li>
                <li>100 articles invités en un mois</li>
                <li>Payer pour publier (sauf transparence)</li>
            </ul>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Comment trouver des opportunités :</strong> Recherchez "votre thématique" + "écrire pour nous" ou "article invité" ou "contribuer"</p>
</div>`,

                `<div class="slide-seo">
    <h1>🔧 Broken Link Building</h1>
    <h2>Transformer les erreurs 404 en opportunités</h2>
    <p class="text-intro">Le <strong>broken link building</strong> consiste à trouver des liens cassés (404) sur d'autres sites et proposer votre contenu comme remplacement.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Trouvez des pages de ressources</strong>
                <p>Recherchez des pages qui listent des ressources/liens dans votre secteur.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Identifiez les liens cassés</strong>
                <p>Utilisez Check My Links (extension Chrome) ou Ahrefs pour scanner les liens morts.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Créez ou trouvez un contenu de remplacement</strong>
                <p>Votre contenu doit être aussi bon ou meilleur que la ressource disparue.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Contactez le webmaster</strong>
                <p>"J'ai remarqué un lien cassé sur votre page. J'ai une ressource similaire qui pourrait remplacer."</p>
            </div>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Taux de réussite typique :</strong> 5-15% des contacts aboutissent à un lien. C'est un jeu de volume !</p>
</div>`,

                `<div class="slide-seo">
    <h1>📰 Digital PR (Relations Presse)</h1>
    <h2>Obtenir des liens depuis les médias</h2>
    <p class="text-intro">La <strong>Digital PR</strong> consiste à obtenir des mentions et des liens depuis des sites de médias et d'actualités grâce à des histoires intéressantes.</p>
    <ul>
        <li><strong>🎯 Communiqués de presse</strong> : annonces officielles (lancements, levées de fonds, partenariats)</li>
        <li><strong>📊 Études et sondages</strong> : publiez des données exclusives que les journalistes peuvent reprendre</li>
        <li><strong>💬 Expert sourcing</strong> : positionnez-vous comme expert pour être cité (HARO, Qwoted, SourceBottle)</li>
        <li><strong>📅 Newsjacking</strong> : réagissez à l'actualité avec votre angle d'expert</li>
    </ul>
    <p class="slide-note">📝 <strong>HARO (Help A Reporter Out)</strong> : service gratuit où des journalistes cherchent des experts à citer. Inscrivez-vous sur <a href="https://www.helpareporter.com" style="color: #00d4aa;">helpareporter.com</a></p>
</div>`,

                `<div class="slide-seo">
    <h1>🔄 Link Reclamation</h1>
    <h2>Récupérer des liens perdus</h2>
    <p class="text-intro">La <strong>récupération de liens</strong> consiste à identifier et récupérer des opportunités de liens que vous avez "perdues" ou jamais eues.</p>
    <div class="tools-grid">
        <div class="tool-card">
            <h3>🔍 Mentions non-liées</h3>
            <p>Quelqu'un cite votre marque mais sans lien ?</p>
            <p class="text-accent">→ Contactez-les pour demander un lien</p>
        </div>
        <div class="tool-card">
            <h3>🔗 Liens cassés vers vous</h3>
            <p>Des liens vers vos anciennes pages 404 ?</p>
            <p class="text-accent">→ Redirigez ou demandez la correction</p>
        </div>
        <div class="tool-card">
            <h3>📦 Liens vers des concurrents disparus</h3>
            <p>Un concurrent a fermé, ses pages sont 404 ?</p>
            <p class="text-accent">→ Proposez votre contenu en remplacement</p>
        </div>
        <div class="tool-card">
            <h3>🖼️ Utilisation de vos images</h3>
            <p>Quelqu'un utilise votre infographie sans crédit ?</p>
            <p class="text-accent">→ Demandez un lien en échange</p>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Outil :</strong> Configurez des alertes Google pour votre marque ("votre marque" -site:votresite.com) pour détecter les mentions.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤝 Partenariats et échanges</h1>
    <h2>Stratégies relationnelles</h2>
    <p class="text-intro">Les relations professionnelles peuvent générer des opportunités de liens naturels.</p>
    <ul>
        <li><strong>🏢 Fournisseurs et clients</strong> : page "Nos clients" ou "Nos partenaires" avec liens</li>
        <li><strong>🎓 Associations et fédérations</strong> : adhérez à des organisations de votre secteur</li>
        <li><strong>🎤 Événements et conférences</strong> : intervenez comme speaker pour obtenir un lien depuis le site de l'événement</li>
        <li><strong>💡 Interviews et podcasts</strong> : participez à des podcasts/interviews = lien dans les notes</li>
        <li><strong>📚 Témoignages</strong> : laissez des témoignages clients en échange d'un lien</li>
    </ul>
    <p class="slide-warning">⚠️ <strong>Attention :</strong> L'échange de liens réciproques massif (A→B et B→A) est détectable par Google et peu efficace. Privilégiez les relations naturelles.</p>
</div>`,

                `<div class="slide-seo">
    <h1>⛔ Techniques Black Hat</h1>
    <h2>Ce qu'il faut absolument éviter</h2>
    <p class="text-intro">Ces techniques violent les guidelines de Google et peuvent entraîner des pénalités sévères (chute de positions ou désindexation).</p>
    <div class="intent-grid">
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">💰 Achat de liens</h3>
            <p>Payer pour obtenir des liens DoFollow</p>
            <p class="text-muted">→ Pénalité manuelle potentielle</p>
        </div>
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🕸️ PBN (Private Blog Network)</h3>
            <p>Réseau de sites créés uniquement pour faire des liens</p>
            <p class="text-muted">→ Désindexation du réseau + pénalité</p>
        </div>
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🤖 Liens automatisés</h3>
            <p>Spam de commentaires, profils forums, signatures</p>
            <p class="text-muted">→ Liens ignorés ou pénalisés</p>
        </div>
        <div class="intent-card" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🔁 Schémas de liens</h3>
            <p>Échanges massifs, roues de liens, triangulations</p>
            <p class="text-muted">→ Patterns détectables par l'algo</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔨 Les pénalités Google</h1>
    <h2>Quand le netlinking tourne mal</h2>
    <p class="text-intro">Google peut sanctionner les sites qui manipulent leur profil de liens. Deux types de pénalités existent :</p>
    <div class="comparison-table">
        <div class="comparison-col" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">🤖 Pénalité algorithmique</h3>
            <ul>
                <li><strong>Penguin</strong> : détecte les liens artificiels</li>
                <li>Appliquée automatiquement par l'algorithme</li>
                <li>Chute progressive des positions</li>
                <li>Récupération lente après nettoyage</li>
            </ul>
        </div>
        <div class="comparison-col" style="border-color: rgba(234, 67, 53, 0.4);">
            <h3 style="color: #ea4335;">👤 Pénalité manuelle</h3>
            <ul>
                <li>Un employé de Google examine votre site</li>
                <li>Notification dans la Search Console</li>
                <li>Chute brutale et immédiate</li>
                <li>Nécessite une demande de réexamen</li>
            </ul>
        </div>
    </div>
    <p class="slide-warning">⚠️ <strong>Vérifiez régulièrement :</strong> Search Console > Sécurité et actions manuelles > Actions manuelles</p>
</div>`,

                `<div class="slide-seo">
    <h1>🧹 Le fichier Disavow</h1>
    <h2>Désavouer les mauvais liens</h2>
    <p class="text-intro">Le <strong>fichier de désaveu</strong> (Disavow) permet de dire à Google d'ignorer certains liens toxiques pointant vers votre site.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Identifiez les liens toxiques</strong>
                <p>Utilisez Ahrefs, SEMrush ou la Search Console pour repérer les liens suspects.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Essayez de les supprimer d'abord</strong>
                <p>Contactez les webmasters pour demander le retrait des liens.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Créez le fichier Disavow</strong>
                <p>Listez les domaines/URLs à désavouer dans un fichier .txt</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Soumettez à Google</strong>
                <p>Via l'outil Disavow Links dans la Search Console.</p>
            </div>
        </div>
    </div>
    <p class="slide-warning">⚠️ <strong>Attention :</strong> Le Disavow est un outil puissant. N'y mettez que des liens vraiment toxiques, pas les liens "moyens".</p>
</div>`,

                `<div class="slide-seo">
    <h1>🛠️ Outils d'analyse des backlinks</h1>
    <h2>Les indispensables pour votre stratégie</h2>
    <div class="tools-grid">
        <div class="tool-card tool-premium">
            <h3>🟠 Ahrefs</h3>
            <p>La référence pour l'analyse de backlinks. Base de données massive, très précis.</p>
            <p class="text-accent">À partir de ~99$/mois</p>
        </div>
        <div class="tool-card tool-premium">
            <h3>🔷 SEMrush</h3>
            <p>Suite complète avec analyse de backlinks, audit de toxicité, comparaison concurrentielle.</p>
            <p class="text-accent">À partir de ~120€/mois</p>
        </div>
        <div class="tool-card tool-premium">
            <h3>🟣 Moz Link Explorer</h3>
            <p>Analyse DA/PA, spam score, découverte d'opportunités de liens.</p>
            <p class="text-accent">À partir de ~99$/mois</p>
        </div>
        <div class="tool-card">
            <h3>👑 Majestic</h3>
            <p>Trust Flow / Citation Flow, analyse historique des liens, très technique.</p>
            <p class="text-muted">Version gratuite limitée disponible</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔍 Google Search Console</h1>
    <h2>L'outil gratuit et officiel</h2>
    <p class="text-intro">La <strong>Search Console</strong> offre un rapport de liens gratuit et officiel, directement depuis les données de Google.</p>
    <ul>
        <li><strong>Liens externes</strong> : les sites qui font le plus de liens vers vous</li>
        <li><strong>Pages les plus liées</strong> : vos pages qui reçoivent le plus de backlinks</li>
        <li><strong>Textes d'ancrage</strong> : les ancres les plus utilisées pour vous linker</li>
        <li><strong>Sites avec les liens les plus importants</strong> : les domaines référents principaux</li>
    </ul>
    <p class="slide-note">📝 <strong>Accès :</strong> Search Console > Liens (dans le menu de gauche). Export possible au format CSV.</p>
    <p class="slide-tip">💡 <strong>Limitation :</strong> Données moins complètes que les outils payants, mais 100% fiables car venant de Google directement.</p>
</div>`,

                `<div class="slide-seo">
    <h1>📊 Métriques à surveiller</h1>
    <h2>Votre tableau de bord netlinking</h2>
    <div class="metrics-list">
        <p><span class="metric-label">Domaines référents</span> Nombre de sites uniques qui vous font des liens — la métrique la plus importante</p>
        <p><span class="metric-label">Nouveaux / Perdus</span> Balance des liens gagnés vs perdus chaque mois</p>
        <p><span class="metric-label">DR/DA moyen</span> Autorité moyenne des sites qui vous linkent</p>
        <p><span class="metric-label">Ratio DoFollow</span> Pourcentage de liens DoFollow vs NoFollow</p>
        <p><span class="metric-label">Distribution d'ancres</span> Répartition entre ancres de marque, exactes, génériques</p>
        <p><span class="metric-label">Vélocité des liens</span> Rythme d'acquisition de nouveaux liens dans le temps</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🆚 Analyse concurrentielle</h1>
    <h2>Espionner les backlinks des concurrents</h2>
    <p class="text-intro">Analysez les backlinks de vos concurrents pour découvrir des opportunités et comprendre leur stratégie.</p>
    <div class="process-steps">
        <div class="process-step">
            <span class="step-number">1</span>
            <div class="step-content">
                <strong>Identifiez vos concurrents SEO</strong>
                <p>Pas forcément vos concurrents business, mais ceux qui rankent sur vos mots-clés.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">2</span>
            <div class="step-content">
                <strong>Exportez leurs backlinks</strong>
                <p>Utilisez Ahrefs/SEMrush pour télécharger leur profil de liens complet.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">3</span>
            <div class="step-content">
                <strong>Analysez les sources communes</strong>
                <p>Quels sites linkent plusieurs concurrents mais pas vous ? = opportunités prioritaires.</p>
            </div>
        </div>
        <div class="process-step">
            <span class="step-number">4</span>
            <div class="step-content">
                <strong>Étudiez leur contenu le plus linké</strong>
                <p>Quel type de contenu attire le plus de liens ? Inspirez-vous en pour votre stratégie.</p>
            </div>
        </div>
    </div>
    <p class="slide-tip">💡 <strong>Outil gratuit :</strong> Ahrefs offre un checker de backlinks gratuit limité sur <a href="https://ahrefs.com/backlink-checker" style="color: #00d4aa;">ahrefs.com/backlink-checker</a></p>
</div>`,

                `<div class="slide-seo">
    <h1>📅 Planifier sa stratégie</h1>
    <h2>Un plan d'action réaliste</h2>
    <p class="text-intro">Le netlinking est un marathon, pas un sprint. Voici un plan de développement progressif.</p>
    <div class="comparison-table">
        <div class="comparison-col">
            <h3>🌱 Phase 1 : Fondations</h3>
            <ul>
                <li>Auditer votre profil actuel</li>
                <li>Nettoyer les liens toxiques</li>
                <li>Créer 2-3 contenus "link bait"</li>
                <li>Récupérer les mentions non-liées</li>
            </ul>
            <p class="text-muted mt-md">Objectif : 5-10 liens/mois</p>
        </div>
        <div class="comparison-col">
            <h3>🌳 Phase 2 : Croissance</h3>
            <ul>
                <li>Lancer une campagne guest blogging</li>
                <li>Mettre en place la Digital PR</li>
                <li>Développer des partenariats</li>
                <li>Publier des études originales</li>
            </ul>
            <p class="text-muted mt-md">Objectif : 15-30 liens/mois</p>
        </div>
    </div>
    <p class="slide-warning">⚠️ <strong>Patience :</strong> Les effets du netlinking prennent 3-6 mois pour être visibles. Ne vous découragez pas si les résultats ne sont pas immédiats.</p>
</div>`,

                `<div class="slide-seo">
    <h1>💡 Bonnes pratiques résumées</h1>
    <h2>Les règles d'or du netlinking</h2>
    <ul>
        <li>✅ <strong>Qualité > Quantité</strong> : 10 liens de sites autoritaires > 100 liens de spam</li>
        <li>✅ <strong>Pertinence thématique</strong> : privilégiez les liens de sites de votre secteur</li>
        <li>✅ <strong>Diversifiez vos ancres</strong> : évitez la sur-optimisation sur un mot-clé</li>
        <li>✅ <strong>Croissance naturelle</strong> : acquisition régulière et progressive</li>
        <li>✅ <strong>Contenu exceptionnel</strong> : la meilleure stratégie est de mériter les liens</li>
        <li>✅ <strong>Surveillez votre profil</strong> : audit régulier pour détecter les liens toxiques</li>
        <li>✅ <strong>Pensez long terme</strong> : construisez des relations, pas juste des liens</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🛡️ Checklist Netlinking</h1>
    <h2>Vérifiez votre stratégie</h2>
    <ul>
        <li>☐ <strong>Audit initial</strong> : analysé votre profil de backlinks actuel ?</li>
        <li>☐ <strong>Liens toxiques</strong> : identifié et désavoué les liens nuisibles ?</li>
        <li>☐ <strong>Concurrents</strong> : étudié les backlinks de vos 3-5 principaux concurrents ?</li>
        <li>☐ <strong>Contenu linkable</strong> : créé au moins un contenu "aimant à liens" ?</li>
        <li>☐ <strong>Mentions</strong> : configuré des alertes pour votre marque ?</li>
        <li>☐ <strong>Outreach</strong> : mis en place un processus de prospection ?</li>
        <li>☐ <strong>Suivi</strong> : défini des KPIs et un tableau de bord ?</li>
        <li>☐ <strong>Diversification</strong> : utilisé plusieurs stratégies d'acquisition ?</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 1 (Jour 3)</h1>
    <h2>Ce qu'il faut absolument retenir</h2>
    <ul>
        <li>🔗 <strong>Backlinks</strong> : liens entrants = votes de confiance entre sites</li>
        <li>📊 <strong>Autorité</strong> : DA/DR mesurent la "puissance" SEO d'un domaine</li>
        <li>⚖️ <strong>DoFollow vs NoFollow</strong> : seuls les DoFollow transmettent le "jus de lien"</li>
        <li>🔤 <strong>Ancres</strong> : variez les textes de liens, évitez la sur-optimisation</li>
        <li>🏗️ <strong>Profil sain</strong> : diversité de sources, croissance naturelle, pertinence</li>
        <li>🎯 <strong>Stratégies White Hat</strong> : contenu de qualité, guest blogging, Digital PR</li>
        <li>⛔ <strong>Black Hat à éviter</strong> : achat de liens, PBN, spam automatisé</li>
        <li>🛠️ <strong>Outils</strong> : Ahrefs, SEMrush, Search Console pour analyser et suivre</li>
    </ul>
</div>`,

                `<div class="slide-seo">
    <h1>🧠 Exercice pratique</h1>
    <h2>Auditez votre profil de backlinks</h2>
    <ul>
        <li><strong>1.</strong> Allez dans la Search Console > Liens : combien de domaines référents avez-vous ?</li>
        <li><strong>2.</strong> Utilisez le <a href="https://ahrefs.com/backlink-checker" style="color: #00d4aa;">Backlink Checker d'Ahrefs</a> (gratuit) sur votre site</li>
        <li><strong>3.</strong> Analysez les ancres : sont-elles diversifiées ou sur-optimisées ?</li>
        <li><strong>4.</strong> Comparez avec un concurrent : quel écart en domaines référents ?</li>
        <li><strong>5.</strong> Identifiez 3 sites de votre secteur où vous pourriez obtenir un lien</li>
        <li><strong>6.</strong> Recherchez votre marque sur Google : des mentions sans lien ?</li>
    </ul>
    <p class="slide-tip">💡 <strong>Prochain chapitre :</strong> Le SEO local et les stratégies de référencement géolocalisé.</p>
</div>`
            ]
        }
    ]
};
