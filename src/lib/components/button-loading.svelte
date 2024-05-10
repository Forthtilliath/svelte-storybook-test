<script lang="ts">
  import Reload from "svelte-radix/Reload.svelte";
	import ButtonTw from './button-tw.svelte';
	import type { ComponentProps } from 'svelte';

	type $$Props = ComponentProps<ButtonTw>;
</script>

<ButtonTw {...$$restProps}>
  <Reload class="mr-2 h-4 w-4 animate-spin" />
  Please wait
</ButtonTw>
