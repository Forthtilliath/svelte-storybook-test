<script lang="ts">
	import { Label } from './label';
	import * as RadioGroup from './radio-group';
	import { cn, uniqueId } from '../utils';
	import type { Props } from './index.js';

	type $$Props = Props;

	export let value: $$Props['value'] = undefined;
	export let items: $$Props['items'] = undefined;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<RadioGroup.Root bind:value class={cn(className?.root)} {...$$restProps}>
	{#if items}
		{#each items as { label, value }}
			{@const id = uniqueId('radio-group-')}
			<div class="flex items-center space-x-2">
				<RadioGroup.Item {value} {id} class={cn(className?.input)} />
				<Label for={id} class={cn(className?.label)}>{label}</Label>
			</div>
		{/each}
	{/if}
	<RadioGroup.Input name="spacing" />
</RadioGroup.Root>
