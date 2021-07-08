import { Story, Meta } from '@storybook/react/types-6-0';
import Icon, { IconProps } from '@awsui/components-react/icon';

export default {
  title: 'Components/Icon',
  component: Icon
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'settings'
};

export const Subtle = Template.bind({});
Subtle.args = {
  name: 'settings',
  variant: 'subtle'
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'settings',
  variant: 'disabled'
};

export const Small = Template.bind({});
Small.args = {
  name: 'settings',
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  name: 'settings',
  size: 'large'
};

export const Big = Template.bind({});
Big.args = {
  name: 'settings',
  size: 'big'
};
