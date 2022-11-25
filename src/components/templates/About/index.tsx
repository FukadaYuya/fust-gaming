import styles from './index.module.scss';
import { Header, Footer } from '@/components/molecules';

export const About = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className={styles.title}>About</h1>
      </main>
      <Footer />
    </>
  );
};
