import styles from './index.module.scss';
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/css';

export type Props = {
  images: string[];
};

type ComponentProps = {} & Props;

const Component = ({ images }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <Splide
        tag="section"
        aria-label="私のお気に入りの画像集"
        hasTrack={false}
        options={{
          autoplay: false, // 自動再生を有効
          pagination: false,
          arrowPath: '',
        }}
      >
        <div className={styles.custom_wrapper}>
          <SplideTrack>
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <div className={styles.splide_wrapper}>
                  <img
                    className={styles.slide_img}
                    src={image}
                    alt="かわいい猫の画像 part2"
                    width={600}
                    height={600}
                  />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>

          <Image
            className={styles.crosshair}
            src="/images/crosshair.svg"
            alt="arrow-left"
            width={700}
            height={700}
          ></Image>

          <div className="splide__arrows">
            <button
              className={`splide__arrow splide__arrow--prev ${styles.splide_arrow}`}
              style={{ background: 'none', left: '10em' }}
            >
              <Image
                src="/images/arrow-left.svg"
                width={300}
                height={150}
                alt="arrow-left"
              />
            </button>
            <button
              className={`splide__arrow splide__arrow--next ${styles.splide_arrow}`}
              style={{ background: 'none', right: '10em' }}
            >
              <Image
                src="/images/arrow-right.svg"
                width={300}
                height={150}
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
      </Splide>
    </div>
  );
};

export const TargetImage = (props: Props) => {
  return <Component {...props}></Component>;
};
