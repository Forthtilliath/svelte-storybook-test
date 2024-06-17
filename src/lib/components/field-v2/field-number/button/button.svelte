<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { buttonVariants, type ButtonEvents, type ButtonProps } from './index.js';
	type $$Props = ButtonProps;
	type $$Events = ButtonEvents;

	export let variant: $$Props['variant'];
	export let disabled: $$Props['disabled'] = false;
</script>

{#if variant === 'minus'}
	<button
		type="button"
		data-input-counter-decrement="quantity-input"
		class={cn(buttonVariants({ variant, disabled }))}
		{disabled}
		on:click
	>
		<span class="sr-only">Decrease</span>
		<svg
			class="h-3 w-3 text-gray-900 dark:text-foreground"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 18 2"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1 1h16"
			/>
		</svg>
	</button>
{:else if variant === 'plus'}
	<button
		type="button"
		data-input-counter-increment="quantity-input"
		class={cn(buttonVariants({ variant, disabled }))}
		{disabled}
		on:click
	>
		<span class="sr-only">Increase</span>
		<svg
			class="h-3 w-3 text-gray-900 dark:text-foreground"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 18 18"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 1v16M1 9h16"
			/>
		</svg>
	</button>
{/if}
