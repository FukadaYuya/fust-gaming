import styles from './index.module.scss';
import Link from 'next/link';

export type Props = {
  text: string;
  linkUrl: string;
};

type ComponentProps = Props;

const Component = ({ text, linkUrl }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <Link href={linkUrl}>
        <a>
          <div>
            <p>{text}</p>
            <div>____</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export const MoreLink = (props: Props) => {
  return <Component {...props}></Component>;
};
