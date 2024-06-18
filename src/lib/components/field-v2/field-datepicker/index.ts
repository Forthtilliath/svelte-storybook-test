import Root from './field-datepicker.svelte';
import type { CalendarProps } from './calendar';

export {
	Root,
	//
	Root as Datepicker,
	Root as FieldDatepicker
};

type Props = CalendarProps & {
	placeholder?: string;
	label?: never;
	checked?: never;
	selected?: never;
	class?: {
		button?: string;
	};
};

export type {
	Props,
	//
	Props as DatepickerProps
};
