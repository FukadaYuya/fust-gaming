import styles from './index.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <a href="">Top</a>
        </li>
        <li>
          <a href="">News</a>
        </li>
        <li>
          <a href="">Member</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
    </nav>
  );
};
