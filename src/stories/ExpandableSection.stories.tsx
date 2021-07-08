import { Story, Meta } from '@storybook/react/types-6-0';
import ExpandableSection, { ExpandableSectionProps } from '@awsui/components-react/expandable-section';
import Header from '@awsui/components-react/header';

export default {
  title: 'Components/Expandable Section',
  component: ExpandableSection
} as Meta;

const Template: Story<ExpandableSectionProps> = args => <ExpandableSection {...args} />;
const common: Partial<ExpandableSectionProps> = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam magna enim, vulputate id lectus a, posuere porttitor mauris. Vestibulum vitae pulvinar neque. Aenean ut pretium tortor. Donec mollis molestie metus ac pretium. Suspendisse potenti. Aliquam vel ante blandit, pulvinar nisl sit amet, aliquet arcu.',
  header: 'Heading'
};

export const Default = Template.bind({});
Default.args = {
  ...common
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...common,
  defaultExpanded: true
};

export const DisablePaddings = Template.bind({});
DisablePaddings.args = {
  ...common,
  disableContentPaddings: true
};

export const Footer = Template.bind({});
Footer.args = {
  ...common,
  variant: 'footer'
};

export const Container = Template.bind({});
Container.args = {
  ...common,
  header: <Header variant="h2">Header</Header>,
  variant: 'container'
};
