import { Story, Meta } from '@storybook/react/types-6-0';

import Form, { FormProps } from '@awsui/components-react/form';
import Header from '@awsui/components-react/header';
import SpaceBetween from '@awsui/components-react/space-between';
import Button from '@awsui/components-react/button';
import Container from '@awsui/components-react/container';
import FormField from '@awsui/components-react/form-field';
import Input from '@awsui/components-react/input';

export default {
  title: 'Components/Form',
  component: Form
} as Meta;

const Template: Story<FormProps> = args => <Form {...args} />;
const common: Partial<FormProps> = {
  header: (
    <Header variant="h1" description="Description">
      Header
    </Header>
  ),
  actions: (
    <SpaceBetween direction="horizontal" size="xs">
      <Button variant="link">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </SpaceBetween>
  ),
  children: 'Content'
};

export const Default = Template.bind({});
Default.args = {
  ...common
};

export const WithContainer = Template.bind({});
WithContainer.args = {
  ...common,
  children: (
    <Container header={<Header variant="h2">Form container header</Header>}>
      <SpaceBetween direction="vertical" size="xl">
        <FormField label="First field">
          <Input value="" />
        </FormField>
        <FormField label="Second field">
          <Input value="" />
        </FormField>
        <FormField label="Third field">
          <Input value="" />
        </FormField>
        <FormField label="Fourth field">
          <Input value="" />
        </FormField>
      </SpaceBetween>
    </Container>
  )
};

export const WithError = Template.bind({});
WithError.args = {
  ...common,
  errorText: 'Error'
};
