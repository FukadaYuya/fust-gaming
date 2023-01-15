import { TargetImage as ViewComponent, Props } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'molecules/TargetImage',
  component: ViewComponent,
} as Meta;

const Template: Story<Props> = (args) => <ViewComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  images: [
    'https://pbs.twimg.com/profile_images/1513894342951284743/bodoAnHy_400x400.jpg',
    'https://pbs.twimg.com/profile_images/1513894238098161664/dsly89-5_400x400.jpg',
  ],
};
