<script lang="ts" generics="Multiple extends boolean = false">
	import * as Select from './select';
	import { cn } from '../utils';
	import type { Props } from './index.js';

	type $$Props = Props<Multiple>;

	export let selected: $$Props['selected'] = undefined;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let items: $$Props['items'] = [];
	export let multiple: $$Props['multiple'] = false as Multiple;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<Select.Root bind:selected {multiple} {...$$restProps}>
	<Select.Trigger class={cn('w-[180px]', className?.select)} aria-label="Open or close dropdown">
		<Select.Value {placeholder} />
	</Select.Trigger>
	{#if items}
		<Select.Content class={cn(className?.option)}>
			{#each items as { label, value }}
				<Select.Item class={cn(className?.optionItem)} {value} role="listitem">
					{label ?? value}
				</Select.Item>
			{/each}
		</Select.Content>
	{/if}
</Select.Root>
