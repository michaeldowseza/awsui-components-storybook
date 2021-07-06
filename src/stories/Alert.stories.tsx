import { Story, Meta } from '@storybook/react/types-6-0';
import Alert, { AlertProps } from '@awsui/components-react/alert';

export default {
  title: 'Components/Alert',
  component: Alert
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  visible: true,
  header: 'Header',
  type: 'info',
  children: 'This is a description'
};

export const Success = Template.bind({});
Success.args = {
  visible: true,
  type: 'success',
  children: 'This is a description'
};

export const Warning = Template.bind({});
Warning.args = {
  visible: true,
  type: 'warning',
  children: 'This is a description'
};

export const Error = Template.bind({});
Error.args = {
  visible: true,
  type: 'error',
  children: 'This is a description'
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  dismissAriaLabel: 'Close alert',
  visible: true,
  type: 'success',
  dismissible: true,
  children: 'This is a description'
};
