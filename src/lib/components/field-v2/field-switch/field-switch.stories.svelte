<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { injectCode, isDefined } from '../utils';
	import Field from '../field.svelte';
	import '../app.css';

	export const meta = {
		title: 'Field/Switch',
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
			'aria-label': {
				control: 'text',
				description: 'Important when input has no label',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'undefined' }
				}
			},
			placeholder: DISABLED_PROPERTY,
			value: DISABLED_PROPERTY,
			selected: DISABLED_PROPERTY
		}
	} satisfies Meta<Field>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { expect, fireEvent, userEvent, within } from '@storybook/test';
	import { DISABLED_PROPERTY } from '../stories-constants';

	const styles = {
		root: 'flex-row-reverse justify-end',
		label: 'text-red-600 peer-data-[state=checked]:text-green-700',
		input:
			'data-[state=checked]:bg-green-700 data-[state=checked]:text-green-700 data-[state=unchecked]:bg-red-600 data-[state=unchecked]:text-red-600 peer'
	};

	async function playTemplate(canvasElement: HTMLElement) {
		const input = canvasElement.querySelector('input');
		const buttonMinus = canvasElement.querySelector<HTMLButtonElement>(
			'[data-input-counter-decrement]'
		);
		const buttonPlus = canvasElement.querySelector<HTMLButtonElement>(
			'[data-input-counter-increment]'
		);

		await expect(input).toBeInTheDocument();
		await expect(buttonMinus).toBeInTheDocument();
		await expect(buttonPlus).toBeInTheDocument();
		await expect(input?.getAttribute('type')).toBe('text');

		isDefined(input);
		isDefined(buttonMinus);
		isDefined(buttonPlus);

		return {
			input,
			buttonMinus,
			buttonPlus
		};
	}
</script>

<Template let:args>
	<Field type="switch" data-testId="switch" {...args} />
</Template>

<Story
	name="Default"
	args={{}}
	parameters={injectCode('<Field type="switch" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByTestId('switch')).toBeInTheDocument();
	}}
/>

<Story
	name="With label"
	args={{ label: 'Accept terms and conditions' }}
	parameters={injectCode('<Field type="switch" label="Accept terms and conditions" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Accept terms and conditions');

		await expect(canvas.getByTestId('switch')).toBeInTheDocument();
		await expect(label).toBeInTheDocument();
	}}
/>

<Story
	name="With styles"
	args={{ label: 'Accept terms and conditions', class: styles }}
	parameters={injectCode(
		'<Field type="switch" label="Accept terms and conditions" class={styles} />'
	)}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Accept terms and conditions');
		const checkbox = canvas.getByTestId('switch');

		await expect(checkbox).toBeInTheDocument();
		await expect(label.parentElement).toHaveClass(styles.root);
		await expect(label).toHaveClass(styles.label);
		await expect(checkbox).toHaveClass(styles.input);
	}}
/>
