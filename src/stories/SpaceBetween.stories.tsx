import { Story, Meta } from '@storybook/react/types-6-0';
import SpaceBetween, { SpaceBetweenProps } from '@awsui/components-react/space-between';
import Button from '@awsui/components-react/button';

export default {
  title: 'Components/SpaceBetween',
  component: SpaceBetween
} as Meta;

const Template: Story<SpaceBetweenProps> = args => <SpaceBetween {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  size: 'xs',
  direction: 'horizontal',
  children: (
    <>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </>
  )
};

export const Vertical = Template.bind({});
Vertical.args = {
  size: 'xs',
  direction: 'vertical',
  children: (
    <>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </>
  )
};

export const Nested = Template.bind({});
Nested.args = {
  size: 'l',
  direction: 'horizontal',
  children: (
    <>
      <SpaceBetween size="xs">
        <div>div 1</div>
        <div>div 2</div>
        <div>div 3</div>
      </SpaceBetween>
      <SpaceBetween size="xs">
        <div>div 4</div>
        <div>div 5</div>
        <div>div 6</div>
      </SpaceBetween>
    </>
  )
};
