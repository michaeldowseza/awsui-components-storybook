import { Story, Meta } from '@storybook/react/types-6-0';
import Spinner, { SpinnerProps } from '@awsui/components-react/spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner
} as Meta;

const Template: Story<SpinnerProps> = args => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'normal'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'normal',
  variant: 'disabled'
};
