import styles from './index.module.scss';
import { MainVisual, MoreLink } from '@/components/atoms';
import { members, games } from '../../../types/cms-types';
import {
  Header,
  Footer,
  TargetImage,
  ImageSlide,
  Title,
} from '@/components/molecules';

export type TopProps = {
  members: members[];
  games: games[];
};

export const Top = ({ members, games }: TopProps) => {
  console.log(games);
  return (
    <>
      <Header />
      <main>
        <MainVisual imgUrl="/images/main-visual.png" />
        <div className={styles.contents}>
          <Title text="ABOUT" changeFontIndexes={[4]} />
        </div>
        <div className={styles.contents}>
          <Title text="MEMBER" changeFontIndexes={[1, 2]} />
          <TargetImage
            images={[
              'https://pbs.twimg.com/profile_images/1513894342951284743/bodoAnHy_400x400.jpg',
              'https://pbs.twimg.com/profile_images/1513894238098161664/dsly89-5_400x400.jpg',
            ]}
          />
          <MoreLink text={'MORE'} linkUrl={'/member'} />
        </div>
        <div className={styles.contents}>
          <Title text="GAMES" changeFontIndexes={[0]} />
          <ImageSlide
            images={games.map((game) => ({
              src: game.icon_img.url,
              alt: game.title,
              linkUrl: game.link_url,
            }))}
          />
          <MoreLink text={'MORE'} linkUrl={'/games'} />
        </div>
      </main>
      <Footer />
    </>
  );
};
