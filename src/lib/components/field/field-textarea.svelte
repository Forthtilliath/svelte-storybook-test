<script lang="ts">
	import * as Textarea from '$lib/components/shared/ui/textarea';
	import type { FieldTextareaProps } from '.';

	type $$Props = FieldTextareaProps;

	export let value: $$Props['value'] = undefined;
</script>

<Textarea.Root bind:value {...$$restProps} />
