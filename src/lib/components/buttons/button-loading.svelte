<script lang="ts">
  import Reload from "svelte-radix/Reload.svelte";
	import Button from '../button-tailwind/Button.svelte';
	import type { ComponentProps } from 'svelte';

	type $$Props = ComponentProps<Button>;
</script>

<Button {...$$restProps}>
  <Reload class="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>
