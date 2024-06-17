<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import { injectCode } from './utils';
	import Field from '../field.svelte';
	import '../app.css';

	export const meta = {
		title: 'Field/TextArea',
		component: Field,
		tags: ['autodocs'],
		argTypes: {
			type: {
				description: 'Field type',
				control: 'select',
				options: ['textarea'],
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'textarea' },
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
					defaultValue: { summary: 'textarea-n' },
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
			checked: DISABLED_PROPERTY,
			selected: DISABLED_PROPERTY
		}
	} satisfies Meta<Field>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { expect, within } from '@storybook/test';
	import { DISABLED_PROPERTY } from '../stories-constants';

	const styles = {
		input: 'w-[300px]'
	};
</script>

<Template let:args>
	<Field data-testId="textarea" {...args} />
</Template>

<Story
	name="Default"
	args={{ type: 'textarea' }}
	parameters={injectCode('<Field type="textarea" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByTestId('textarea');

		await expect(textarea).toBeInTheDocument();
	}}
/>

<!-- <Story
	name="With label"
	args={{ type: 'textarea', label: 'Description' }}
	parameters={injectCode('<Field type="textarea" label="Description" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('Description');

		await expect(canvas.getByRole('textarea')).toBeInTheDocument();
		await expect(label).toBeInTheDocument();
	}}
/> -->

<Story
	name="With placeholder"
	args={{ type: 'textarea', placeholder: 'Description' }}
	parameters={injectCode('<Field type="textarea" placeholder="Description" />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByTestId('textarea');

		await expect(textarea).toBeInTheDocument();
		await expect(canvas.getByPlaceholderText('Description')).toBeInTheDocument();
	}}
/>

<Story
	name="With styles"
	args={{ type: 'textarea', class: styles }}
	parameters={injectCode('<Field type="textarea" class={styles} />')}
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByTestId('textarea');

		await expect(textarea).toBeInTheDocument();
		await expect(textarea).toHaveClass(styles.input);
	}}
/>
