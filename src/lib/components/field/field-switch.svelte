<script lang="ts">
	import { Label } from '$lib/components/shared/ui/label';
	import * as Switch from '$lib/components/shared/ui/switch';
	import { cn, uniqueId } from '$lib/utils';
	import type { FieldProps } from './index.js';

	type $$Props = FieldProps['switch'];

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
