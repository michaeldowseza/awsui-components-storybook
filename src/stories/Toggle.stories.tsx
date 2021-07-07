import { Story, Meta } from '@storybook/react/types-6-0';
import Toggle, { ToggleProps } from '@awsui/components-react/toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle
} as Meta;

const Template: Story<ToggleProps> = args => <Toggle {...args} />;

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
