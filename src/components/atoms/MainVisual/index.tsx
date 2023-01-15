import styles from './index.module.scss';
import Image from 'next/image';

export type Props = {
  imgUrl: string;
};

type ComponentProps = Props;

const Component = ({ imgUrl }: ComponentProps) => {
  return (
    <div className={styles.main}>
      <Image
        className={styles.img}
        src={imgUrl || ''}
        alt="main-visual"
        width={1920}
        height={960}
      ></Image>
    </div>
  );
};

export const MainVisual = (props: Props) => {
  return <Component {...props}></Component>;
};
