import styles from './index.module.scss';
import { Header, Footer } from '@/components/molecules';

export const Member = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.title}>Member</h1>
      </main>
      <Footer />
    </>
  );
};
