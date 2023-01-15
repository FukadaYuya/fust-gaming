import styles from './index.module.scss';
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className={styles.module}>
      <ul>
        <li className={styles.link}>
          <Link href=".">TOP</Link>
        </li>
        <li className={styles.link}>
          <Link href="/news">ABOUT</Link>
        </li>
        <li className={styles.link}>
          <Link href="/member">MEMBER</Link>
        </li>
        <li className={styles.link}>
          <Link href="/about">GAMES</Link>
        </li>
      </ul>
    </nav>
  );
};
