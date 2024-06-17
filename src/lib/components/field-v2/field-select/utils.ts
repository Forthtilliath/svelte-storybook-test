import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Parameters } from '@storybook/svelte';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function injectCode(code: string, parameters: Parameters = {}): Parameters {
	return Object.assign({}, parameters, { docs: { source: { code } } });
}

const uniqueIds = new Map<string, number>();
export function uniqueId(prefix = ''): string {
	const count = (uniqueIds.get(prefix) ?? 0) + 1;
	uniqueIds.set(prefix, count);
	return `${prefix}${count}`;
}

export function isDefined<T>(
	value: T | null | undefined,
	message?: string
): asserts value is NonNullable<T> {
	if (value === undefined || value === null) {
		throw new Error(message ?? 'Value must be defined');
	}
}
