import type { HTMLInputAttributes } from 'svelte/elements';
import type { ControlSlotProps } from 'formsnap';
import Root from './input.svelte';

export type InputProps = Omit<HTMLInputAttributes, 'value'> &
	Partial<ControlSlotProps['attrs']> & {
		value?: number;
		min?: number;
		max?: number;
	};

export type FormInputEvent<T extends Event = Event> = T & {
	currentTarget: EventTarget & HTMLInputElement;
};
export type InputEvents = {
	keydown: FormInputEvent<KeyboardEvent>;
	input: FormInputEvent<InputEvent>;
	// wheel: FormInputEvent<WheelEvent>;
};

export {
	Root,
	//
	Root as Input
};
