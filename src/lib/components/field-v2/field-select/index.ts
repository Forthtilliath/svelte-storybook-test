import Root from './field-select.svelte';
import { type SelectProps } from './select';

export {
	Root,
	//
	Root as Select,
	Root as FieldSelect
};

type Props = Omit<SelectProps<string, false>, 'class'> & {
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

export type {
	Props,
	//
	Props as SelectProps
};
