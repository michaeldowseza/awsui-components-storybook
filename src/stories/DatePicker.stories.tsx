import { Story, Meta } from '@storybook/react/types-6-0';
import DatePicker, { DatePickerProps } from '@awsui/components-react/date-picker';

export default {
  title: 'Components/Date Picker',
  component: DatePicker
} as Meta;

const Template: Story<DatePickerProps> = args => <DatePicker {...args} />;

const ariaLabels: Partial<DatePickerProps> = {
  openCalendarAriaLabel: selectedDate => 'Choose Date' + (selectedDate ? `, selected date is ${selectedDate}` : ''),
  nextMonthAriaLabel: 'Next month',
  previousMonthAriaLabel: 'Previous month',
  todayAriaLabel: 'Today'
};

export const Default = Template.bind({});
Default.args = {
  ...ariaLabels
};

export const DateSelected = Template.bind({});
DateSelected.args = {
  ...ariaLabels,
  value: '2021-01-01'
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, ...ariaLabels };

export const DisabledWeekends = Template.bind({});
DisabledWeekends.args = {
  ...ariaLabels,
  isDateEnabled: date => date.getDay() !== 6 && date.getDay() !== 0
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  ...ariaLabels,
  placeholder: 'YYYY/MM/DD'
};
