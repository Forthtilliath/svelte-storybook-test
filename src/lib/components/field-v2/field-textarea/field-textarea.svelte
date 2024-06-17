<script lang="ts">
	import * as Textarea from './textarea';
	import { cn } from '$lib/utils.js';
	import type { TextareaProps } from './index.js';

	type $$Props = TextareaProps;

	export let value: $$Props['value'] = undefined;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<Textarea.Root bind:value {...$$restProps} class={cn(className?.input)} />
