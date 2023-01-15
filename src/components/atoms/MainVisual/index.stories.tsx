import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainVisual, Props } from './';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'atoms/MainVisual',
  component: MainVisual,
} as Meta;

const Template: Story<Props> = (args) => <MainVisual {...args} />;

export const Default = Template.bind({});

Default.args = {
  imgUrl: '/images/main-visual.png',
};
