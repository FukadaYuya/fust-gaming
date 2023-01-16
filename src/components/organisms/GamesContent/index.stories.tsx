import { GamesContent as ViewComponent, Props } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'organisms/GamesContent',
  component: ViewComponent,
} as Meta;

const Template: Story<Props> = (args) => <ViewComponent {...args} />;

export const Default = Template.bind({});
export const ChangeFontColor = Template.bind({});

Default.args = {
  description: 'テスト！！',
};
