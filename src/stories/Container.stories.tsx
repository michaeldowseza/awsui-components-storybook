import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '@awsui/components-react/button';
import Container, { ContainerProps } from '@awsui/components-react/container';
import ExpandableSection from '@awsui/components-react/expandable-section';
import Header from '@awsui/components-react/header';
import SpaceBetween from '@awsui/components-react/space-between';

export default {
  title: 'Components/Container',
  component: Container
} as Meta;

const Template: Story<ContainerProps> = args => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Heading',
  children: 'Content'
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: (
    <Header variant="h2" description="Description">
      Heading
    </Header>
  ),
  children: 'Content'
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  header: (
    <Header variant="h2" description="Description">
      Heading
    </Header>
  ),
  footer: 'Footer',
  children: 'Content'
};

export const WithExpandableFooter = Template.bind({});
WithExpandableFooter.args = {
  header: (
    <Header variant="h2" description="Description">
      Heading
    </Header>
  ),
  footer: (
    <ExpandableSection header="Footer" variant="footer">
      Hidden content
    </ExpandableSection>
  ),
  children: 'Content'
};

export const WithActions = Template.bind({});
WithActions.args = {
  header: (
    <Header
      variant="h2"
      description="Description"
      actions={
        <SpaceBetween size="xs" direction="horizontal">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </SpaceBetween>
      }
    >
      Heading
    </Header>
  ),
  footer: 'Footer',
  children: 'Content'
};
