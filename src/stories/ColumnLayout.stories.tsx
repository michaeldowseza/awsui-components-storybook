import { Story, Meta } from '@storybook/react/types-6-0';
import ColumnLayout, { ColumnLayoutProps } from '@awsui/components-react/column-layout';

export default {
  title: 'Components/Column Layout',
  component: ColumnLayout
} as Meta;

const Template: Story<ColumnLayoutProps> = args => <ColumnLayout {...args} />;

const children = (
  <>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: 2,
  children
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  columns: 3,
  children
};

export const HorizontalBorders = Template.bind({});
HorizontalBorders.args = {
  columns: 2,
  borders: 'horizontal',
  children
};

export const VerticalBorders = Template.bind({});
VerticalBorders.args = {
  columns: 3,
  borders: 'vertical',
  children
};
