<script lang="ts">
	import type { InputEvents, InputProps } from "./index.js";

	type $$Props = InputProps;
	type $$Events = InputEvents;

	export let value: $$Props["value"] = undefined;
</script>

<input
	bind:value
	type="text"
	data-input-counter
	aria-describedby="helper-text-explanation"
	class="bg-background border-y border-input h-10 text-center text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring dark:focus:ring-foreground focus:z-[1] block w-full py-2.5"
	placeholder="999"
	on:keydown
	on:input
	on:wheel
	{...$$restProps}
	required
/>
