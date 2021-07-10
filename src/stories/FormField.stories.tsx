import { Story, Meta } from '@storybook/react/types-6-0';
import FormField, { FormFieldProps } from '@awsui/components-react/form-field';
import Input from '@awsui/components-react/input';
import Button from '@awsui/components-react/button';

export default {
  title: 'Components/Form Field',
  component: FormField
} as Meta;

const Template: Story<FormFieldProps> = args => <FormField {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'Description',
  label: 'Label',
  children: <Input value="" />
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  description: 'Description',
  label: 'Label',
  stretch: true,
  children: <Input value="" />
};

export const WithSecondaryControl = Template.bind({});
WithSecondaryControl.args = {
  description: 'Description',
  label: 'Label',
  secondaryControl: <Button iconName="refresh" />,
  children: <Input value="" />
};

export const WithConstraintText = Template.bind({});
WithConstraintText.args = {
  description: 'Description',
  label: 'Label',
  constraintText: 'Constraint text',
  children: <Input value="" />
};

export const WithErrorText = Template.bind({});
WithErrorText.args = {
  description: 'Description',
  label: 'Label',
  errorText: 'Error',
  children: <Input value="" />
};
