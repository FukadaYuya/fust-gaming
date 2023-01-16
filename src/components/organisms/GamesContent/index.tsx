import { HoverView, MoveBackArea } from '@/components/atoms';
import { games } from '@/types/cms-types';
import styles from './index.module.scss';

export type Props = {
  games: games;
};

type ComponentProps = Props;

const Component = ({ games }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <div className={styles.inner}>
        <HoverView
          image={{
            src: games.icon_img.url,
            alt: games.title,
            linkUrl: games.link_url,
          }}
        />
      </div>
    </div>
  );
};

export const GamesContent = (props: Props) => {
  return <Component {...props}></Component>;
};
