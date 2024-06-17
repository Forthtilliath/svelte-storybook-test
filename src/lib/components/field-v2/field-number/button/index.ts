import { type VariantProps, tv } from 'tailwind-variants';
import Root from './button.svelte';

export const buttonVariants = tv({
	base: 'h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus-visible:ring-ring focus:ring-1 dark:focus:ring-foreground focus:z-[1] disabled:cursor-not-allowed disabled:opacity-50 hover:bg-foreground/10',
	variants: {
		variant: {
			minus: 'rounded-s-md',
			plus: 'rounded-e-md'
		},
		disabled: {
			true: 'pointer-events-none opacity-50',
			false: 'cursor-pointer'
		}
	}
});

export type Variant = VariantProps<typeof buttonVariants>['variant'];

export type ButtonProps = {
	variant: Variant;
	disabled?: boolean;
};

export type ButtonEventHandler<T extends Event = Event> = T & {
	currentTarget: EventTarget & HTMLButtonElement;
};
export type ButtonEvents = {
	click: ButtonEventHandler<MouseEvent>;
};

export {
	Root,
	//
	Root as Button
};
