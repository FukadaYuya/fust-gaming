import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export type Props = {
  image: {
    src: string;
    alt: string;
    linkUrl: string;
  }
};

type ComponentProps = Props;

const Component = ({ image }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <div></div>
    </div>
  );
};

export const HoverView = (props: Props) => {
  return <Component {...props}></Component>;
};
