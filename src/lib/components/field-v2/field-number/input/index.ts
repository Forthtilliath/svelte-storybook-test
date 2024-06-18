import Root from './input.svelte';

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
