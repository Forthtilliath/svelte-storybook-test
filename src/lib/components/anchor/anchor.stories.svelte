<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Anchor from './Anchor.svelte';
	import '../../../app.css';

	export const meta = {
		title: 'Components/With Tailwind + CSF/Anchor',
		component: Anchor,
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
	} satisfies Meta<Anchor>;
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import EnvelopeOpen from 'svelte-radix/EnvelopeOpen.svelte';
	import { ChevronRight, Reload } from 'svelte-radix';
</script>

<Story name="Default">
	<Anchor />
</Story>

<Story name="Primary">
	<Anchor variant="primary" />
</Story>

<Story name="Secondary">
	<Anchor variant="secondary" />
</Story>

<Story name="Destructive">
	<Anchor variant="destructive" />
</Story>

<Story name="Outline">
	<Anchor variant="outline" />
</Story>

<Story name="Ghost">
	<Anchor variant="ghost" />
</Story>

<Story name="With Icon">
	<Anchor>
		<EnvelopeOpen class="mr-2 h-5 w-5" />
		With Icon
	</Anchor>
</Story>

<Story name="Icon">
	<Anchor size="icon">
		<ChevronRight class="h-4 w-4" />
	</Anchor>
</Story>

<Story name="Disabled">
	<Anchor variant="disabled">
		<Reload class="mr-2 h-4 w-4 animate-spin" />
		Please wait
	</Anchor>
</Story>
