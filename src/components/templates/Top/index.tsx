import styles from './index.module.scss';
import { MainVisual, MoreLink } from '@/components/atoms';
import {
  Header,
  Footer,
  TargetImage,
  ImageSlide,
  Title,
} from '@/components/molecules';

export const Top = () => {
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
            images={[
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
            ]}
          />
          <MoreLink text={'MORE'} linkUrl={'/games'} />
        </div>
      </main>
      <Footer />
    </>
  );
};
