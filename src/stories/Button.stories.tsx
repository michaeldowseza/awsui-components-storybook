import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '@awsui/components-react/button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button'
};

export const Normal = Template.bind({});
Normal.args = {
  variant: 'normal',
  children: 'Button'
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Button'
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  iconName: 'settings'
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  href: 'https://github.com/michaeldowseza/awsui-components-storybooks',
  target: '_blank',
  iconName: 'external',
  children: 'Button'
};
