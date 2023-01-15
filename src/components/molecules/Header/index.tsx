import styles from './index.module.scss';
import { Nav } from '@/components/molecules';

export const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.logo}></div>
      <div className={styles.nav}>
        <Nav />
      </div>
    </header>
  );
};
