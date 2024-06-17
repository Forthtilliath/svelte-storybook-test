<script lang="ts">
	import * as Textarea from './textarea';
	import { cn } from '$lib/utils.js';
	import type { FieldProps } from './index.js';

	type $$Props = FieldProps['textarea'];

	export let value: $$Props['value'] = undefined;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<Textarea.Root bind:value {...$$restProps} class={cn(className?.input)} />
