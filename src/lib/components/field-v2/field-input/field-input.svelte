<script lang="ts">
	import Label from './label.svelte';
	import { cn, uniqueId } from '$lib/utils';
	import * as Input from './index.js';

	type $$Props = Input.Props;

	export let type: $$Props['type'];
	export let label: $$Props['label'] = '';
	export let value: $$Props['value'] = undefined;
	export let id: $$Props['id'] = uniqueId('input-');

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={cn('flex items-center space-x-2', className?.root)}>
	<Label for={id} class={cn(className?.label)}>{label}</Label>
	<Input.Root {type} {id} bind:value class={cn(className?.input)} {...$$restProps} />
</div>
