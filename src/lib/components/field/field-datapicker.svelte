<script lang="ts">
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/shared/ui/button';
	import { Calendar } from '$lib/components/shared/ui/calendar';
	import * as Popover from '$lib/components/shared/ui/popover';

	export let locale: string = 'en-US';
	export let value: DateValue | undefined = undefined;
	export let placeholder: string = 'Pick a date';

const df = new DateFormatter(locale, {
	dateStyle: 'long'
});
</script>

<Popover.Root>
	<Popover.Trigger asChild let:builder>
		<Button
			variant="outline"
			class={cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')}
			builders={[builder]}
		>
			<CalendarIcon class="mr-2 h-4 w-4" />
			{value ? df.format(value.toDate(getLocalTimeZone())) : placeholder}
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-auto p-0">
		<Calendar bind:value />
	</Popover.Content>
</Popover.Root>
