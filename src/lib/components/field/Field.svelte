<script lang="ts">
	import type { ComponentProps } from 'svelte';
	// import Checkbox from '$lib/components/shared/ui/checkbox/checkbox.svelte';
	import { Input } from '$lib/components/shared/ui/input';
	import { Label } from '$lib/components/shared/ui/label';
	import { Textarea } from '$lib/components/shared/ui/textarea';
	import * as RadioGroup from '$lib/components/shared/ui/radio-group';
	import * as Select from '$lib/components/shared/ui/select';
	import * as Checkbox from '$lib/components/shared/ui/checkbox';
	import * as Switch from '$lib/components/shared/ui/switch';

	import { uniqueId } from '$lib/utils';

	// [x] Checkbox (‼ button ‼)
	// [ ] Date Picker
	// [x] Input
	// [x] Radio Group
	// [x] Select
	// [x] Switch (‼ button ‼)
	// [x] Textarea
	type Item = { label?: string; value: string };

	type CheckboxProps = Omit<Checkbox.Props, 'type'> & {
		type: 'checkbox';
		items?: never;
		placeholder?: never;
		label: string;
		id?: string;
		value?: never;
		checked?: boolean;
	};

	type RadioGroupProps = RadioGroup.Props & {
		type: 'radiogroup';
		items?: Item[];
		placeholder?: never;
		label?: never;
		id?: never;
		checked?: never;
	};
	type TextareaProps = ComponentProps<Textarea> & {
		type: 'textarea';
		items?: never;
		label?: string;
		id?: string;
		checked?: never;
		// value?: string;
	};
	type SelectProps = Select.Props<string, false> & {
		type: 'select';
		placeholder?: string;
		label?: string;
		id?: string;
		value?: string;
		checked?: never;
	};
	type SwitchProps = Omit<Switch.Props, 'type'> & {
		type: 'switch';
		items?: never;
		placeholder?: never;
		label: string;
		id?: string;
		value?: never;
	};
	type InputProps = Omit<ComponentProps<Input>, 'type'> & {
		type?: 'text' | 'number' | 'password' | 'email' | 'search' | 'tel' | 'url';
		items?: never;
		label?: string;
		checked?: never;
	};

	type $$Props =
		| CheckboxProps
		| InputProps
		| RadioGroupProps
		| SelectProps
		| SwitchProps
		| TextareaProps;

	/**
	 * Type of the field
	 */
	export let type: $$Props['type'] = 'text';
	/**
	 * List of items. Only required with radiogroup and select
	 */
	export let items: $$Props['items'] = undefined;
	/**
	 * Placeholder. Only required with input and textarea
	 */
	export let placeholder: $$Props['placeholder'] = undefined;
	/**
	 * Label. Only required with switch and checkbox
	 */
	export let label: $$Props['label'] = undefined;

	export let checked: $$Props['checked'] = undefined;
	export let value: $$Props['value'] = undefined;

	// TODO: Add custom classes
	// let className: $$Props["class"] = undefined;
	// export { className as class };
</script>

{#if type === 'checkbox'}
	{@const id = $$props.id ?? uniqueId('checkbox-')}
	<div class="flex items-center space-x-2">
		<Checkbox.Root {id} bind:checked {...$$restProps} />
		<Label
			for={id}
			class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
		>
			{label}
		</Label>
	</div>
{:else if type === 'radiogroup'}
	<RadioGroup.Root bind:value {...$$restProps}>
		{#if items}
			{#each items as { label, value }}
				{@const id = uniqueId('radio-group-')}
				<div class="flex items-center space-x-2">
					<RadioGroup.Item {value} {id} />
					<Label for={id}>{label}</Label>
				</div>
			{/each}
		{/if}
		<RadioGroup.Input name="spacing" />
	</RadioGroup.Root>
{:else if type === 'textarea'}
	<Textarea {placeholder} bind:value {...$$restProps} />
{:else if type === 'select'}
	<Select.Root bind:selected={value} {...$$restProps}>
		{#if placeholder}
			<Select.Trigger class="w-[180px]">
				<Select.Value {placeholder} />
			</Select.Trigger>
		{/if}
		{#if items}
			<Select.Content>
				{#each items as { label, value }}
					<Select.Item {value}>{label ?? value}</Select.Item>
				{/each}
			</Select.Content>
		{/if}
	</Select.Root>
{:else if type === 'switch'}
	{@const id = $$props.id ?? uniqueId('switch-')}
	<div class="flex items-center space-x-2">
		<Switch.Root {id} bind:checked {...$$restProps} />
		<Label for={id}>{label}</Label>
	</div>
{:else}
	{@const id = $$props.id ?? uniqueId('input-')}
	<div class="flex items-center space-x-2">
		{#if label}
			<Label for={id}>{label}</Label>
		{/if}
		<Input {type} {id} {placeholder} bind:value {...$$restProps} />
	</div>
{/if}
