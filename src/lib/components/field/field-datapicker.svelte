<script lang="ts">
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/shared/ui/button';
	import { Calendar } from '$lib/components/shared/ui/calendar';
	import * as Popover from '$lib/components/shared/ui/popover';
	import type { FieldProps } from './index.js';

	type $$Props = FieldProps['datepicker'];

	export let locale: $$Props['locale'] = 'en-US';
	export let value: $$Props['value'] = undefined;
	export let placeholder: $$Props['placeholder'] = 'Pick a date';

	let className: $$Props['class'] = undefined;
	export { className as class };

	const df = new DateFormatter(locale!, {
		dateStyle: 'long'
	});
</script>

<Popover.Root>
	<Popover.Trigger asChild let:builder>
		<Button
			variant="outline"
			class={cn(
				'w-[280px] justify-start text-left font-normal',
				!value && 'text-muted-foreground',
				className
			)}
			builders={[builder]}
		>
			<CalendarIcon class="mr-2 h-4 w-4" />
			{value ? df.format(value.toDate(getLocalTimeZone())) : placeholder}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0">
		<Calendar bind:value {locale} {...$$restProps} />
	</Popover.Content>
</Popover.Root>
