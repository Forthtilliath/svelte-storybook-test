<script lang="ts">
	import '../../../app.css';
	import { cn } from '$lib/utils.js';
	import type { SvelteComponent } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { type Size, type Variant, anchorVariants } from './index.js';

	interface $$Props extends HTMLAnchorAttributes {
		class?: string;
		variant?: Variant;
		size?: Size;
		content?: string | SvelteComponent;
	}

	let className: $$Props['class'] = '';
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let content: $$Props['content'] = 'Button';
	export let href: $$Props['href'] = '#';
	export { className as class };
</script>

<a class={cn(anchorVariants({ variant, size, className }))} {href} {...$$restProps}>
	<slot>
		{content}
	</slot>
</a>
