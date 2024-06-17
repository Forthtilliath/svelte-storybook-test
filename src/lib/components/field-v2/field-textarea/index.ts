import Root from './field-textarea.svelte';
import type { TextareaProps } from './textarea';

export {
	Root,
	//
	Root as Textarea,
	Root as FieldTextarea
};

type Props = Omit<TextareaProps, 'class'> & {
	label?: never; // TODO Add label
	checked?: never;
	selected?: never;
	class?: {
		input?: string;
	};
};

export type {
	Props,
	//
	Props as TextareaProps
};
