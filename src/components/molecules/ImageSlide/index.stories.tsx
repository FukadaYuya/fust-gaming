import { ImageSlide as ViewComponent, Props } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'molecules/ImageSlide',
  component: ViewComponent,
} as Meta;

const Template: Story<Props> = (args) => <ViewComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  images: [
    { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
    { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
    { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
    { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
    { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
    { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
  ],
};
