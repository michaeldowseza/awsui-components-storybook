import { Story, Meta } from '@storybook/react/types-6-0';
import StatusIndicator, { StatusIndicatorProps } from '@awsui/components-react/status-indicator';

export default {
  title: 'Components/Status Indicator',
  component: StatusIndicator
} as Meta;

const Template: Story<StatusIndicatorProps> = args => <StatusIndicator {...args} />;

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  children: 'Error'
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  children: 'Warning'
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  children: 'Success'
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  children: 'Info'
};

export const Stopped = Template.bind({});
Stopped.args = {
  type: 'stopped',
  children: 'Stopped'
};

export const Pending = Template.bind({});
Pending.args = {
  type: 'pending',
  children: 'Pending'
};

export const InProgress = Template.bind({});
InProgress.args = {
  type: 'in-progress',
  children: 'In progress'
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'loading',
  children: 'Loading'
};
