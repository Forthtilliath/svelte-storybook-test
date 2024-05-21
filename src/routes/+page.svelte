<script lang="ts">
	import { writable } from 'svelte/store';
	import Field from '$lib/components/field/Field.svelte';
	import '../app.css';

	const items = [
		{ label: 'One', value: 'one' },
		{ label: 'Two', value: 'two' },
		{ label: 'Three', value: 'three' }
	];

	let cb = false;
</script>

<h1>Welcome to SvelteKit</h1>

<Field type="radiogroup" {items} orientation="vertical" />

<Field type="textarea" placeholder="Textarea" />

<Field type="select" {items} placeholder="Select" />

<Field type="switch" />

<Field type="checkbox" bind:checked={cb} label="Accept terms and conditions" />

<pre>{JSON.stringify({ cb }, null, 2)}</pre>
