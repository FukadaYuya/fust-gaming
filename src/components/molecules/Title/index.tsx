import { useMemo } from 'react';
import styles from './index.module.scss';

export type Props = {
  text: string;
  changeFontIndexes?: number[];
};

type ComponentProps = Props;

const Component = ({ text }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></h2>
    </div>
  );
};

export const Title = (props: Props) => {
  const text = useMemo(() => {
    if (!props.changeFontIndexes) return props.text;
    let v = '';
    for (let i = 0; i < props.text.length; i++) {
      v +=
        props.changeFontIndexes?.indexOf(i) !== -1
          ? `<span>${props.text[i]}</span>`
          : props.text[i];
    }
    return v;
  }, [props]);
  props.text.length;
  return <Component {...props} text={text}></Component>;
};
