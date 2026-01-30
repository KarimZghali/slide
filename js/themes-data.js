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
</div>`
            ]
        }
    ]
};
