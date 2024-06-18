import type { ControlSlotProps } from 'formsnap';
import Root from './field-number.svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
// import { type ButtonProps } from './button';
// import { type InputProps } from './input';

export {
	Root,
	// type ButtonProps,
	// type InputProps,
	//
	Root as FieldNumber
	// type ButtonProps as FieldNumberButtonProps,
	// type InputProps as FieldNumberInputProps
};

type Props = Omit<HTMLInputAttributes, 'value'> &
	Partial<ControlSlotProps['attrs']> & {
		value?: number;
		min?: number;
		max?: number;
	};

export type {
	Props,
	//
	Props as InputProps
};
