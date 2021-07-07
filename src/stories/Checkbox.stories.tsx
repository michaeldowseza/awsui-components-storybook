import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '@awsui/components-react/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta;

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  ariaLabel: 'Unchecked'
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  ariaLabel: 'Unchecked disabled',
  disabled: true
};

export const Checked = Template.bind({});
Checked.args = {
  ariaLabel: 'checked',
  checked: true
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  ariaLabel: 'checked disabled',
  checked: true,
  disabled: true
};
