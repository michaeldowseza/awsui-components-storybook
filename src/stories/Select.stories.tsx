import { Story, Meta } from '@storybook/react/types-6-0';
import Select, { SelectProps } from '@awsui/components-react/select';

export default {
  title: 'Components/Select',
  component: Select
} as Meta;

const Template: Story<SelectProps> = args => <Select {...args} />;
const options: SelectProps['options'] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  {
    label: 'Disabled Group',
    options: [
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' }
    ],
    value: '4',
    disabled: true
  }
];
const sharedProps: Partial<SelectProps> = {
  placeholder: 'Placeholder',
  loadingText: 'Loading',
  selectedAriaLabel: 'Selected',
  empty: 'No options'
};

export const Default = Template.bind({});
Default.args = {
  ...sharedProps,
  selectedOption: options[0],
  options
};

export const Empty = Template.bind({});
Empty.args = {
  ...sharedProps,
  options: []
};

export const Loading = Template.bind({});
Loading.args = {
  ...sharedProps,
  statusType: 'loading',
  options: []
};

export const Error = Template.bind({});
Error.args = {
  ...sharedProps,
  errorText: 'Error',
  statusType: 'error',
  options: []
};

export const WithFiltering = Template.bind({});
WithFiltering.args = {
  ...sharedProps,
  selectedOption: options[0],
  filteringType: 'auto',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...sharedProps,
  selectedOption: options[0],
  options: [
    { label: 'Option 1', value: '1', iconName: 'settings' },
    { label: 'Option 2', value: '2', iconName: 'share' },
    { label: 'Option 3', value: '3', iconName: 'unlocked' }
  ]
};

export const WithTags = Template.bind({});
WithTags.args = {
  ...sharedProps,
  selectedOption: options[0],
  options: [
    { label: 'Option 1', value: '1', tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...sharedProps,
  selectedOption: options[0],
  options: [
    { label: 'Option 1', value: '1', description: 'Description' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...sharedProps,
  selectedOption: options[0],
  options: [
    { label: 'Option 1', value: '1', disabled: true },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]
};
