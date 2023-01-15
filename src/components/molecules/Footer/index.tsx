import styles from './index.module.scss';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.module}>
      <div className={styles.logo}></div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.link}>
            <Link href=".">TOP</Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className={styles.link}>
            <Link href="/member">MEMBER</Link>
          </li>
          <li className={styles.link}>
            <Link href="/news">GAMES</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.copyright}>©2023 Fust gaming</p>
    </footer>
  );
};
