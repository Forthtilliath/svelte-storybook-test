import Root from './field-switch.svelte';
import type { SwitchProps } from './switch';

export {
	Root,
	//
	Root as Switch,
	Root as FieldSwitch
};

type Props = Omit<SwitchProps, 'class'> & {
	label?: string;
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
	Props as SwitchProps
};
