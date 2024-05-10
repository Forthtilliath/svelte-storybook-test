<script lang="ts">
	import '../../../app.css';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import Anchor from '../anchor/Anchor.svelte';
	import Button from '../button-tailwind/Button.svelte';

	export let href: HTMLAnchorAttributes['href'] = undefined;
</script>

{#if href}
	<Anchor {href} {...$$restProps} role="button" on:click on:keydown>
		<slot>Anchor</slot>
	</Anchor>
{:else}
	<Button {...$$restProps} on:click on:keydown>
		<slot>Button</slot>
	</Button>
{/if}
