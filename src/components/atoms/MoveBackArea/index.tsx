import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export type Props = {
  children: JSX.Element;
};

type ComponentProps = Props;

const Component = ({ children }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <div className={styles.first}>
        <div>{children}</div>
      </div>
      <div className={styles.second}></div>
      <div className={styles.third}></div>
    </div>
  );
};

export const MoveBackArea = (props: Props) => {
  return <Component {...props}></Component>;
};
