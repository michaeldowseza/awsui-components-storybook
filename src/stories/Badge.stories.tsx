import { Story, Meta } from '@storybook/react/types-6-0';
import Badge, { BadgeProps } from '@awsui/components-react/badge';

export default {
  title: 'Components/Badge',
  component: Badge
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const Grey = Template.bind({});
Grey.args = {
  color: 'grey',
  children: '20'
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  children: '20'
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  children: '20'
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  children: '20'
};
