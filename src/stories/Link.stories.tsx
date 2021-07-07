import { Story, Meta } from '@storybook/react/types-6-0';
import Link, { LinkProps } from '@awsui/components-react/link';

export default {
  title: 'Components/Link',
  component: Link
} as Meta;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Link'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Link'
};

export const External = Template.bind({});
External.args = {
  external: true,
  externalIconAriaLabel: 'Opens in a new tab',
  href: 'https://michaeldowseza.github.io/awsui-components-storybook/',
  children: 'Link'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'Link'
};
