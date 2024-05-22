<script lang="ts">
	import * as Select from '$lib/components/shared/ui/select';
	import type { FieldProps } from './index.js';

	type $$Props = FieldProps["Select"];

	// export let value: $$Props['value'];
	export let selected: $$Props['selected'] = undefined;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let items: $$Props['items'] = [];
</script>

<Select.Root bind:selected {...$$restProps}>
  <!-- {#if placeholder} -->
    <Select.Trigger class="w-[180px]">
      <Select.Value {placeholder} />
    </Select.Trigger>
  <!-- {/if} -->
  {#if items}
    <Select.Content>
      {#each items as { label, value }}
        <Select.Item {value}>{label ?? value}</Select.Item>
      {/each}
    </Select.Content>
  {/if}
</Select.Root>