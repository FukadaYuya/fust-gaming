import { HoverView as ViewComponent, Props } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'atoms/HoverView',
  component: ViewComponent,
} as Meta;

const Template: Story<Props> = (args) => <ViewComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
};
