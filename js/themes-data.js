// Données des thèmes et slides (embarquées pour fonctionner sans serveur)
const THEMES_DATA = {
    "themes": [
        {
            "id": "introduction",
            "title": "Introduction",
            "description": "Présentation générale du cours",
            "slides": [
                `<h1>Bienvenue dans ce cours</h1>
<p>Ceci est la première slide du thème Introduction.</p>
<ul>
    <li>Point important n°1</li>
    <li>Point important n°2</li>
    <li>Point important n°3</li>
</ul>`,
                `<h1>Objectifs du cours</h1>
<p>À la fin de ce cours, vous serez capable de :</p>
<ol>
    <li>Comprendre les concepts fondamentaux</li>
    <li>Appliquer les méthodes présentées</li>
    <li>Analyser des situations concrètes</li>
</ol>`,
                `<h1>Plan du cours</h1>
<h2>Structure générale</h2>
<ul>
    <li><strong>Introduction</strong> – Ce que vous regardez maintenant</li>
    <li><strong>Chapitre 1</strong> – Les bases</li>
    <li><strong>Chapitre 2</strong> – Approfondissement</li>
    <li><strong>Conclusion</strong> – Synthèse et perspectives</li>
</ul>`
            ]
        },
        {
            "id": "chapitre1",
            "title": "Chapitre 1",
            "description": "Premier chapitre du cours",
            "slides": [
                `<h1>Chapitre 1 : Les fondamentaux</h1>
<p>Bienvenue dans le premier chapitre.</p>
<p>Nous allons aborder les concepts de base nécessaires pour la suite du cours.</p>`,
                `<h1>Concepts clés</h1>
<ul>
    <li><strong>Concept A</strong> – Description du premier concept</li>
    <li><strong>Concept B</strong> – Description du deuxième concept</li>
    <li><strong>Concept C</strong> – Description du troisième concept</li>
</ul>
<p>Ces concepts seront approfondis dans les chapitres suivants.</p>`
            ]
        },
        {
            "id": "seo",
            "title": "SEO",
            "description": "Formation complète au référencement naturel",
            "slides": [
                `<div class="slide-seo">
    <h1>🚀 Formation SEO</h1>
    <h2>Jour 1 – Fondations & Architecture Technique</h2>
    <p class="slide-subtitle">Comprendre comment Google voit le monde</p>
</div>`,

                `<div class="slide-seo">
    <h1>📚 Chapitre 1</h1>
    <h2>Comprendre l'écosystème des moteurs de recherche</h2>
    <div class="slide-agenda">
        <p>🔍 Le triptyque : Crawl, Indexation, Classement</p>
        <p>📈 L'évolution des algorithmes</p>
        <p>🎯 L'intention de recherche</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔍 Le triptyque fondamental</h1>
    <h2>Comment Google découvre et classe votre site</h2>
    <div class="slide-diagram">
        <span class="step">1. CRAWL</span>
        <span class="arrow">→</span>
        <span class="step">2. INDEXATION</span>
        <span class="arrow">→</span>
        <span class="step">3. CLASSEMENT</span>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🕷️ Étape 1 : Le Crawl</h1>
    <h2>L'exploration du web par les robots</h2>
    <ul>
        <li><strong>Googlebot</strong> parcourt le web de lien en lien</li>
        <li>Il découvre les nouvelles pages et les mises à jour</li>
        <li>Crawl budget : nombre de pages explorées par session</li>
    </ul>
    <p class="slide-tip">💡 Un site rapide et bien structuré = plus de pages crawlées</p>
</div>`,

                `<div class="slide-seo">
    <h1>📦 Étape 2 : L'Indexation</h1>
    <h2>Le stockage dans la base de données Google</h2>
    <ul>
        <li>Analyse du contenu de la page</li>
        <li>Extraction des mots-clés et du contexte sémantique</li>
        <li>Stockage dans l'index (bibliothèque géante)</li>
    </ul>
    <p class="slide-tip">💡 Page indexée ≠ page bien positionnée</p>
</div>`,

                `<div class="slide-seo">
    <h1>🏆 Étape 3 : Le Classement</h1>
    <h2>L'algorithme décide de votre position</h2>
    <ul>
        <li>Analyse de <strong>200+ facteurs</strong> de ranking</li>
        <li>Comparaison avec les pages concurrentes</li>
        <li>Attribution d'une position dans les SERP</li>
    </ul>
    <p class="slide-tip">💡 L'objectif : être dans le top 10 (1ère page)</p>
</div>`,

                `<div class="slide-seo">
    <h1>📈 L'évolution des algorithmes</h1>
    <h2>De 1998 à aujourd'hui</h2>
    <div class="timeline">
        <p><strong>1998</strong> – Naissance de Google et du PageRank</p>
        <p><strong>2011</strong> – Panda (qualité du contenu)</p>
        <p><strong>2012</strong> – Penguin (qualité des liens)</p>
        <p><strong>2015</strong> – RankBrain (machine learning)</p>
        <p><strong>2019</strong> – BERT (compréhension du langage)</p>
        <p><strong>2023+</strong> – L'ère de l'IA générative</p>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>🔗 Le PageRank originel</h1>
    <h2>L'idée révolutionnaire de Larry Page</h2>
    <ul>
        <li>Un lien = un vote de confiance</li>
        <li>Plus une page reçoit de liens, plus elle a d'autorité</li>
        <li>La qualité du site source compte aussi</li>
    </ul>
    <p class="slide-quote">"Le web est un graphe de citations"</p>
</div>`,

                `<div class="slide-seo">
    <h1>🤖 L'ère de l'Intelligence Artificielle</h1>
    <h2>Google comprend désormais le sens, pas juste les mots</h2>
    <ul>
        <li><strong>RankBrain</strong> : interprète les requêtes ambiguës</li>
        <li><strong>BERT</strong> : comprend le contexte des phrases</li>
        <li><strong>MUM</strong> : analyse multimodale (texte, image, vidéo)</li>
    </ul>
    <p class="slide-tip">💡 Écrire pour les humains est devenu la meilleure stratégie SEO</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 L'intention de recherche</h1>
    <h2>La clé de voûte du SEO moderne</h2>
    <p class="slide-highlight">Google ne cherche plus des mots-clés.<br>Il cherche à <strong>satisfaire une intention</strong>.</p>
</div>`,

                `<div class="slide-seo">
    <h1>🎯 Les 4 types d'intention</h1>
    <div class="intent-grid">
        <div class="intent-card">
            <h3>🔍 Informationnelle</h3>
            <p>"Comment faire..."</p>
            <p>"Qu'est-ce que..."</p>
        </div>
        <div class="intent-card">
            <h3>🧭 Navigationnelle</h3>
            <p>"Facebook login"</p>
            <p>"YouTube"</p>
        </div>
        <div class="intent-card">
            <h3>🛒 Transactionnelle</h3>
            <p>"Acheter iPhone 15"</p>
            <p>"Prix Nike Air Max"</p>
        </div>
        <div class="intent-card">
            <h3>🔎 Commerciale</h3>
            <p>"Meilleur aspirateur 2026"</p>
            <p>"Avis Samsung vs Apple"</p>
        </div>
    </div>
</div>`,

                `<div class="slide-seo">
    <h1>💡 Pourquoi c'est crucial ?</h1>
    <h2>Aligner contenu et intention</h2>
    <ul>
        <li>Requête info → Article de blog, guide, tutoriel</li>
        <li>Requête transactionnelle → Page produit, landing page</li>
        <li>Requête commerciale → Comparatif, test, avis</li>
    </ul>
    <p class="slide-warning">⚠️ Mauvaise intention = mauvais classement, même avec un bon contenu</p>
</div>`,

                `<div class="slide-seo">
    <h1>✅ Récap' Chapitre 1</h1>
    <h2>Ce qu'il faut retenir</h2>
    <ul>
        <li>🕷️ <strong>Crawl</strong> : Google explore votre site</li>
        <li>📦 <strong>Indexation</strong> : vos pages entrent dans l'index</li>
        <li>🏆 <strong>Classement</strong> : l'algo décide de votre position</li>
        <li>🤖 <strong>L'IA</strong> a révolutionné la compréhension des requêtes</li>
        <li>🎯 <strong>L'intention</strong> prime sur les mots-clés</li>
    </ul>
</div>`
            ]
        }
    ]
};
