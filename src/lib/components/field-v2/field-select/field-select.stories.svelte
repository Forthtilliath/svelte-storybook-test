<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { injectCode } from '../utils';
	import Field from '../field.svelte';
	import '../app.css';

	export const meta = {
		title: 'Field/Select',
		component: Field,
		tags: ['autodocs'],
		argTypes: {
			type: {
				description: 'Field type',
				control: 'select',
				options: ['select'],
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'select' },
					category: 'Field Properties'
				}
			},
			selected: {
				control: 'object',
				description: 'Input value',
				type: 'string',
				table: {
					type: { summary: 'object' },
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
			// label: {
			// 	control: 'text',
			// 	description: 'Input label',
			// 	type: 'string',
			// 	table: {
			// 		type: { summary: 'string' },
			// 		defaultValue: { summary: '' },
			// 		category: 'Input Properties'
			// 	}
			// },
			// id: {
			// 	control: 'text',
			// 	description: 'Input id',
			// 	type: 'string',
			// 	table: {
			// 		type: { summary: 'string' },
			// 		defaultValue: { summary: 'input-n' },
			// 		category: 'Input Properties'
			// 	}
			// },
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
			value: DISABLED_PROPERTY,
			'data-testId': DISABLED_PROPERTY
		}
	} satisfies Meta<Field>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { expect, userEvent, within } from '@storybook/test';
	import { DISABLED_PROPERTY } from '../stories-constants';

	const styles = {
		select: 'w-[300px] font-bold bg-green-500 dark:text-black',
		option: 'bg-green-200 hover:bg-green-200 dark:text-black',
		optionItem: 'data-[highlighted]:bg-green-300 cursor-pointer dark:text-black'
	};

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function playTemplate(canvasElement: HTMLElement) {
		const button = canvasElement.querySelector<HTMLButtonElement>('[data-select-trigger]');

		function getItems() {
			return document.querySelectorAll<HTMLElement>('[data-value]');
		}

		let items: NodeListOf<HTMLElement>;

		// check if the button is displayed & list is not displayed
		await expect(button).toBeInTheDocument();
		// const list = document.querySelector<HTMLElement>('[data-select-content]');
		// await expect(list).not.toBeInTheDocument();
		await expect(getItems().length).toBe(0);

		if (button) {
			// open the list
			await userEvent.click(button);
			items = getItems();
			await expect(items.length).toBe(3);

			// select an item
			await userEvent.click(items[1]);

			// check if the item is selected and the list is closed
			await expect(button).toHaveTextContent('Two');
			items = getItems();
			await sleep(100);
			await expect(getItems().length).toBe(0);
		}

		return {
			button,
			getItems
		};
	}
</script>

<Template let:args>
	<Field type="select" {items} {...args} />
</Template>

<Story
	name="Default"
	args={{}}
	parameters={injectCode('<Field type="select" {items} />')}
	play={async ({ canvasElement }) => {
		await playTemplate(canvasElement);
	}}
/>

<!-- <Story
	name="With label"
	args={{ label: 'Name', 'data-testId': 'input' }}
	parameters={injectCode('<Field label="Name" />')}
	play={async ({ canvasElement }) => {
		await playTemplate(canvasElement);
	}}
/> -->

<Story
	name="With placeholder"
	args={{ placeholder: 'Select a value' }}
	parameters={injectCode('<Field type="select" {items} placeholder="Select a value" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// const input = canvas.getByTestId('input');

		// await expect(input).toBeInTheDocument();
		// await expect(input.getAttribute('type')).toBe('text');
		// await expect(canvas.getByPlaceholderText('Name')).toBeInTheDocument();
	}}
/>

<Story
	name="With default value"
	args={{ selected: { label: 'Two', value: 'two' } }}
	parameters={injectCode(
		'<Field type="select" {items} selected={{ label: "Two", value: "two" }} />'
	)}
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
	args={{ class: styles }}
	parameters={injectCode('<Field type="select" {items} class={styles} />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// await expect(canvas.getByText('Name').parentElement).toHaveClass(styles.root);
		// await expect(canvas.getByText('Name')).toHaveClass(styles.label);
		// await expect(canvas.getByDisplayValue('')).toHaveClass(styles.input);
	}}
/>
