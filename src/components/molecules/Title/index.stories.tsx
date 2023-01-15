import { Title as ViewComponent, Props } from './';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'molecules/Title',
  component: ViewComponent,
} as Meta;

const Template: Story<Props> = (args) => <ViewComponent {...args} />;

export const Default = Template.bind({});
export const ChangeFontColor = Template.bind({});

Default.args = {
  text: 'Sample',
};

ChangeFontColor.args = {
  text: 'Sample',
  changeFontIndexes: [0, 2],
};
