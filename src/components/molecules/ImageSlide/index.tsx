import styles from './index.module.scss';
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Link from 'next/link';
import '@splidejs/splide/css';

export type Props = {
  images: {
    src: string;
    alt: string;
    linkUrl: string;
  }[];
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
          autoWidth: true,
          drag: 'free',
          gap: '72px',
          focus: 'center',
          type: 'loop',
          perPage: 3,
          padding: '5rem',
          pagination: false,
          arrows: false,
          autoScroll: {
            pauseOnFocus: false,
            pauseOnHover: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <div className={styles.custom_wrapper}>
          <SplideTrack>
            {images.map((image, i) => (
              <SplideSlide key={i}>
                <div className={styles.splide_wrapper}>
                  <a
                    href={image.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={300}
                    />
                  </a>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>
      </Splide>
    </div>
  );
};

export const ImageSlide = (props: Props) => {
  return <Component {...props}></Component>;
};
