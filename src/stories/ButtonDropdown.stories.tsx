import { Story, Meta } from '@storybook/react/types-6-0';
import ButtonDropdown, { ButtonDropdownProps } from '@awsui/components-react/button-dropdown';

export default {
  title: 'Components/Button Dropdown',
  component: ButtonDropdown
} as Meta;

const Template: Story<ButtonDropdownProps> = args => <ButtonDropdown {...args} />;

const items: ButtonDropdownProps['items'] = [{ text: 'Delete', id: 'rm' }];

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  items
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button',
  items
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
  items
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
  items
};

export const NestedOptions = Template.bind({});
NestedOptions.args = {
  children: 'Button',
  items: [
    {
      text: 'Instances',
      items: [
        { text: 'Destroy', id: 'des' },
        { text: 'Restart', id: 'res' }
      ]
    },
    { text: 'SSH', disabled: true, items: [{ text: 'Upload key', id: 'upl' }] }
  ]
};

export const ExpandableGroups = Template.bind({});
ExpandableGroups.args = {
  children: 'Button',
  expandableGroups: true,
  items: [
    { id: 'connect', text: 'Connect' },
    { id: 'password', text: 'Get password' },
    {
      id: 'states',
      text: 'Instance State',
      items: [
        { id: 'start', text: 'Start' },
        { id: 'stop', text: 'Stop', disabled: true },
        { id: 'hibernate', text: 'Hibernate', disabled: true },
        { id: 'reboot', text: 'Reboot', disabled: true },
        { id: 'terminate', text: 'Terminate' }
      ]
    }
  ]
};
