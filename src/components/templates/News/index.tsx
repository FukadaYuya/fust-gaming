import styles from './index.module.scss';
import { Header, Footer } from '@/components/molecules';

export const News = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.title}>NEWS</h1>
      </main>
      <Footer />
    </>
  );
};
