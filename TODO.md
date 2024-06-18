# Todo

## Stories

- [ ] Séparer Field en plusieurs stories, 1 story par type de champs (en cours)
- [ ] Ajouter des tests pour les champs de formulaire (en cours)
- [ ] Vérifier l'accessibilité de chaque champ

## Utils

- [ ] Fix types dans : src\routes\page.css.ts

## Global

- [ ] Revoir la structure des fichiers (en cours)
- [ ] Rendre les composants facilement exportables (en cours)
- [ ] Bind checked, value et selected dans value
- [ ] Ajouter des validations pour les champs de formulaire
- [ ] Vérifier que les champs sont bien envoyés lors d'un submit de formulaire
- [ ] Page avec plusieurs liens montrant plusieurs templates du même formulaire

## Fields

### Textarea
- [ ] Ajouter maxsize sur textarea
- [ ] Add label to TextArea

### Checkbox
- [ ] Field Checkbox test click & checked
- [ ] Ajouter une prop reverse pour mettre la case après le label

### Select
- [ ] Ajouter le label
- [ ] Ajouter une prop pour search
- [x] Ajouter une prop pour multiple selected
- [ ] Ajouter des groups : https://ui.shadcn.com/docs/components/select#scrollable
- [ ] Accepter string[] pour les items => label et value
```ts
type ItemWithLabelAndValue = { label: string; value: string };
type Item =ItemWithLabelAndValue | string;
type WithGroups = Record<string, Item[]>;

if( isArray(items) ) {
  // No group labels
  if( isStrings(items) ) {
    // Convertir string[] en ItemWithLabelAndValue[]
  }
} else {
  // Group labels
}
```

### Number
- [x] Bouton input number avec bouton - et +
- [ ] Ajouter la possibilité de ⬅ et ➡ dans Number Field
- [ ] Ajouter la possibilité de changement de styles
- [ ] Ajouter l'event wheel pour modifier la valeur

### Radiogroup
- [ ] Vérifier RadioGroup avec l'input
