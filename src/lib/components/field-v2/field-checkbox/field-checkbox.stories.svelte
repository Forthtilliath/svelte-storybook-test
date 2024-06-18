<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { injectCode } from '../utils';
	import Field from '../field.svelte';
	import '../app.css';

	export const meta = {
		title: 'Field/Checkbox',
		component: Field,
		tags: ['autodocs'],
		argTypes: {
			type: {
				description: 'Field type',
				control: 'select',
				options: ['checkbox'],
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'checkbox' },
					category: 'Field Properties'
				}
			},
			// value: {
			// 	control: 'text',
			// 	description: 'Input value',
			// 	type: 'string',
			// 	table: {
			// 		type: { summary: 'string' },
			// 		defaultValue: { summary: 'undefined' },
			// 		category: 'Input Properties'
			// 	}
			// },
			checked: {
				control: 'boolean',
				description: 'Input checked',
				type: 'boolean',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'undefined' },
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
					defaultValue: { summary: 'checkbox-n' },
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
			placeholder: DISABLED_PROPERTY,
			value: DISABLED_PROPERTY,
			selected: DISABLED_PROPERTY,
			'data-testId': DISABLED_PROPERTY
		}
	} satisfies Meta<Field>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { expect, within } from '@storybook/test';
	import { DISABLED_PROPERTY } from '../stories-constants';

	const styles = {
		root: 'flex-row-reverse justify-end',
		label: 'text-red-600 peer-data-[state=checked]:text-green-700',
		input:
			'data-[state=checked]:border-green-800 data-[state=checked]:bg-green-300 data-[state=checked]:text-green-800 peer'
	};
</script>

<Template let:args>
	<Field {...args} />
</Template>

<Story
	name="Default"
	args={{ type: 'checkbox' }}
	parameters={injectCode('<Field type="checkbox" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
	}}
/>

<Story
	name="With label"
	args={{ type: 'checkbox', label: 'Accept terms and conditions' }}
	parameters={injectCode('<Field type="checkbox" label="Accept terms and conditions" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Accept terms and conditions');

		await expect(canvas.getByRole('checkbox')).toBeInTheDocument();
		await expect(label).toBeInTheDocument();
	}}
/>

<Story
	name="With styles"
	args={{ type: 'checkbox', label: 'Accept terms and conditions', class: styles }}
	parameters={injectCode(
		'<Field type="checkbox" label="Accept terms and conditions" class={styles} />'
	)}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Accept terms and conditions');
		const checkbox = canvas.getByRole('checkbox');

		await expect(checkbox).toBeInTheDocument();
		await expect(label.parentElement).toHaveClass(styles.root);
		await expect(label).toHaveClass(styles.label);
		await expect(checkbox).toHaveClass(styles.input);
	}}
/>
