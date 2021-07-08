import { Story, Meta } from '@storybook/react/types-6-0';
import Flashbar, { FlashbarProps } from '@awsui/components-react/flashbar';
import Button from '@awsui/components-react/button';

export default {
  title: 'Components/Flashbar',
  component: Flashbar
} as Meta;

const Template: Story<FlashbarProps> = args => <Flashbar {...args} />;

export const Info = Template.bind({});
Info.args = {
  items: [
    {
      type: 'info',
      content: 'This is a flash message.'
    }
  ]
};

export const Success = Template.bind({});
Success.args = {
  items: [
    {
      type: 'success',
      content: 'This is a flash message.'
    }
  ]
};

export const Warning = Template.bind({});
Warning.args = {
  items: [
    {
      type: 'warning',
      content: 'This is a flash message.'
    }
  ]
};

export const Error = Template.bind({});
Error.args = {
  items: [
    {
      type: 'error',
      content: 'This is a flash message.'
    }
  ]
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  items: [
    {
      type: 'info',
      dismissible: true,
      dismissLabel: 'Dismiss message',
      content: 'This is a flash message.'
    }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  items: [
    {
      type: 'info',
      loading: true,
      content: 'This is a flash message.'
    }
  ]
};

export const Header = Template.bind({});
Header.args = {
  items: [
    {
      header: 'This is a header',
      type: 'info',
      content: 'This is a flash message.'
    }
  ]
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  items: [
    {
      header: 'This is a header',
      type: 'info',
      content: 'This is a flash message.',
      action: <Button>Button</Button>
    }
  ]
};

export const Stacked = Template.bind({});
Stacked.args = {
  items: [
    {
      type: 'info',
      content: 'This is a flash message.'
    },
    {
      type: 'error',
      content: 'This is a flash message.'
    }
  ]
};
