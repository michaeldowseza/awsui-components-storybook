import { Story, Meta } from '@storybook/react/types-6-0';
import BreadcrumbGroup, { BreadcrumbGroupProps } from '@awsui/components-react/breadcrumb-group';

export default {
  title: 'Components/Breadcrumb Group',
  component: BreadcrumbGroup
} as Meta;

const Template: Story<BreadcrumbGroupProps> = args => <BreadcrumbGroup {...args} />;
const items: BreadcrumbGroupProps['items'] = [
  { text: 'Home', href: '#' },
  { text: 'Components', href: '#/components' },
  { text: 'Breadcrumb Group', href: '#/components/breadcrumb-group' }
];

export const Default = Template.bind({});
Default.args = {
  items,
  ariaLabel: 'Breadcrumbs'
};
