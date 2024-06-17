<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { injectCode } from './utils';
	import Input from './field-input.svelte';
	import './app.css';

	export const meta = {
		title: 'Field/Input',
		component: Input,
		tags: ['autodocs'],
		argTypes: {
			type: {
				description: 'Field type',
				control: 'select',
				options: ['text', 'email', 'password', 'search', 'tel', 'url'],
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'text' },
					category: 'Field Properties'
				}
			},
			value: {
				control: 'text',
				description: 'Input value',
				type: 'string',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'undefined' },
					category: 'Input Properties'
				}
			},
			placeholder: {
				control: 'text',
				description: 'Input placeholder',
				type: 'string',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: '' },
					category: 'Input Properties'
				}
			},
			label: {
				control: 'text',
				description: 'Input label',
				type: 'string',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: '' },
					category: 'Input Properties'
				}
			},
			id: {
				control: 'text',
				description: 'Input id',
				type: 'string',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'input-n' },
					category: 'Input Properties'
				}
			},
			class: {
				control: 'object',
				description: 'Input classes',
				table: {
					type: { summary: '{root?: string; input?: string; label?: string}' },
					defaultValue: { summary: 'undefined' },
					category: 'Input Properties'
				}
			}
		},
		args: {
			type: 'text'
		}
	} satisfies Meta<Input>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	const styles = {
		root: 'border border-green-500 pl-2 w-fit rounded',
		input: 'w-60 bg-green-100 placeholder:text-green-600 dark:text-green-900',
		label: 'text-green-500'
	};
</script>

<Template let:args>
	<Input {...args} />
</Template>

<Story name="Default" args={{ type: 'text' }} parameters={injectCode('<Field type="text" />')} />

<Story
	name="With label"
	args={{ type: 'text', label: 'Name' }}
	parameters={injectCode('<Field type="text" label="Name" />')}
/>

<Story
	name="With placeholder"
	args={{ type: 'text', placeholder: 'Name' }}
	parameters={injectCode('<Field type="text" placeholder="Name" />')}
/>

<Story
	name="With styles"
	args={{ type: 'text', label: 'Name', class: styles }}
	parameters={injectCode('<Field type="text" label="Name" class={styles} />')}
/>
