import styles from './index.module.scss';
import { Header, Footer } from '@/components/molecules';
import { games } from '@/types/cms-types';
import { GamesContent } from '@/components/organisms';

type Props = {
  games: games[];
};

export const Games = ({ games }: Props) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.main}>
          <div className={styles.banners}>
            {games.map((game, i) => (
              <GamesContent key={i} games={game} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
