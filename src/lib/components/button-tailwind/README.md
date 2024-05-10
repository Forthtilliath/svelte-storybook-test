# Button Tailwind

Ce dossier utilise Tailwind CSS et est composé de 4 fichiers :
- ``button-tw.svelte`` : le composant Button
- ``button-tw.stories.ts`` : le fichier Storybook
- ``button-tw.stories.svelte`` : le composant utilisant ``@storybook/addon-svelte-csf``
- ``index.svelte`` : le fichier index pour exporter plus facilement

## Le composant Button

Le composant Button est le composant principal de ce dossier. C'est le composant qui est exporté par le fichier index. Il utilise tailwind. Pour faciliter l'utilisation des classes, j'utilise ``tailwind-variants``. J'ai repris le bouton de shadcn pour gagner du temps 😁. Lien vers shadcn : [https://shadcn-svelte.com/docs/components/button](https://shadcn-svelte.com/docs/components/button).

Ce composant permet de choisir un variant, une taille et un content. Il est aussi possible d'ajouter des attributs button comme ``disabled`` ou ``class``.

Note la petite trick pour exporter la prop ``class`` via un p'tit détour vers className.

## Le fichier Storybook (.ts)

Pas grand chose à dire sur celui. Juste les utilisations pour ajouter un composant en content au lieu d'un texte avec ``WithIcon``, ``Icon`` ou encore ``Loading``. Il ne me semble pas qu'on puisse utiliser un composant en enfant sans passer par un composant externe.

## Le composant utilisant @storybook/addon-svelte-csf (.svelte)

Si on compare avec le fichier précédent, l'utilisation est énormément simplfiée ! Ici, pas besoin de composant externe pour mettre un composant en enfant !

Ce code permet de déclarer le template utilisé par les Story.
```jsx
<Template let:args>
	<Button {...args} />
</Template>
```

Pour s'en servir, il existe 2 utilisations possible.

### En utilisant le template

```jsx
<Story name="Primary" />
```
Un problème est rencontrée avec cette méthode, le code que l'on peut récupérer sur la doc est le suivant :

```jsx
<Proxy<RenderContext> />
```

Hors, on souhaiterait avoir ce code :
```jsx
<Button />
```

Pour remédier à ce problème, on peut utiliser la prop parameters.

```jsx
<Story name="Primary" parameters={{ docs: { source: { code: '<Button />' } } }} />
```

### Sans utiliser le template

```jsx
<Story name="Primary">
	<Button />
</Story>
```

Cette méthode affichera correctement le code à récupérer.

## L'index

Le fichier index permet d'exporter le composant Button. Celui ci contient aussi les variants (j'ai repris comme shadcn a fait).

Voici une autre possibilité de gérer les classes tailwinds : [Flowbite-svelte](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/buttons/Button.svelte)