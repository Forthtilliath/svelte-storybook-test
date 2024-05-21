<script lang="ts">
	import FieldCheckbox from './field-checkbox.svelte';
	import FieldInput from './field-input.svelte';
	import FieldRadiogroup from './field-radiogroup.svelte';
	import FieldSwitch from './field-switch.svelte';
	import FieldSelect from './field-select.svelte';
	import FieldTextarea from './field-textarea.svelte';

	import { TYPE_FIELD, type FieldProps } from './index.js';

	type CheckboxProps = FieldProps['Checkbox'] & {
		type: typeof TYPE_FIELD.Checkbox;
	};
	type SwitchProps = FieldProps['Switch'] & {
		type: typeof TYPE_FIELD.Switch;
	};
	type RadioGroupProps = FieldProps['RadioGroup'] & {
		type: typeof TYPE_FIELD.RadioGroup;
	};
	type SelectProps = FieldProps['Select'] & {
		type: typeof TYPE_FIELD.Select;
	};
	type TextareaProps = FieldProps['Textarea'] & {
		type: typeof TYPE_FIELD.Textarea;
	};
	type InputProps = FieldProps['Input'] & {};

	type $$Props =
		| CheckboxProps
		| InputProps
		| RadioGroupProps
		| SelectProps
		| SwitchProps
		| TextareaProps;

	export let type: $$Props['type'];
	export let checked: $$Props['checked'] = undefined;
	export let value: $$Props['value'] = undefined;
	export let selected: $$Props['selected'] = undefined;
</script>

{#if type === TYPE_FIELD.Checkbox}
	<FieldCheckbox {value} bind:checked {...$$restProps} />
{:else if type === TYPE_FIELD.Switch}
	<FieldSwitch {value} bind:checked {...$$restProps} />
{:else if type === TYPE_FIELD.RadioGroup}
	<FieldRadiogroup bind:value {...$$restProps} />
{:else if type === TYPE_FIELD.Select}
	<FieldSelect bind:selected {...$$restProps} />
{:else if type === TYPE_FIELD.Textarea}
	<FieldTextarea bind:value {...$$restProps} />
{:else}
	<FieldInput {type} bind:value {...$$restProps} />
{/if}
