import { HoverView, MoveBackArea } from '@/components/atoms';
import { PlayerView } from '@/components/molecules';
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
        <PlayerView members={[]} />
      </div>
    </div>
  );
};

export const GamesContent = (props: Props) => {
  return <Component {...props}></Component>;
};
