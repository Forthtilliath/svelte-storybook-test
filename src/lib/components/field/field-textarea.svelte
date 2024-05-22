<script lang="ts">
	import * as Textarea from '$lib/components/shared/ui/textarea';
	import type { FieldProps } from './index.js';

	type $$Props = FieldProps["Textarea"];

	export let value: $$Props['value'] = undefined;
</script>

<Textarea.Root bind:value {...$$restProps} />
