import type { Meta, StoryObj } from '@storybook/svelte';
import Button from './button-tw.svelte';
import '../../app.css';
import ButtonWithIcon from './button-with-icon.svelte';
import ButtonSizeIcon from './button-size-icon.svelte';
import ButtonLoading from './button-loading.svelte';

const meta = {
	// Utile pour l'affichage dans la sidebar. Components sera un bloc avec en sous élément Button CSS
	title: 'Components/Button Tailwind',
	// C'est le composant qui sera affiché
	component: Button,
	// Permet d'auto générer la doc via la jsdoc et les variables plus bas
	tags: ['autodocs'],
	// Permet de définir comment on modifie les paramètres du composant dans l'ui
	argTypes: {
		class: {
			control: 'text'
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon']
		},
		variant: {
			control: 'select',
			options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
		},
		content: {
			control: 'text'
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
	args: {
		variant: 'secondary'
	}
};

export const Destructive: Story = {
	args: {
		variant: 'destructive'
	}
};

export const Outline: Story = {
	args: {
		variant: 'outline'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost'
	}
};

export const Link: Story = {
	args: {
		variant: 'link'
	}
};

export const WithIcon: Story = {
	render: (args) => ({
    Component: ButtonWithIcon,
		props: args
	})
};

export const Icon: Story = {
	args: {
		variant: 'outline',
		size: 'icon',
	},
	render: (args) => ({
		Component: ButtonSizeIcon,
		props: args
	})
};

export const Loading: Story = {
	args: {
		disabled: true
	},
	render: (args) => ({
		Component: ButtonLoading,
		props: args
	})
};