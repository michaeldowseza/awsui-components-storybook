import { Story, Meta } from '@storybook/react/types-6-0';
import Header, { HeaderProps } from '@awsui/components-react/header';
import SpaceBetween from '@awsui/components-react/space-between';
import Button from '@awsui/components-react/button';
import Link from '@awsui/components-react/link';

export default {
  title: 'Components/Header',
  component: Header
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Header'
};

export const PageHeader = Template.bind({});
PageHeader.args = {
  children: 'Header',
  variant: 'h1'
};

export const SectionHeader = Template.bind({});
SectionHeader.args = {
  children: 'Header',
  variant: 'h3'
};

export const WithActions = Template.bind({});
WithActions.args = {
  children: 'Header',
  variant: 'h1',
  actions: (
    <SpaceBetween size="xs" direction="horizontal">
      <Button>Secondary Button</Button>
      <Button variant="primary">Primary Button</Button>
    </SpaceBetween>
  )
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  children: 'Header',
  counter: '(3)'
}

export const WithLink = Template.bind({});
WithLink.args = {
  children: 'Header',
  info: <Link variant="info">Link</Link>
}