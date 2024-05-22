import type { Parameters } from '@storybook/svelte';

export function injectCode(code: string, parameters: Parameters = {}): Parameters {
	return Object.assign({}, parameters, { docs: { source: { code } } });
}

export const backgrounds = {
	backgrounds: {
		default: 'dark',
		values: [
			{ name: 'dark', value: '#1d1e22' },
			{ name: 'light', value: '#f2f2f2' }
		]
	}
};
