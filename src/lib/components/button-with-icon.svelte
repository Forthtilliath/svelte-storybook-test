<script lang="ts">
	import { EnvelopeOpen } from 'svelte-radix';
	import ButtonTw from './button-tw.svelte';
	import type { ComponentProps } from 'svelte';

	type $$Props = ComponentProps<ButtonTw>;
</script>

<ButtonTw {...$$restProps}>
	<EnvelopeOpen class="mr-2 h-5 w-5" />
	Login with Email
</ButtonTw>
