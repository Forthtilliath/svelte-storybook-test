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
	type ItemWithoutId = { label: string; value: string; }
	type ItemWithId = { label: string; value: string; id: PropertyKey }

	type CheckboxProps = Omit<Checkbox.Props, 'type'> & {
		type: 'checkbox';
		items?: never;
		placeholder?: never;
		label: string;
		id?: string;
	};

	type RadioGroupProps = RadioGroup.Props & {
		type: 'radiogroup';
		items?: ItemWithoutId[];
		placeholder?: never;
		label?: never;
		id?: string;
		checked?: never;
	};
	type TextareaProps = ComponentProps<Textarea> & {
		type: 'textarea';
		items?: never;
		label?: string;
		id?: string;
		checked?: never;
	};
	type SelectProps = Select.Props<string, false> & {
		type: 'select';
		placeholder?: string;
		label?: string;
		id?: string;
		checked?: never;
	};
	type SwitchProps = Omit<Switch.Props, 'type'> & {
		type: 'switch';
		items?: never;
		placeholder?: never;
		label: string;
		id?: string;
	};
	type InputProps = ComponentProps<Input> & {
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

	export let type: $$Props['type'] = undefined;
	export let items: $$Props['items'] = undefined;
	export let placeholder: $$Props['placeholder'] = undefined;
	export let label: $$Props['label'] = undefined;
	export let checked: $$Props['checked'] = undefined;

	// TODO: Add custom classes
	// let className: $$Props["class"] = undefined;
	// export { className as class };
</script>

{#if type === 'checkbox'}
	{@const id = $$props.id || uniqueId('cb-')}
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
	<RadioGroup.Root {...$$restProps}>
		{#if items}
			{#each items as { label, value, id: radioId }}
				{@const id = radioId ?? uniqueId('radio-group-')}
				<div class="flex items-center space-x-2">
					<RadioGroup.Item {value} {id} />
					<Label for={id}>{label}</Label>
				</div>
			{/each}
		{/if}
		<RadioGroup.Input name="spacing" />
	</RadioGroup.Root>
{:else if type === 'textarea'}
	<Textarea {placeholder} {...$$restProps} />
{:else if type === 'select'}
	<Select.Root {...$$restProps}>
		{#if placeholder}
			<Select.Trigger class="w-[180px]">
				<Select.Value {placeholder} />
			</Select.Trigger>
		{/if}
		<Select.Content>
			{#if items}
				{#each items as { label, value }}
					<Select.Item {value}>{label}</Select.Item>
				{/each}
			{/if}
		</Select.Content>
	</Select.Root>
{:else if type === 'switch'}
	{@const id = $$props.id || uniqueId('switch-')}
	<div class="flex items-center space-x-2">
		<Switch.Root {id} {...$$restProps} />
		<Label for={id}>{label}</Label>
	</div>
{:else}
	<Input {type} {...$$restProps} />
{/if}
