import Root from './field.svelte';
import type { SelectProps } from './field-select';
import type { SwitchProps } from './field-switch';
import type { RadioGroupProps } from './field-radiogroup';
import type { DatepickerProps } from './field-datepicker';
import type { TextareaProps } from './field-textarea';
import type { InputProps } from './field-input';
import type { CheckboxProps } from './field-checkbox';

export {
	Root,
	//
	Root as Field
};

export const TYPE_FIELD = Object.freeze({
	Checkbox: 'checkbox',
	DatePicker: 'datepicker',
	Number: 'number',
	RadioGroup: 'radiogroup',
	Select: 'select',
	Switch: 'switch',
	Textarea: 'textarea'
});


export type FieldProps = {
	checkbox: CheckboxProps;
	datepicker: DatepickerProps;
	input: InputProps;
	number: NumberProps;
	radiogroup: RadioGroupProps;
	select: SelectProps;
	switch: SwitchProps;
	textarea: TextareaProps;
};
