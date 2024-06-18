<script lang="ts">
	import { Field } from '$lib/components/field-v2';
	import '../app.css';
	import { styles } from './page.css';
	import { CalendarDate } from '$lib/components/field-v2/field-datepicker/calendar';
	import { type Selected } from '$lib/components/field-v2/field-select';

	// const templates = ['default', 'template-1', 'template-2', 'template-3', 'template-4'];
	const templates = [
		{ value: 'default' },
		{ value: 'template-1' },
		{ value: 'template-2' },
		{ value: 'template-3' },
		{ value: 'template-4' }
	];
	let selectedTemplates: Selected<string> = templates[0];

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

<main class="m-4 space-y-4">
	<h1 class="text-center text-4xl font-bold">Form examples with differents templates</h1>

	<Field
		type="select"
		bind:selected={selectedTemplates}
		items={templates}
		placeholder="Select a template"
	/>

	<Field type="checkbox" bind:checked={values.checkbox} label="Accept terms and conditions" />
	<Field
		type="checkbox"
		bind:checked={values.checkbox}
		label="Accept terms and conditions"
		class={styles.checkbox}
	/>

	<Field type="text" bind:value={values.input_lastname} placeholder="Input" label="Nom" />
	<Field type="text" bind:value={values.input_firstname} placeholder="Input" label="Prénom" />
	<Field type="email" bind:value={values.input_mail} placeholder="Input" label="Email" />
	<Field type="number" bind:value={values.input_number} min="0" label="Age" />
	<Field
		type="text"
		bind:value={values.input_lastname}
		placeholder="Input"
		label="Nom"
		class={styles.input}
	/>

	<Field type="radiogroup" bind:value={values.radiogroup} {items} />
	<Field type="radiogroup" bind:value={values.radiogroup} {items} class={styles.radiogroup} />

	<Field type="select" bind:selected={values.select} {items} placeholder="Select" />
	<Field
		type="select"
		bind:selected={values.select}
		{items}
		placeholder="Select"
		class={styles.select}
	/>

	<Field type="textarea" bind:value={values.textarea} placeholder="Textarea" />
	<Field
		type="textarea"
		bind:value={values.textarea}
		placeholder="Textarea"
		class={styles.textarea}
	/>

	<Field type="switch" bind:checked={values.switch} label="Accept terms and conditions" />
	<Field
		type="switch"
		bind:checked={values.switch}
		label="Accept terms and conditions"
		class={styles.switch}
	/>

	<Field type="datepicker" bind:value={values.datepicker} locale="fr-FR" weekdayFormat="narrow" />

	<Field
		type="datepicker"
		bind:value={values.datepicker}
		numberOfMonths={2}
		fixedWeeks
		pagedNavigation
		minValue={new CalendarDate(2024, 5, 15)}
		maxValue={new CalendarDate(2024, 8, 15)}
		class={styles.datepicker}
	/>

	<pre>{JSON.stringify(values, null, 2)}</pre>
</main>
