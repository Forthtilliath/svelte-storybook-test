<script lang="ts">
	import * as Select from '$lib/components/shared/ui/select';
	import { cn } from '$lib/utils.js';
	import type { FieldProps } from './index.js';

	type $$Props = FieldProps['select'];

	export let selected: $$Props['selected'] = undefined;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let items: $$Props['items'] = [];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<Select.Root bind:selected {...$$restProps}>
	<Select.Trigger class={cn('w-[180px]', className?.select)}>
		<Select.Value {placeholder} />
	</Select.Trigger>
	{#if items}
		<Select.Content class={cn(className?.option)}>
			{#each items as { label, value }}
				<Select.Item class={cn(className?.optionItem)} {value}>{label ?? value}</Select.Item>
			{/each}
		</Select.Content>
	{/if}
</Select.Root>
