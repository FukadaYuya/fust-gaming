import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'molecules/Header',
  component: Header,
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});
