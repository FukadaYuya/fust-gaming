import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export type Props = {
  text: string;
  linkUrl: string;
};

type ComponentProps = Props;

const Component = ({ text, linkUrl }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <Link href={linkUrl}>
        <div className={styles.inner}>
          <p className={styles.text}>{text}</p>
          <Image
            className={styles.more_arrow}
            src={'/images/more-arrow.svg'}
            alt="more-arrow"
            width={187}
            height={23}
          />
        </div>
      </Link>
    </div>
  );
};

export const MoreLink = (props: Props) => {
  return <Component {...props}></Component>;
};
