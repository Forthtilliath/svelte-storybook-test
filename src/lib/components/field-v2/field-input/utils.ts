import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Parameters } from '@storybook/svelte';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function injectCode(code: string, parameters: Parameters = {}): Parameters {
	return Object.assign({}, parameters, { docs: { source: { code } } });
}
