<script lang="ts">
	import { Label } from './label';
	import * as Switch from './switch';
	import { cn, uniqueId } from '../utils';
	import type { Props } from './index.js';

	type $$Props = 	Props;
	;

	export let label: $$Props['label'] = '';
	export let checked: $$Props['checked'] = undefined;
	export let id: $$Props['id'] = uniqueId('switch-');

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={cn('flex items-center gap-2', className?.root)}>
	<Switch.Root {id} bind:checked class={cn(className?.input)} {...$$restProps} />
	<Label for={id} class={cn(className?.label)}>{label}</Label>
</div>
