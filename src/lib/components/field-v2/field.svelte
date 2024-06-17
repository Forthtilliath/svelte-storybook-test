<script lang="ts">
	import { FieldCheckbox } from './field-checkbox';
	// import FieldDatapicker from './field-datapicker.svelte';
	import { FieldInput } from './field-input';
	import { FieldNumber } from './field-number';
	// import FieldRadiogroup from './field-radiogroup.svelte';
	// import FieldSwitch from './field-switch.svelte';
	import { FieldSelect } from './field-select';
	// import FieldTextarea from './field-textarea.svelte';
	import { FieldTextarea } from './field-textarea';

	import { TYPE_FIELD, type FieldProps } from './index.js';

	type CheckboxProps = Omit<FieldProps['checkbox'], 'type'> & {
		type: typeof TYPE_FIELD.Checkbox;
	};
	type DatePickerProps = Omit<FieldProps['datepicker'], 'type'> & {
		type: typeof TYPE_FIELD.DatePicker;
	};
	type NumberProps = Omit<FieldProps['number'], 'type'> & {
		type: typeof TYPE_FIELD.Number;
	};
	type SwitchProps = Omit<FieldProps['switch'], 'type'> & {
		type: typeof TYPE_FIELD.Switch;
	};
	type RadioGroupProps = FieldProps['radiogroup'] & {
		type: typeof TYPE_FIELD.RadioGroup;
	};
	type SelectProps = FieldProps['select'] & {
		type: typeof TYPE_FIELD.Select;
	};
	type TextareaProps = FieldProps['textarea'] & {
		type: typeof TYPE_FIELD.Textarea;
	};
	type InputProps = FieldProps['input'] & {};

	type $$Props =
		| CheckboxProps
		| DatePickerProps
		| InputProps
		| NumberProps
		| RadioGroupProps
		| SelectProps
		| SwitchProps
		| TextareaProps;

	/**
	 * The type of the field. Determines the component used.
	 * @type {string}
	 **/
	export let type: $$Props['type'];
	/**
	 * Controls if the field is checked.
	 * @type {boolean}
	 */
	export let checked: $$Props['checked'] = undefined;
	/**
	 * Value of the field.
	 * @type {string}
	 */
	export let value: $$Props['value'] = undefined;
	/**
	 * The value selected.
	 * @type {string}
	 */
	export let selected: $$Props['selected'] = undefined;
</script>

{#if type === TYPE_FIELD.Checkbox}
	<FieldCheckbox {value} bind:checked {...$$restProps} />
{:else if type === TYPE_FIELD.DatePicker}
	<!-- <FieldDatapicker bind:value {...$$restProps} /> -->
{:else if type === TYPE_FIELD.Number}
	<FieldNumber type="text" bind:value {...$$restProps} />
{:else if type === TYPE_FIELD.RadioGroup}
	<!-- <FieldRadiogroup bind:value {...$$restProps} /> -->
{:else if type === TYPE_FIELD.Select}
	<FieldSelect bind:selected {...$$restProps} />
{:else if type === TYPE_FIELD.Switch}
	<!-- <FieldSwitch {value} bind:checked {...$$restProps} /> -->
{:else if type === TYPE_FIELD.Textarea}
	<FieldTextarea bind:value {...$$restProps} />
{:else}
	<FieldInput {type} bind:value {...$$restProps} />
{/if}
