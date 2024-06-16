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
	Number: 'number',
	RadioGroup: 'radiogroup',
	Select: 'select',
	Switch: 'switch',
	Textarea: 'textarea'
});

export type InputTypeField = 'email' | 'file' | 'password' | 'search' | 'tel' | 'text' | 'url';

export type TypeField = (typeof TYPE_FIELD)[keyof typeof TYPE_FIELD] | InputTypeField;

type Item = { label?: string; value: string };

type FieldCheckboxProps = Omit<Checkbox.Props, 'class'> & {
	label?: string;
	checked?: boolean;
	selected?: never;
	class?: {
		root?: string;
		input?: string;
		label?: string;
	};
};

type FieldDatePickerProps = {
	locale?: string;
	placeholder?: string;
	//
	label?: never;
	value?: DateValue;
	checked?: never;
	selected?: never;
	class?: undefined;
};

type FieldNumberProps = Omit<Input.Props, 'type' | 'class'> & {
	type: 'number';
	label?: string;
	checked?: never;
	selected?: never;
	class?: {
		root?: string;
		input?: string;
		label?: string;
	};
};

type FieldInputProps = Omit<Input.Props, 'type' | 'class'> & {
	type: InputTypeField;
	label?: string;
	checked?: never;
	selected?: never;
	class?: {
		root?: string;
		input?: string;
		label?: string;
	};
};

type FieldRadioGroupProps = Omit<RadioGroup.Props, 'class'> & {
	items?: Item[];
	label?: never;
	checked?: never;
	selected?: never;
	class?: {
		root?: string;
		input?: string;
		label?: string;
	};
};

type FieldSelectProps = Omit<Select.Props<string, false>, 'class'> & {
	label?: string;
	checked?: never;
	placeholder?: string;
	value?: never;
	class?: {
		select?: string;
		option?: string;
		optionItem?: string;
	};
};

type FieldSwitchProps = Omit<Switch.Props, 'class'> & {
	label?: string;
	selected?: never;
	class?: {
		root?: string;
		input?: string;
		label?: string;
	};
};

type FieldTextareaProps = Omit<Textarea.Props, 'class'> & {
	label?: never;
	checked?: never;
	selected?: never;
	class?: {
		input?: string;
	};
};

export type FieldProps = {
	checkbox: FieldCheckboxProps;
	datepicker: FieldDatePickerProps;
	input: FieldInputProps;
	number: FieldNumberProps;
	radiogroup: FieldRadioGroupProps;
	select: FieldSelectProps;
	switch: FieldSwitchProps;
	textarea: FieldTextareaProps;
};
