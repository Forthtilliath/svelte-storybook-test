<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { injectCode, isDefined } from '../utils';
	import Field from '../field.svelte';
	import '../app.css';

	export const meta = {
		title: 'Field/Number',
		component: Field,
		tags: ['autodocs'],
		argTypes: {
			type: {
				description: 'Field type',
				control: 'select',
				options: ['number'],
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
	import { expect, fireEvent, userEvent } from '@storybook/test';
	import { DISABLED_PROPERTY } from '../stories-constants';

	const styles = {
		root: 'border border-green-500 pl-2 w-fit rounded',
		input: 'w-60 bg-green-100 placeholder:text-green-600 dark:text-green-900',
		label: 'text-green-500'
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
	<Field type="number" {...args} />
</Template>

<Story
	name="Default"
	args={{}}
	parameters={injectCode('<Field type="number" />')}
	play={async ({ canvasElement }) => {
		const { input, buttonMinus, buttonPlus } = await playTemplate(canvasElement);

		// check if disabled is not active by default
		await expect(buttonMinus).not.toHaveAttribute('disabled');
		await expect(buttonPlus).not.toHaveAttribute('disabled');

		// check if minus button works
		await userEvent.click(buttonMinus);
		await expect(input.value).toBe('-1');

		// check if plus button works
		await userEvent.tripleClick(buttonPlus);
		await expect(input.value).toBe('2');
	}}
/>

<Story
	name="With min and max value"
	args={{ min: 0, max: 3 }}
	parameters={injectCode('<Field type="number" min={0} max={10} />')}
	play={async ({ canvasElement }) => {
		const { input, buttonMinus, buttonPlus } = await playTemplate(canvasElement);
		// check if disabled button works on minus button
		await expect(buttonMinus).toHaveAttribute('disabled');
		await expect(buttonPlus).not.toHaveAttribute('disabled');

		// check if disabled button works on plus button
		await userEvent.tripleClick(buttonPlus);
		await expect(input.value).toBe('3');
		await expect(buttonMinus).not.toHaveAttribute('disabled');
		await expect(buttonPlus).toHaveAttribute('disabled');

		// set input from event to check if disabled button works
		await fireEvent.input(input, { target: { value: 1 } });
		await expect(input.value).toBe('1');
		await expect(buttonMinus).not.toHaveAttribute('disabled');
		await expect(buttonPlus).not.toHaveAttribute('disabled');
	}}
/>

<!-- <Story
	name="With styles"
	args={{ type: 'text', label: 'Name', class: styles }}
	parameters={injectCode('<Field type="text" label="Name" class={styles} />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Name').parentElement).toHaveClass(styles.root);
		await expect(canvas.getByText('Name')).toHaveClass(styles.label);
		await expect(canvas.getByDisplayValue('')).toHaveClass(styles.input);
	}}
/> -->
