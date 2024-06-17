import Root from './field-input.svelte';
import type { InputProps, FormInputEvent, InputEvents } from './input';

export {
	Root,
	//
	Root as Input,
	Root as FieldInput
};

type InputTypeField = 'email' | 'file' | 'password' | 'search' | 'tel' | 'text' | 'url';
type Props = Omit<InputProps, 'type' | 'class'> & {
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

export type {
	Props,
	InputTypeField,
	FormInputEvent,
	InputEvents,
	//
	Props as InputProps
};
