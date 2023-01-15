import styles from './index.module.scss';
import Image from 'next/image';

type Props = {
  text: string;
};

type ComponentProps = Props;

const Component = ({ text }: ComponentProps) => {
  return (
    <div className={styles.main}>
      <h2>{text}</h2>
    </div>
  );
};

export const Title = (props: Props) => {
  return <Component {...props}></Component>;
};
