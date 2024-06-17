<script lang="ts">
	import Field from '$lib/components/field/field.svelte';
	import { Field as FieldV2 } from '$lib/components/field-v2';
	import '../app.css';
	import { styles } from './page.css';
	import { CalendarDate } from '$lib/components/shared/ui/calendar';

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
	<h1 class="text-2xl font-bold">Fields</h1>

	<FieldV2 type="checkbox" bind:checked={values.checkbox} label="Accept terms and conditions" />
	<FieldV2
		type="checkbox"
		bind:checked={values.checkbox}
		label="Accept terms and conditions"
		class={styles.checkbox}
	/>

	<FieldV2 type="text" bind:value={values.input_lastname} placeholder="Input" label="Nom" />
	<Field type="text" bind:value={values.input_firstname} placeholder="Input" label="Prénom" />
	<Field type="email" bind:value={values.input_mail} placeholder="Input" label="Email" />
	<FieldV2 type="number" bind:value={values.input_number} min="0" label="Age" />
	<FieldV2
		type="text"
		bind:value={values.input_lastname}
		placeholder="Input"
		label="Nom"
		class={styles.input}
	/>

	<Field type="radiogroup" bind:value={values.radiogroup} {items} />
	<Field type="radiogroup" bind:value={values.radiogroup} {items} class={styles.radiogroup} />

	<FieldV2 type="select" bind:selected={values.select} {items} placeholder="Select" />
	<FieldV2
		type="select"
		bind:selected={values.select}
		{items}
		placeholder="Select"
		class={styles.select}
	/>

	<FieldV2 type="textarea" bind:value={values.textarea} placeholder="Textarea" />
	<FieldV2
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
