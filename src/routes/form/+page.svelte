<script context="module" lang="ts">
	import { CalendarDate } from '$lib/components/field-v2/field-datepicker/calendar';
	import type { Selected } from 'bits-ui';
	export type Values = {
		genre: string;
		lastname: string;
		firstname: string;
		bio: string;
		framework: Selected<string> | null;
		autodidacte: boolean;
		work: boolean;
		age: number;
		nextBirthday: CalendarDate | null;
	};
</script>

<script lang="ts">
	import Field from '$lib/components/field-v2/field.svelte';
	import { Label } from '$lib/components/shared/ui/label';
	import FormDefault from './form-default.svelte';
	import FormTemplate1 from './form-template-1.svelte';

	const components = {
		default: FormDefault,
		'template-1': FormTemplate1
	};
	type TemplateKey = keyof typeof components;

	const templates = [
		{ value: 'default', label: 'Default' },
		{ value: 'template-1', label: 'Template 1' }
		// { value: 'template-2' },
		// { value: 'template-3' },
		// { value: 'template-4' }
	] satisfies Selected<TemplateKey>[];

	let selectedTemplate: TemplateKey = 'default';

	let values = {
		genre: '', // radiogroup
		lastname: '', // input
		firstname: '', // input
		bio: '', //textarea
		framework: null, // select multiple
		autodidacte: false, // checkbox
		work: false, // switch
		age: 15, // number
		nextBirthday: null // datepicker
	} satisfies Values;
</script>

<div class="container my-4 space-y-8">
	<h1 class="text-center text-4xl font-bold">Form examples with differents templates</h1>

	<div class="flex gap-4">
		<sidebar class="space-y-4">
			<div>
				<Label>Select a template</Label>
				<Field type="radiogroup" bind:value={selectedTemplate} items={templates} />
			</div>
			<pre>{JSON.stringify(values, null, 2)}</pre>
		</sidebar>

		<main>
			<svelte:component this={components[selectedTemplate]} {values} />
		</main>
	</div>
</div>
