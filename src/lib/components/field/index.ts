import * as Checkbox from '$lib/components/shared/ui/checkbox';
import * as Input from '$lib/components/shared/ui/input';
import * as RadioGroup from '$lib/components/shared/ui/radio-group';
import * as Select from '$lib/components/shared/ui/select';
import * as Switch from '$lib/components/shared/ui/switch';
import * as Textarea from '$lib/components/shared/ui/textarea';

import { type DateValue } from '@internationalized/date';

export const TYPE_FIELD = Object.freeze({
	Checkbox: 'checkbox',
	DatePicker: 'datepicker',
	RadioGroup: 'radiogroup',
	Select: 'select',
	Switch: 'switch',
	Textarea: 'textarea'
});

export type InputTypeField =
	| 'email'
	| 'file'
	| 'number'
	| 'password'
	| 'search'
	| 'tel'
	| 'text'
	| 'url';

export type TypeField = (typeof TYPE_FIELD)[keyof typeof TYPE_FIELD] | InputTypeField;

type Item = { label?: string; value: string };

type FieldCheckboxProps = Checkbox.Props & {
	label?: string;
	checked?: boolean;
	selected?: never;
};

type FieldDatePickerProps = {
	locale?: string;
	//
	label?: never;
	value?: DateValue;
	checked?: never;
	selected?: never;
};

type FieldInputProps = Omit<Input.Props, 'type'> & {
	type: InputTypeField;
	label?: string;
	checked?: never;
	selected?: never;
};

type FieldRadioGroupProps = RadioGroup.Props & {
	items?: Item[];
	label?: never;
	checked?: never;
	selected?: never;
};

type FieldSelectProps = Select.Props<string, false> & {
	label?: string;
	checked?: never;
	placeholder?: string;
	value?: never;
};

type FieldSwitchProps = Switch.Props & {
	label?: string;
	selected?: never;
};

type FieldTextareaProps = Textarea.Props & {
	label?: never;
	checked?: never;
	selected?: never;
};

export type FieldProps = {
	Checkbox: FieldCheckboxProps;
	DatePicker: FieldDatePickerProps;
	Input: FieldInputProps;
	RadioGroup: FieldRadioGroupProps;
	Select: FieldSelectProps;
	Switch: FieldSwitchProps;
	Textarea: FieldTextareaProps;
};
