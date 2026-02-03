---
name: create-skill
description: Crée un nouveau Skill Claude Code optimisé avec frontmatter, bonnes pratiques et structure professionnelle
disable-model-invocation: true
argument-hint: [nom-du-skill] [description-courte]
allowed-tools: Read, Write, Bash, Glob
---

# Création de Skill Optimisé

Tu es un expert en création de Skills pour Claude Code. Ta mission est de créer un Skill professionnel et optimisé.

## Informations fournies

- **Nom du Skill** : $0
- **Description courte** : $1
- **Détails supplémentaires** : $ARGUMENTS

## Processus de création

### Étape 1 : Analyse des besoins

Avant de créer le Skill, pose-toi ces questions :

1. **Type de Skill** :
   - Tâche automatisée (déploiement, génération, etc.)
   - Connaissances/référence (conventions, patterns, etc.)
   - Workflow interactif (review, debug, etc.)

2. **Mode d'invocation** :
   - Manuel uniquement → `disable-model-invocation: true`
   - Auto par Claude aussi → `disable-model-invocation: false`
   - Jamais par l'utilisateur → `user-invocable: false`

3. **Isolation nécessaire ?** :
   - Recherche approfondie → `context: fork` + `agent: Explore`
   - Planification → `context: fork` + `agent: Plan`
   - Tâche longue → `context: fork` + `agent: general-purpose`

### Étape 2 : Structure du Skill

Crée le Skill dans le bon répertoire selon la portée souhaitée :

| Portée | Chemin |
|--------|--------|
| Personnel (tous projets) | `~/.claude/skills/<nom>/SKILL.md` |
| Projet uniquement | `.claude/skills/<nom>/SKILL.md` |

### Étape 3 : Création avec le template optimisé

Utilise ce template comme base :

```markdown
---
name: nom-en-minuscules-avec-tirets
description: Description claire et spécifique avec mots-clés naturels (max 100 chars)
disable-model-invocation: true|false
argument-hint: [arg1] [arg2-optionnel]
allowed-tools: Liste, Des, Tools, Autorisés
# Options avancées (si nécessaire) :
# context: fork
# agent: Explore|Plan|general-purpose
# model: claude-opus-4-5|claude-sonnet-4|haiku
---

# Titre du Skill

## Contexte
[Expliquer quand et pourquoi utiliser ce Skill]

## Arguments
- `$0` : [Description du premier argument]
- `$1` : [Description du second argument]
- `$ARGUMENTS` : [Tous les arguments]

## Instructions

### Phase 1 : [Nom de la phase]
[Instructions détaillées]

### Phase 2 : [Nom de la phase]
[Instructions détaillées]

## Règles à respecter
- [Règle 1]
- [Règle 2]
- [Règle 3]

## Exemples
[Exemples d'utilisation si pertinent]
```

## Bonnes pratiques à appliquer

### 1. Description optimisée
- **Sois spécifique** : "Génère des tests unitaires Jest pour composants React" > "Aide avec les tests"
- **Inclus des mots-clés** : Les termes que l'utilisateur utiliserait naturellement
- **Max 100 caractères** pour rester lisible

### 2. Arguments bien définis
- Utilise `argument-hint` pour clarifier les arguments attendus
- Documente chaque argument (`$0`, `$1`, etc.) dans le contenu
- `$ARGUMENTS` capture tout, `$0` le premier mot, `$1` le second, etc.

### 3. Sécurité et permissions
- `allowed-tools` : Limite aux outils strictement nécessaires
- `disable-model-invocation: true` pour les actions avec effets secondaires (déploiement, envoi, etc.)

### 4. Injection de contexte dynamique
Pour injecter des données dynamiques :
```markdown
Branche courante : !`git branch --show-current`
Fichiers modifiés : !`git status --short`
```
Les commandes entre `` !` `` `` s'exécutent AVANT que Claude ne reçoive le contenu.

### 5. Structure pour les gros Skills
Si le Skill dépasse ~200 lignes, sépare en fichiers :
```
mon-skill/
├── SKILL.md           # Instructions principales (< 500 lignes)
├── reference.md       # Documentation détaillée
├── examples.md        # Exemples d'utilisation
└── templates/         # Templates réutilisables
    └── template.md
```

Référence les fichiers ainsi : `[Voir reference.md](reference.md)`

## Checklist finale

Avant de valider le Skill, vérifie :

- [ ] Nom en minuscules avec tirets uniquement
- [ ] Description claire et spécifique (< 100 chars)
- [ ] `argument-hint` si des arguments sont attendus
- [ ] `disable-model-invocation: true` si action sensible
- [ ] `allowed-tools` limité au strict nécessaire
- [ ] Arguments documentés dans le contenu
- [ ] Instructions claires et structurées
- [ ] Pas de contenu redondant ou superflu

## Création

Maintenant, crée le Skill demandé en appliquant toutes ces bonnes pratiques.

1. Demande des clarifications si les informations sont insuffisantes
2. Propose une structure adaptée au besoin
3. Génère le fichier SKILL.md complet
4. Crée les fichiers de support si nécessaire
