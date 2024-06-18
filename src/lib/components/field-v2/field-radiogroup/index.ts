import Root from './field-radiogroup.svelte';
import type { RadioGroupProps } from './radio-group';

export {
	Root,
	//
	Root as RadioGroup,
	Root as FieldRadioGroup
};

type Item = { label?: string; value: string };
type Props = Omit<RadioGroupProps, 'class'> & {
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

export type {
	Props,
	//
	Props as RadioGroupProps
};
