import Root from './field-select.svelte';
import type { SelectProps, Selected } from './select';

export {
	Root,
	//
	Root as Select,
	Root as FieldSelect
};

type Props<Multiple extends boolean> = Omit<SelectProps<string, Multiple>, 'class'> & {
	label?: string;
	checked?: never;
	placeholder?: string;
	value?: never;
	class?: {
		select?: string;
		option?: string;
		optionItem?: string;
	};
	multiple?: Multiple;
};

export type {
	Props,
	Selected,
	//
	Props as SelectProps
};
