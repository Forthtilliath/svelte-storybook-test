<script lang="ts">
	import Field from '$lib/components/field/field.svelte';
	import '../app.css';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];

	let values = {
		radiogroup: '',
		textarea: '',
		select: undefined,
		switch: false,
		checkbox: false,
		input_lastname: '',
		input_firstname: '',
		input_mail: '',
		input_number: 0,
		datepicker: undefined
	};
</script>

<main class="space-y-4 m-4">
	<h1 class="text-2xl font-bold">Fields</h1>

	<Field type="radiogroup" bind:value={values.radiogroup} {items} />
	<Field type="textarea" bind:value={values.textarea} placeholder="Textarea" />
	<Field type="select" bind:selected={values.select} {items} placeholder="Select" />
	<Field type="switch" bind:checked={values.switch} label="Accept terms and conditions" />
	<Field type="checkbox" bind:checked={values.checkbox} label="Accept terms and conditions" />
	
	<Field
		type="checkbox"
		bind:checked={values.checkbox}
		label="Accept terms and conditions"
		class={{
			root: 'flex-row-reverse justify-end',
			label: 'text-red-500 peer-data-[state=checked]:text-green-500',
			checkbox:
				'data-[state=checked]:border-green-800 data-[state=checked]:bg-green-300 data-[state=checked]:text-green-800 peer'
		}}
	/>

	<Field type="text" bind:value={values.input_lastname} placeholder="Input" label="Nom" />
	<Field type="text" bind:value={values.input_firstname} placeholder="Input" label="Prénom" />
	<Field type="email" bind:value={values.input_mail} placeholder="Input" label="Email" />
	<Field type="number" bind:value={values.input_number} label="Age" />
	<!-- <Field type="datepicker" bind:value={values.datepicker} /> -->

	<pre>{JSON.stringify(values, null, 2)}</pre>
</main>
