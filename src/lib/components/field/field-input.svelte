<script lang="ts">
	import { Label } from '$lib/components/shared/ui/label';
	import * as Input from '$lib/components/shared/ui/input';
	import { uniqueId } from '$lib/utils';
	import type { FieldInputProps } from '.';

	type $$Props = FieldInputProps;

	export let type: $$Props['type'];
	export let label: $$Props['label'] = '';
	export let value: $$Props['value'] = undefined;
	export let id: $$Props['id'] = uniqueId('input-');
</script>

<div class="flex items-center space-x-2">
	<Label for={id}>{label}</Label>
	<Input.Root {type} {id} bind:value {...$$restProps} />
</div>
