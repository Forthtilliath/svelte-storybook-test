<script lang="ts">
	import { EnvelopeOpen } from 'svelte-radix';
	import Button from '../button-tailwind/Button.svelte';
	import type { ComponentProps } from 'svelte';

	type $$Props = ComponentProps<Button>;
</script>

<Button {...$$restProps}>
	<EnvelopeOpen class="mr-2 h-5 w-5" />
	Login with Email
</Button>
