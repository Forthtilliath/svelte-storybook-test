<script lang="ts">
	import { Button } from './button';
	import { Input, type InputEvents } from './input';
	import { isDefined } from '../utils';
	import type { InputProps } from './index.js';

	type $$Props = InputProps;
	type $$Events = InputEvents;

	export let value: $$Props['value'] = 0;
	export let min: $$Props['min'] = Number.MIN_SAFE_INTEGER;
	export let max: $$Props['max'] = Number.MAX_SAFE_INTEGER;

	function decrement() {
		isDefined(value, 'Value must be defined');
		isDefined(min, 'Min must be defined');

		value = Math.max(min, value - 1);
	}
	function increment() {
		isDefined(value, 'Value must be defined');
		isDefined(max, 'Max must be defined');

		value = Math.min(max, value + 1);
	}

	function onKeyDown(e: $$Events['keydown']) {
		isDefined(value, 'Value must be defined');
		isDefined(min, 'Min must be defined');
		isDefined(max, 'Max must be defined');

		if (!/[0-9]/.test(e.key)) e.preventDefault();
		if (e.key === 'ArrowUp') value = Math.min(max, value + 1);
		if (e.key === 'ArrowDown') value = Math.max(min, value - 1);
	}

	function onInput(e: $$Events['input']) {
		isDefined(min, 'Min must be defined');
		isDefined(max, 'Max must be defined');

		value = Math.max(min, Math.min(max, Number(e.currentTarget.value)));
	}

	function isDisabled(
		a: number | undefined,
		b: number | undefined,
		fn: (a: number, b: number) => boolean
	) {
		isDefined(a);
		isDefined(b);

		return fn(a, b);
	}
</script>

<div class="relative flex max-w-[8rem] items-center">
	<Button
		variant="minus"
		on:click={decrement}
		disabled={isDisabled(value, min, (a, b) => a <= b)}
	/>
	<Input bind:value {min} {max} on:keydown={onKeyDown} on:input={onInput} {...$$restProps} />
	<Button variant="plus" on:click={increment} disabled={isDisabled(value, max, (a, b) => a >= b)} />
</div>
