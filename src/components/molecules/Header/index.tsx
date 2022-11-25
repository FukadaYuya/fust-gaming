import styles from './index.module.scss';
import { Nav } from '@/components/molecules';

export const Header = () => {
  return (
    <header className={styles.main}>
      <div>Header</div>
      <Nav />
    </header>
  );
};
