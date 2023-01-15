import { Welcome } from '@storybook/react/demo';
import { linkTo } from '@storybook/addon-links';

export const WelcomeStory = () => <Welcome showApp={linkTo('Demo Button')} />;
