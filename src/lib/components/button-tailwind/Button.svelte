<script lang="ts">
	import '../../../app.css';
	import { cn } from '$lib/utils.js';
	import type { SvelteComponent } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { type Size, type Variant, buttonVariants } from "./index.js";

	interface $$Props extends HTMLButtonAttributes {
		class?: string;
		variant?: Variant;
		size?: Size;
		content?: string | SvelteComponent;
	}

	let className: $$Props['class'] = "";
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let content: $$Props['content'] = 'Button';
	export { className as class };
</script>

<button class={cn(buttonVariants({ variant, size, className }))} type="button" {...$$restProps}>
	<slot>
		{content}
	</slot>
</button>
