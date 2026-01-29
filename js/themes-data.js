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
        }
    ]
};
