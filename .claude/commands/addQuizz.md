Objectif : Créer un nouveau Quizz à partir d'un chapitre de cours 

Instruction à respecter :

- Génère des questions à choix multiple
- 1 seule bonne réponse possible sur 4 propositions
- varie la position de la bonne réponse afin qu'elle ne soit pas positionner toujours au même index
- Les questions doivent provenir exclusivement du fichier slide $1.  
- Essaye de tout balayer, pour que le quizz reprenne au maximum les choses mentionnées dans le fichier slide.
- intègre toutes les questions dans le fichier $2
- la structure des questions doit respecter celle-ci :
  
    {
        "questions": [
                        {
                            "id": 1,
                            "question": "Que signifie l'acronyme SEO ?",
                            "reponses": [
                                "Search Engine Optimization",
                                "Social Engine Optimization",
                                "Search Enhanced Operation",
                                "Site Engine Organization"
                            ],
                        "bonne_reponse": 0
                        },
                        {
                            "id": 2,
                            "question": "Combien de recherches sont effectuées chaque jour sur Google ?",
                            "reponses": [
                                "1 milliard",
                                "5 milliards",
                                "8,5 milliards",
                                "15 milliards"
                            ],
                            "bonne_reponse": 2
                        },
        ]

