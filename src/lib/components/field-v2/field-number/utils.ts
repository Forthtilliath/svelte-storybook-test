import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Parameters } from '@storybook/svelte';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function injectCode(code: string, parameters: Parameters = {}): Parameters {
	return Object.assign({}, parameters, { docs: { source: { code } } });
}

export function isDefined<T>(
	value: T | null | undefined,
	message?: string
): asserts value is NonNullable<T> {
	if (value === undefined || value === null) {
		throw new Error(message ?? 'Value must be defined');
	}
}
