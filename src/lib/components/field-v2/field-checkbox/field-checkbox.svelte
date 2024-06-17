<script lang="ts">
	import Label from './label.svelte';
	import Checkbox from './checkbox.svelte';
	import { cn, uniqueId } from './utils';
	import { type Props } from './index.js';

	type $$Props = Props;

	export let label: $$Props['label'] = '';
	export let checked: $$Props['checked'] = undefined;
	export let id: $$Props['id'] = uniqueId('checkbox-');

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={cn('flex items-center gap-2', className?.root)}>
	<Checkbox {id} bind:checked class={cn(className?.input)} {...$$restProps} />
	<Label
		for={id}
		class={cn(
			'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
			className?.label
		)}
	>
		{label}
	</Label>
</div>
