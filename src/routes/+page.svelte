<script lang="ts">
	import Field from '$lib/components/field/Field.svelte';
	import '../app.css';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];

	// let checkbox = false;
	// let switch = false;

	let values = {
		radiogroup: '',
		textarea: '',
		select: '',
		switch: false,
		checkbox: false,
	};
</script>

<h1>Welcome to SvelteKit</h1>

<Field type="radiogroup" bind:value={values.radiogroup} {items} orientation="vertical" />

<Field type="textarea" bind:value={values.textarea} placeholder="Textarea" />

<Field type="select" bind:value={values.select} {items} placeholder="Select" />

<Field type="switch" bind:checked={values.switch} label="Accept terms and conditions" />

<Field type="checkbox" bind:checked={values.checkbox} label="Accept terms and conditions" />

<pre>{JSON.stringify(values, null, 2)}</pre>
