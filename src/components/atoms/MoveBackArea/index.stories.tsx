import { MoveBackArea as ViewComponent, Props } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'atoms/MoveBackArea',
  component: ViewComponent,
} as Meta;

const Template: Story<Props> = (args) => <ViewComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <div>test</div>,
};
