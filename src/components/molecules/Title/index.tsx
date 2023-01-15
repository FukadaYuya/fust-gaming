import styles from './index.module.scss';

export type Props = {
  text: string;
};

type ComponentProps = Props;

const Component = ({ text }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <h2>{text}</h2>
    </div>
  );
};

export const Title = (props: Props) => {
  return <Component {...props}></Component>;
};
