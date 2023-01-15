import styles from './index.module.scss';
import { Header, Footer } from '@/components/molecules';
import { MainVisual } from '@/components/atoms';

export const Top = () => {
  return (
    <>
      <Header />
      <main>
        <MainVisual imgUrl="" />
        <div className={styles.contents}>News</div>
        <div className={styles.contents}>Member</div>
        <div className={styles.contents}>About</div>
      </main>
      <Footer />
    </>
  );
};
