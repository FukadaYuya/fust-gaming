import styles from './index.module.scss';
import {
  Header,
  Footer,
  TargetImage,
  ImageSlide,
} from '@/components/molecules';
import { MainVisual } from '@/components/atoms';

export const Top = () => {
  return (
    <>
      <Header />
      <main>
        <MainVisual imgUrl="/images/main-visual.png" />
        <div className={styles.contents}>About</div>
        <div>
          <TargetImage
            images={[
              'https://pbs.twimg.com/profile_images/1513894342951284743/bodoAnHy_400x400.jpg',
              'https://pbs.twimg.com/profile_images/1513894238098161664/dsly89-5_400x400.jpg',
            ]}
          />
        </div>
        <div className={styles.contents}>
          <ImageSlide
            images={[
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
              { src: '/images/haruhi.png', alt: 'haruhi', linkUrl: './' },
            ]}
          ></ImageSlide>
        </div>
      </main>
      <Footer />
    </>
  );
};
