<script lang="ts" context="module">
	import type { Meta, StoryObj } from '@storybook/svelte';
	import Button from './button-tw.svelte';
	import '../../app.css';

	export const meta = {
		// Utile pour l'affichage dans la sidebar. Components sera un bloc avec en sous élément Button CSS
		title: 'Components/Button Tailwind Addon',
		// C'est le composant qui sera affiché
		component: Button,
		// Permet d'auto générer la doc via la jsdoc et les variables plus bas
		tags: ['autodocs'],
		// Permet de définir comment on modifie les paramètres du composant dans l'ui
		argTypes: {
			class: { control: 'text', type: 'string' },
			size: {
				control: 'select',
				options: ['default', 'sm', 'lg']
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
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import EnvelopeOpen from 'svelte-radix/EnvelopeOpen.svelte';
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Primary" />

<Story name="Secondary" args={{ variant: 'secondary' }} />
<Story name="Destructive" args={{ variant: 'destructive' }} />
<Story name="Outline" args={{ variant: 'outline' }} />
<Story name="Ghost" args={{ variant: 'ghost' }} />
<Story name="Link" args={{ variant: 'link' }} />

<Story name="With Icon">
	<Button>
		<EnvelopeOpen class="h-5 w-5 mr-2" />
		With Icon
	</Button>
</Story>
