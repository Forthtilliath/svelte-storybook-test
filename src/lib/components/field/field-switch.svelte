<script lang="ts">
	import { Label } from '$lib/components/shared/ui/label';
	import * as Switch from '$lib/components/shared/ui/switch';
	import { uniqueId } from '$lib/utils';
	import type { FieldSwitchProps } from './index.js';

	type $$Props = FieldSwitchProps;

	export let label: $$Props['label'];
	export let checked: $$Props['checked'] = undefined;
	export let id: $$Props['id'] = uniqueId('switch-');
</script>

<div class="flex items-center space-x-2">
	<Switch.Root {id} bind:checked {...$$restProps} />
	<Label for={id}>{label}</Label>
</div>
