import { Story, Meta } from '@storybook/react/types-6-0';
import Box, { BoxProps } from '@awsui/components-react/box';

export default {
  title: 'Components/Box',
  component: Box
} as Meta;

const Template: Story<BoxProps> = args => <Box {...args} />;
const shortText = 'Lorem ipsum dolor sit amet';
const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu velit eget dui auctor ornare eu a nisl. Fusce rhoncus sapien in nibh vestibulum, quis hendrerit nisl porta. Nullam sed dui nulla. Pellentesque sed nulla nec ligula tincidunt malesuada eget a tortor. Etiam ut suscipit est, et facilisis nunc. Morbi in enim arcu. Nullam euismod porttitor ipsum non sollicitudin. Nulla tincidunt, massa non sodales condimentum, dui purus vestibulum mauris, quis lobortis sapien libero at neque. Cras aliquam interdum dui nec ultrices. Suspendisse potenti. Nam ac laoreet leo. Nulla fringilla ornare nunc ut mattis. Quisque tellus nunc, posuere eu eleifend facilisis, vehicula at mi. Sed eget varius lacus. In mattis eu diam ut convallis.';

export const Paragraph = Template.bind({});
Paragraph.args = {
  variant: 'p',
  children: longText
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  color: 'text-body-secondary',
  children: shortText
};

export const Heading = Template.bind({});
Heading.args = {
  variant: 'h1',
  children: shortText
};

export const Code = Template.bind({});
Code.args = {
  variant: 'code',
  children: shortText
};

export const Bold = Template.bind({});
Bold.args = {
  fontWeight: 'bold',
  children: shortText
};

export const TextLabel = Template.bind({});
TextLabel.args = {
  color: 'text-label',
  children: shortText
};

export const Center = Template.bind({});
Center.args = {
  textAlign: 'center',
  children: shortText
};

export const Margin = Template.bind({});
Margin.args = {
  margin: 'l',
  children: shortText
};

export const Padding = Template.bind({});
Padding.args = {
  padding: 'l',
  children: shortText
};

export const Float = Template.bind({});
Float.args = {
  float: 'right',
  children: shortText
};
