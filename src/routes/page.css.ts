import type { FieldProps } from '$lib/components/field';

type StyleFields = {
	[K in keyof FieldProps]?: Class<FieldProps[K]>;
};
type Class<T extends { class?: Record<string, string> }> = T['class'];

export const styles = {
	checkbox: {
		root: 'flex-row-reverse justify-end',
		label: 'text-red-500 peer-data-[state=checked]:text-green-500',
		input:
			'data-[state=checked]:border-green-800 data-[state=checked]:bg-green-300 data-[state=checked]:text-green-800 peer'
	},
	input: {
		root: 'border border-green-500 pl-2 w-fit rounded',
		input: 'w-48 bg-green-100 placeholder:text-green-600 dark:text-black',
		label: 'text-green-500 after:content-["_:"]'
	},
	datepicker: {
		button: 'bg-green-500 hover:bg-green-400 text-black hover:text-black',
	},
	radiogroup: {
		label: 'peer-data-[state=checked]:text-green-500',
		input:
			'data-[state=checked]:border-green-800 data-[state=checked]:bg-green-300 data-[state=checked]:text-green-800 peer'
	},
	select: {
		select: 'w-[300px] font-bold bg-green-500 dark:text-black',
		option: 'bg-green-200 hover:bg-green-200 dark:text-black',
		optionItem: 'data-[highlighted]:bg-green-300 cursor-pointer dark:text-black'
	},
	switch: {
		root: 'flex-row-reverse justify-end',
		label: 'text-red-500 peer-data-[state=checked]:text-green-500',
		input:
			'data-[state=checked]:bg-green-300 data-[state=checked]:text-green-800 data-[state=unchecked]:bg-red-300 data-[state=unchecked]:text-red-800 peer'
	},
	textarea: {
		input: 'w-[300px]'
	}
} satisfies StyleFields;
