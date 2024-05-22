<script lang="ts">
	import { Label } from '$lib/components/shared/ui/label';
	import * as RadioGroup from '$lib/components/shared/ui/radio-group';
	import { uniqueId } from '$lib/utils';
	import type { FieldProps } from './index.js';

	type $$Props = FieldProps["RadioGroup"];

	export let value: $$Props['value'] = undefined;
	export let items: $$Props['items'] = undefined;
</script>

<RadioGroup.Root bind:value {...$$restProps}>
	{#if items}
		{#each items as { label, value }}
			{@const id = uniqueId('radio-group-')}
			<div class="flex items-center space-x-2">
				<RadioGroup.Item {value} {id} />
				<Label for={id}>{label}</Label>
			</div>
		{/each}
	{/if}
	<RadioGroup.Input name="spacing" />
</RadioGroup.Root>
