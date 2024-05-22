# Description de chaque fichier

## field-xxx.svelte

Ces fichiers représentent un composant de formulaire, dont voici la liste :
- **chechbox** : case à cocher
- **input** : champ de texte
- **radiogroup** : groupe de boutons radio
- **select** : champ de liste de choix
- **switch** : similaire à la case à cocher
- **textarea** : zone de texte

Chaque composant utilise des composants Shadcn UI.

## field.svelte

Ce composant récupère tous les composants de formulaire. A partir du ``type``, on instancie le composant approprié.

Le fichier contient :
- le type des props de chaque composant auquel on lie le type ;
- la prop ``type`` qui permet de déterminer le composant approprié.
- les props ``checked``, ``value`` et ``selected`` qui permettent d'envoyer les valeurs aux composants appropriés.
- la composant ``Field`` qui contient tous les composants de formulaire.

## index.ts

Pour commencer, l'index contient la liste des types de field disponibles.
De plus, il contient le typde des props de chaque composant (qui se trouve ensuite importé dans ces composants).