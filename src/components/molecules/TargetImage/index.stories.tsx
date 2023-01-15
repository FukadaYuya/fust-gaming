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
    'https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg',
    'https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg',
  ],
};
