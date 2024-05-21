<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Button from './Button.svelte';
	import '../../../app.css';

	export const meta = {
		title: 'Components/With Tailwind + CSF/Buttons',
		component: Button,
		tags: ['autodocs'],
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
	import { ChevronRight, Reload } from 'svelte-radix';
	import { addCode } from '$lib/utils';
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Primary">
	<Button />
</Story>

<Story
	name="Secondary"
	args={{ variant: 'secondary' }}
	parameters={addCode('<Button variant="secondary" />')}
/>
<Story
	name="Destructive"
	args={{ variant: 'destructive' }}
	parameters={addCode('<Button variant="destructive" />')}
/>
<Story
	name="Outline"
	args={{ variant: 'outline' }}
	parameters={addCode('<Button variant="outline" />')}
/>
<Story
	name="Ghost"
	args={{ variant: 'ghost' }}
	parameters={addCode('<Button variant="ghost" />')}
/>
<Story name="Link" args={{ variant: 'link' }} parameters={addCode('<Button variant="link" />')} />

<Story name="With Icon">
	<Button>
		<EnvelopeOpen class="mr-2 h-5 w-5" />
		With Icon
	</Button>
</Story>

<Story name="Icon">
	<Button size="icon">
		<ChevronRight class="h-4 w-4" />
	</Button>
</Story>

<Story name="Loading">
	<Button disabled>
		<Reload class="mr-2 h-4 w-4 animate-spin" />
		Please wait
	</Button>
</Story>
