<script lang="ts">
	import { Label } from '$lib/components/shared/ui/label';
	import * as Checkbox from '$lib/components/shared/ui/checkbox';
	import { uniqueId } from '$lib/utils';
	import type { FieldCheckboxProps } from './index.js';

	type $$Props = FieldCheckboxProps;

	export let label: $$Props['label'] = "";
	export let checked: $$Props['checked'] = undefined;
	export let id: $$Props['id'] = uniqueId('checkbox-');
</script>

<div class="flex items-center space-x-2">
	<Checkbox.Root {id} bind:checked {...$$restProps} />
	<Label
		for={id}
		class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		{label}
	</Label>
</div>
