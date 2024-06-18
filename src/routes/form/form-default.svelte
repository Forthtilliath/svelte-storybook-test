<script lang="ts">
	import Field from '$lib/components/field-v2/field.svelte';
	import Label from '$lib/components/shared/ui/label/label.svelte';
	import type { Values } from './+page.svelte';

	export let values: Values;

	const genres = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
		{ label: 'Other', value: 'other' }
	];
</script>

<h2 class="mb-6 text-2xl">Default Template</h2>

<div class="grid grid-cols-2 gap-6">
	<div class="col-span-2">
		<Label>Select a genre:</Label>
		<Field
			type="radiogroup"
			bind:value={values.genre}
			items={genres}
			class={{ root: 'flex gap-4' }}
		/>
	</div>

	<Field type="text" bind:value={values.lastname} label="Lastname" />
	<Field type="text" bind:value={values.firstname} label="Firstname" />
</div>
