import styles from './index.module.scss';
import Image from 'next/image';

type Props = {
  imgUrl: string;
};

type ComponentProps = Props;

const Component = ({ imgUrl }: ComponentProps) => {
  return (
    <div className={styles.main}>
      {!!imgUrl && (
        <Image
          className={styles.img}
          src={imgUrl || ''}
          alt="main-visual"
        ></Image>
      )}
    </div>
  );
};

export const MainVisual = (props: Props) => {
  return <Component {...props}></Component>;
};
