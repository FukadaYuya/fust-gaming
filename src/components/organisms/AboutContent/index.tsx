import { useMemo } from 'react';
import styles from './index.module.scss';

export type Props = {
  description: string;
};

type ComponentProps = Props;

const Component = ({ description }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export const AboutContent = (props: Props) => {
  return <Component {...props}></Component>;
};
