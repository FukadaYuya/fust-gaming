import styles from './index.module.scss';
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <Link href=".">Top</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
        <li>
          <Link href="/member">Member</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
