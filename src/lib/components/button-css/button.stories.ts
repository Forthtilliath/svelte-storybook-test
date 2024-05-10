import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './button.svelte';

const meta = {
  // Utile pour l'affichage dans la sidebar. Components sera un bloc avec en sous élément Button CSS
  title: 'Components/With CSS/Buttons',
  // C'est le composant qui sera affiché
  component: Button,
  // Permet d'auto générer la doc via la jsdoc et les variables plus bas
  tags: ['autodocs'],
  // Permet de définir comment on modifie les paramètres du composant dans l'ui
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
