import * as Checkbox from '$lib/components/shared/ui/checkbox';
import * as Input from '$lib/components/shared/ui/input';
import * as RadioGroup from '$lib/components/shared/ui/radio-group';
import * as Select from '$lib/components/shared/ui/select';
import * as Switch from '$lib/components/shared/ui/switch';
import * as Textarea from '$lib/components/shared/ui/textarea';

export const TYPE_FIELD = Object.freeze({
	Checkbox: 'checkbox',
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

export type FieldCheckboxProps = Checkbox.Props & {
	label?: string;
	checked?: boolean;
	selected?: never;
};

export type FieldInputProps = Omit<Input.Props, 'type'> & {
	type: InputTypeField;
	label?: string;
	checked?: never;
	selected?: never;
};

export type FieldRadioGroupProps = RadioGroup.Props & {
	items?: Item[];
	label?: never;
	checked?: never;
	selected?: never;
};

export type FieldSelectProps = Select.Props<string, false> & {
	label?: string;
	checked?: never;
	placeholder?: string;
	value?: never;
};

export type FieldSwitchProps = Switch.Props & {
	label?: string;
	selected?: never;
};

export type FieldTextareaProps = Textarea.Props & {
	label?: never;
	checked?: never;
	selected?: never;
};
