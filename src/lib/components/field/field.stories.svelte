<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Field from './field.svelte';
	import { injectCode } from '$lib/stories';
	import '../../../app.css';

	export const meta = {
		title: 'Components/With Tailwind + CSF/Field',
		component: Field,
		tags: ['autodocs'],
		argTypes: {
			type: {
				type: 'string',
				control: 'select',
				options: [
					'email',
					'file',
					'number',
					'password',
					'search',
					'tel',
					'text',
					'url',
					'checkbox',
					'radiogroup',
					'select',
					'switch',
					'textarea'
				]
			},
			checked: {
				type: 'boolean'
			},
			value: {
				control: 'text'
			},
			selected: {
				control: 'select',
				options: ['two', 'green', 'red', 'blue'],
				mapping: {
					two: { label: 'Two', value: 'two' },
					green: { label: 'Green', value: 'green' },
					red: { label: 'Red', value: 'red' },
					blue: { label: 'Blue', value: 'blue' }
				}
			},
			placeholder: {
				control: 'text',
				description: 'Input placeholder',
				type: 'string'
			},
			label: {
				control: 'text',
				description: 'Input label',
				type: 'string'
			},
			items: {
				control: 'select',
				description: 'Radiogroup / Select items',
				//@ts-ignore Type error
				type: '{label: string, value: string}[]',
				options: ['one', 'two'],
				mapping: {
					one: [
						{ label: 'One', value: 'one' },
						{ label: 'Two', value: 'two' },
						{ label: 'Three', value: 'three' }
					],
					two: [
						{ label: 'Green', value: 'green' },
						{ label: 'Red', value: 'red' },
						{ label: 'Yellow', value: 'yellow' },
						{ label: 'Purple', value: 'purple' },
						{ label: 'Blue', value: 'blue' }
					]
				}
			}
		},
		args: {
			type: 'text'
		}
	} satisfies Meta<Field>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { styles } from '../../../routes/page.css';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];
</script>

<Template let:args>
	<Field {...args} />
</Template>

<Story name="Default" args={{ type: 'text' }} parameters={injectCode('<Field type="text" />')} />

<Story
	name="Input type number"
	args={{ type: 'number', value: '10' }}
	parameters={injectCode('<Field type="number" value="10" />')}
/>

<Story
	name="Checkbox"
	args={{ type: 'checkbox', label: 'Accept terms and conditions' }}
	parameters={injectCode('<Field type="checkbox" label="Accept terms and conditions" />')}
/>

<Story
	name="Switch"
	args={{ type: 'switch', checked: true, label: 'Accept to revieve spams!' }}
	parameters={injectCode('<Field type="checkbox" checked label="Accept to revieve spams!" />')}
/>

<Story
	name="Select"
	args={{ type: 'select', items, placeholder: 'Select your choice' }}
	parameters={injectCode('<Field type="select" items={items} placeholder="Select your choice" />')}
/>

<Story
	name="Select with default value"
	args={{ type: 'select', items, selected: 'three' }}
	parameters={injectCode('<Field type="select" items={items} selected="three" />')}
/>

<Story
	name="Radio Group"
	args={{ type: 'radiogroup', items }}
	parameters={injectCode('<Field type="radiogroup" items={items} />')}
/>

<Story
	name="Textarea"
	args={{ type: 'textarea', placeholder: 'Describe your issue' }}
	parameters={injectCode('<Field type="textarea" placeholder="Describe your issue" />')}
/>

<Story
	name="With label & classes"
	args={{ type: 'text', label: 'Name', class: styles.input }}
	parameters={injectCode('<Field type="text" label="Name" class={styles.input} />')}
/>

<Story
	name="Datepicker"
	args={{ type: 'datepicker' }}
	parameters={injectCode('<Field type="datepicker" />')}
/>

<Story
	name="Datepicker with french locale"
	args={{ type: 'datepicker', locale:"fr-FR", placeholder: "Choisir une date" }}
	parameters={injectCode('<Field type="datepicker" locale="fr-FR" />')}
/>