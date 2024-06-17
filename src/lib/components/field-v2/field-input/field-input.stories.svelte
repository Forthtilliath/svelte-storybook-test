<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { injectCode } from './utils';
	import Field from '../field.svelte';
	import '../app.css';

	export const meta = {
		title: 'Field/Input',
		component: Field,
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
					type: { summary: 'object' },
					defaultValue: { summary: 'undefined' },
					category: 'Input Properties'
				}
			},
			checked: DISABLED_PROPERTY,
			selected: DISABLED_PROPERTY
		},
		args: {
			type: 'text'
		}
	} satisfies Meta<Field>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { expect, within } from '@storybook/test';
	import { DISABLED_PROPERTY } from '../stories-constants';

	const styles = {
		root: 'border border-green-500 pl-2 w-fit rounded',
		input: 'w-60 bg-green-100 placeholder:text-green-600 dark:text-green-900',
		label: 'text-green-500'
	};
</script>

<Template let:args>
	<Field {...args} />
</Template>

<Story
	name="Default"
	args={{ 'data-testId': 'input' }}
	parameters={injectCode('<Field />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('input');

		await expect(input).toBeInTheDocument();
		await expect(input.getAttribute('type')).toBe('text');
	}}
/>

<Story
	name="Type search"
	args={{ type: 'search', 'data-testId': 'input' }}
	parameters={injectCode('<Field type="search" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('input');

		await expect(input).toBeInTheDocument();
		await expect(input.getAttribute('type')).toBe('search');
	}}
/>

<Story
	name="Type password"
	args={{ type: 'password', 'data-testId': 'input' }}
	parameters={injectCode('<Field type="password" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('input');

		await expect(input).toBeInTheDocument();
		await expect(input.getAttribute('type')).toBe('password');
	}}
/>

<Story
	name="With label"
	args={{ label: 'Name', 'data-testId': 'input' }}
	parameters={injectCode('<Field label="Name" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('input');
		const label = canvas.getByText('Name');

		await expect(input).toBeInTheDocument();
		await expect(input.getAttribute('type')).toBe('text');
		await expect(label).toBeInTheDocument();
	}}
/>

<Story
	name="With placeholder"
	args={{ placeholder: 'Name', 'data-testId': 'input' }}
	parameters={injectCode('<Field placeholder="Name" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByTestId('input');

		await expect(input).toBeInTheDocument();
		await expect(input.getAttribute('type')).toBe('text');
		await expect(canvas.getByPlaceholderText('Name')).toBeInTheDocument();
	}}
/>

<Story
	name="With styles"
	args={{ type: 'text', label: 'Name', class: styles }}
	parameters={injectCode('<Field type="text" label="Name" class={styles} />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Name').parentElement).toHaveClass(styles.root);
		await expect(canvas.getByText('Name')).toHaveClass(styles.label);
		await expect(canvas.getByDisplayValue('')).toHaveClass(styles.input);
	}}
/>
