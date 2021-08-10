import { Story, Meta } from '@storybook/react/types-6-0';
import Autosuggest, { AutosuggestProps } from '@awsui/components-react/autosuggest';

export default {
  title: 'Components/Autosuggest',
  component: Autosuggest
} as Meta;

const Template: Story<AutosuggestProps> = args => <Autosuggest {...args} />;

const sharedProps: Partial<AutosuggestProps> = {
  ariaLabel: 'Autosuggest',
  enteredTextLabel: (value: string) => `Use: "${value}"`,
  value: '',
  empty: 'No matches found',
  loadingText: 'Loading'
};

export const Default = Template.bind({});
Default.args = {
  ...sharedProps,
  options: [{ label: 'Suggestion 1' }, { label: 'Suggestion 2' }, { label: 'Suggestion 3' }]
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

export const WithGroups = Template.bind({});
WithGroups.args = {
  ...sharedProps,
  options: [
    {
      label: 'Group 1',
      options: [{ value: 'Suggestion 1' }, { value: 'Suggestion 2' }, { value: 'Suggestion 3' }]
    },
    { label: 'Group 2', options: [{ value: 'Suggestion 5' }, { value: 'Suggestion 6' }, { value: 'Suggestion 7' }] }
  ]
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...sharedProps,
  options: [
    { label: 'Suggestion 1', iconName: 'settings' },
    { label: 'Suggestion 2', iconName: 'share' },
    { label: 'Suggestion 3', iconName: 'unlocked' }
  ]
};

export const WithTags = Template.bind({});
WithTags.args = {
  ...sharedProps,
  options: [
    { label: 'Suggestion 1', tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
    { label: 'Suggestion 2' },
    { label: 'Suggestion 3' }
  ]
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...sharedProps,
  options: [{ label: 'Suggestion 1', description: 'Description' }, { label: 'Suggestion 2' }, { label: 'Suggestion 3' }]
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
  ...sharedProps,
  options: [{ label: 'Suggestion 1', disabled: true }, { label: 'Suggestion 2' }, { label: 'Suggestion 3' }]
};
