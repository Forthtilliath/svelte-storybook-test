<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import ButtonTw from './button-tw.svelte';
	import type { ComponentProps } from 'svelte';

type $$Props = ComponentProps<ButtonTw>;
</script>

<ButtonTw size="icon" {...$$restProps}>
	<ChevronRight class="h-4 w-4" />
</ButtonTw>
