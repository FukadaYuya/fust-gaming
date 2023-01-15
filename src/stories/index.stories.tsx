import { WelcomeStory as ViewComponent } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'welcome/index',
  component: ViewComponent,
} as Meta;

const Template: Story = (args) => <ViewComponent {...args} />;

export const Default = Template.bind({});

