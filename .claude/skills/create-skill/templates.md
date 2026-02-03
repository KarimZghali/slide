# Templates de Skills

## Template 1 : Skill de génération de code

```yaml
---
name: gen-[type]
description: Génère [type de code] avec [caractéristiques]
disable-model-invocation: false
argument-hint: [fichier-source] [fichier-destination]
allowed-tools: Read, Write, Glob, Grep
---

# Génération de [Type]

## Objectif
Générer $0 à partir de $1.

## Instructions
1. Lis le fichier source : $0
2. Analyse la structure existante
3. Génère le code en respectant les conventions
4. Écris dans le fichier destination : $1

## Règles
- Respecte le style de code existant
- Ajoute les imports nécessaires
- Documente les fonctions complexes
```

## Template 2 : Skill de recherche approfondie

```yaml
---
name: research-[domaine]
description: Recherche approfondie sur [domaine] dans la codebase
disable-model-invocation: false
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob
---

# Recherche : $ARGUMENTS

## Mission
Effectuer une recherche exhaustive sur : $ARGUMENTS

## Méthodologie
1. Identifier les fichiers pertinents avec Glob
2. Rechercher les patterns avec Grep
3. Lire et analyser le code trouvé
4. Synthétiser les résultats

## Format de réponse
- Liste des fichiers concernés avec chemins complets
- Explication de chaque élément trouvé
- Diagramme de relations si pertinent
```

## Template 3 : Skill d'action automatisée

```yaml
---
name: auto-[action]
description: Exécute automatiquement [action] avec validation
disable-model-invocation: true
argument-hint: [paramètre-principal]
allowed-tools: Bash, Read, Write
---

# Action automatisée : [Nom]

## Contexte actuel
- Branche : !`git branch --show-current`
- Status : !`git status --short`

## Paramètres
- Action sur : $0

## Séquence d'exécution
1. Vérification des prérequis
2. Exécution de l'action
3. Validation du résultat
4. Rapport de fin

## Sécurité
- Demande confirmation avant actions destructives
- Créer un backup si nécessaire
```

## Template 4 : Skill de review/analyse

```yaml
---
name: review-[type]
description: Analyse et review de [type] avec recommandations
disable-model-invocation: false
context: fork
agent: Plan
allowed-tools: Read, Grep, Glob
---

# Review de $ARGUMENTS

## Critères d'analyse
1. [Critère 1]
2. [Critère 2]
3. [Critère 3]

## Format du rapport
### Points positifs
- ...

### Points à améliorer
- ...

### Recommandations
- ...
```

## Template 5 : Skill de documentation

```yaml
---
name: doc-[type]
description: Génère documentation [type] pour [cible]
disable-model-invocation: false
argument-hint: [fichier-ou-dossier]
allowed-tools: Read, Write, Glob
---

# Documentation de $0

## Analyse du code
Lis et analyse : $0

## Structure de documentation
1. **Aperçu** : Description générale
2. **API/Interface** : Fonctions et paramètres
3. **Exemples** : Cas d'utilisation
4. **Notes** : Points d'attention

## Règles
- Style clair et concis
- Exemples de code fonctionnels
- Liens vers ressources connexes
```

## Template 6 : Skill avec injection de contexte

```yaml
---
name: context-aware-[action]
description: [Action] avec contexte Git et projet
disable-model-invocation: false
---

# Contexte du projet

## Git
- Branche : !`git branch --show-current`
- Dernier commit : !`git log -1 --oneline`
- Fichiers modifiés : !`git diff --name-only`

## Environnement
- Répertoire : !`pwd`

## Action demandée
$ARGUMENTS

## Instructions
Utilise le contexte ci-dessus pour effectuer l'action demandée.
```

## Frontmatter - Référence rapide

| Paramètre | Valeurs | Usage |
|-----------|---------|-------|
| `name` | string | Identifiant unique (minuscules, tirets) |
| `description` | string | Pour l'autocomplétion et invocation auto |
| `disable-model-invocation` | true/false | true = manuel seulement |
| `user-invocable` | true/false | false = Claude seulement |
| `argument-hint` | [args] | Hint d'autocomplétion |
| `allowed-tools` | Tool1, Tool2 | Restriction des outils |
| `context` | fork | Isolation dans subagent |
| `agent` | Explore/Plan/general-purpose | Type de subagent |
| `model` | claude-opus-4-5/sonnet/haiku | Modèle à utiliser |

## Variables disponibles

| Variable | Description |
|----------|-------------|
| `$ARGUMENTS` | Tous les arguments passés |
| `$0`, `$1`, `$2`... | Arguments par position |
| `${CLAUDE_SESSION_ID}` | ID de session unique |
| `` !`commande` `` | Injection de résultat shell |
