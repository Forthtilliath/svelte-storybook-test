import type { DatePickerProps } from 'bits-ui';
import Root from './calendar.svelte';
import Cell from './calendar-cell.svelte';
import Day from './calendar-day.svelte';
import Grid from './calendar-grid.svelte';
import Header from './calendar-header.svelte';
import Months from './calendar-months.svelte';
import GridRow from './calendar-grid-row.svelte';
import Heading from './calendar-heading.svelte';
import GridBody from './calendar-grid-body.svelte';
import GridHead from './calendar-grid-head.svelte';
import HeadCell from './calendar-head-cell.svelte';
import NextButton from './calendar-next-button.svelte';
import PrevButton from './calendar-prev-button.svelte';

export {
	Day,
	Cell,
	Grid,
	Header,
	Months,
	GridRow,
	Heading,
	GridBody,
	GridHead,
	HeadCell,
	NextButton,
	PrevButton,
	//
	Root as Calendar
};
export { CalendarDate } from '@internationalized/date';

type Props = {
	onValueChange?: DatePickerProps['onValueChange'];
	pagedNavigation?: DatePickerProps['pagedNavigation'];
	preventDeselect?: DatePickerProps['preventDeselect'];
	weekStartsOn?: DatePickerProps['weekStartsOn'];
	weekdayFormat?: DatePickerProps['weekdayFormat'];
	calendarLabel?: DatePickerProps['calendarLabel'];
	fixedWeeks?: DatePickerProps['fixedWeeks'];
	isDateDisabled?: DatePickerProps['isDateDisabled'];
	isDateUnavailable?: DatePickerProps['isDateUnavailable'];
	maxValue?: DatePickerProps['maxValue'];
	minValue?: DatePickerProps['minValue'];
	numberOfMonths?: DatePickerProps['numberOfMonths'];
	disabled?: DatePickerProps['disabled'];
	readonly?: DatePickerProps['readonly'];
	locale?: DatePickerProps['locale'];
	value?: DatePickerProps['value'];
};

export type { Props as CalendarProps, Props };
