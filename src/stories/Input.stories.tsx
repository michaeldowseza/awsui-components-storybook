import { Story, Meta } from '@storybook/react/types-6-0';
import Input, { InputProps } from '@awsui/components-react/input';

export default {
  title: 'Components/Input',
  component: Input
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Value = Template.bind({});
Value.args = { value: 'Hello world' };

export const Placeholder = Template.bind({});
Placeholder.args = { placeholder: 'This is a placeholder' };

export const Password = Template.bind({});
Password.args = { value: 'Hello world', type: 'password' };

export const Search = Template.bind({});
Search.args = { placeholder: 'Search', type: 'search' };
