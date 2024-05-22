<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Field from './field.svelte';
	import { backgrounds, injectCode } from '$lib/stories';
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
				options: ['one', 'two', 'three'],
				mapping: {
					one: { label: 'One', value: 'one' },
					two: { label: 'Two', value: 'two' },
					three: { label: 'Three', value: 'three' }
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
