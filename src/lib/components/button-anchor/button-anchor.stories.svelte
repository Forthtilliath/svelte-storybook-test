<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import ButtonAnchor from './ButtonAnchor.svelte';
	import '../../../app.css';

	export const meta = {
		title: 'Components/With Tailwind + CSF/Button Anchor',
		component: ButtonAnchor,
		tags: ['autodocs'],
		argTypes: {
			class: { control: 'text', type: 'string' },
			size: {
				control: 'select',
				options: ['default', 'sm', 'lg']
			},
			variant: {
				control: 'select',
				options: ['default', 'destructive', 'outline', 'primary', 'secondary', 'ghost', 'disabled']
			},
			content: {
				control: 'text'
			},
			href: {
				control: 'text'
			}
		}
	} satisfies Meta<ButtonAnchor>;
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import { ChevronRight } from 'svelte-radix';
</script>

<Story name="Button">
	<ButtonAnchor />
</Story>

<Story name="Anchor">
	<ButtonAnchor href="https://kit.svelte.dev" />
</Story>

<Story name="Anchor primary">
	<ButtonAnchor href="https://kit.svelte.dev" variant="primary" />
</Story>

<Story name="Button Icon">
	<ButtonAnchor size="icon">
		<ChevronRight class="h-4 w-4" />
	</ButtonAnchor>
</Story>

<Story name="Anchor Icon">
	<ButtonAnchor href="https://kit.svelte.dev" variant="primary" size="icon">
		<ChevronRight class="h-4 w-4" />
	</ButtonAnchor>
</Story>
