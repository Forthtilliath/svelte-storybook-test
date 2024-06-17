import Root from './input.svelte';
import type { HTMLInputAttributes } from 'svelte/elements';

export type FormInputEvent<T extends Event = Event> = T & {
	currentTarget: EventTarget & HTMLInputElement;
};
export type InputEvents = {
	blur: FormInputEvent<FocusEvent>;
	change: FormInputEvent<Event>;
	click: FormInputEvent<MouseEvent>;
	focus: FormInputEvent<FocusEvent>;
	focusin: FormInputEvent<FocusEvent>;
	focusout: FormInputEvent<FocusEvent>;
	keydown: FormInputEvent<KeyboardEvent>;
	keypress: FormInputEvent<KeyboardEvent>;
	keyup: FormInputEvent<KeyboardEvent>;
	mouseover: FormInputEvent<MouseEvent>;
	mouseenter: FormInputEvent<MouseEvent>;
	mouseleave: FormInputEvent<MouseEvent>;
	mousemove: FormInputEvent<MouseEvent>;
	paste: FormInputEvent<ClipboardEvent>;
	input: FormInputEvent<InputEvent>;
	wheel: FormInputEvent<WheelEvent>;
};

export {
	Root,
	//
	Root as Input
};

type InputTypeField = 'email' | 'file' | 'password' | 'search' | 'tel' | 'text' | 'url';
type InputProps = Omit<HTMLInputAttributes, 'type' | 'class'> & {
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
	InputProps,
	InputTypeField,
	//
	InputProps as Props
};
