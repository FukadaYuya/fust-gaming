import styles from './index.module.scss';
import { Header, Footer } from '@/components/molecules';

export const Top = () => {
  return (
    <>
      <Header />
      <div>
        <div className={styles['main-visual']}>MainVisual</div>
        <div className={styles.contents}>News</div>
        <div className={styles.contents}>Member</div>
        <div className={styles.contents}>About</div>
      </div>
      <Footer />
    </>
  );
};
