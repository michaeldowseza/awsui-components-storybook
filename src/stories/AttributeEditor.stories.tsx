import { Story, Meta } from '@storybook/react/types-6-0';
import Input from '@awsui/components-react/input';
import Link from '@awsui/components-react/link';
import AttributeEditor, { AttributeEditorProps } from '@awsui/components-react/attribute-editor';

export default {
  title: 'Components/Attribute Editor',
  component: AttributeEditor
} as Meta;

interface Item {
  key: string;
  value: string;
  valueConstraintText?: string;
}

const Template: Story<AttributeEditorProps<Item>> = args => <AttributeEditor {...args} />;
const definition: AttributeEditorProps<Item>['definition'] = [
  { label: 'Key', control: item => <Input value={item.key} placeholder="Enter Key" /> },
  { label: 'Value', control: item => <Input value={item.value} placeholder="Enter Value" /> }
];

const items: Item[] = [
  { key: 'some-key-1', value: 'some-value-1', valueConstraintText: 'Constraint text for the first value' },
  { key: 'some-key-2', value: 'some-value-2' }
];

const i18n = {
  addButtonText: 'Add new item',
  removeButtonText: 'Remove',
  empty: 'No items'
};

export const Default = Template.bind({});
Default.args = {
  definition,
  items,
  ...i18n
};

export const Empty = Template.bind({});
Empty.args = {
  definition,
  items: [],
  ...i18n
};

export const InfoLinks = Template.bind({});
InfoLinks.args = {
  definition: definition.map(def => ({ ...def, info: <Link variant="info">Info</Link> })),
  items,
  ...i18n
};

export const ConstraintText = Template.bind({});
ConstraintText.args = {
  definition: [
    {
      label: 'Key',
      control: item => <Input value={item.key} />
    },
    {
      label: 'Value',
      control: item => <Input value={item.value} />,
      constraintText: item => item.valueConstraintText
    }
  ],
  items,
  ...i18n
};

export const AdditionalInfo = Template.bind({});
AdditionalInfo.args = {
  definition,
  items,
  additionalInfo: <span>You can add up to {50 - items.length} more items.</span>,
  ...i18n
};
