import Root from './field-checkbox.svelte';
import type { CheckboxProps } from 'bits-ui';

export {
	Root,
	//
	Root as Checkbox,
	Root as FieldCheckbox
};

type Props = Omit<CheckboxProps, 'class'> & {
	label?: string;
	checked?: boolean;
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
	Props as CheckboxProps
};
