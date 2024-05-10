<script lang="ts">
	import ChevronRight from 'svelte-radix/ChevronRight.svelte';
	import Button from '../button-tailwind/Button.svelte';
	import type { ComponentProps } from 'svelte';

type $$Props = ComponentProps<Button>;
</script>

<Button size="icon" {...$$restProps}>
	<ChevronRight class="h-4 w-4" />
</Button>
