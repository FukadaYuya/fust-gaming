import styles from './index.module.scss';
import Image from 'next/image';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Link from 'next/link';
import '@splidejs/splide/css';
import { members } from '@/types/cms-types';
import { useState } from 'react';

export type Props = {
  members: members[];
};

type ComponentProps = {
  toggle: boolean;
  setToggle: (v: boolean) => void;
} & Props;

const Component = ({ members, toggle, setToggle }: ComponentProps) => {
  return (
    <div className={styles.module}>
      <div
        className={styles.player_view}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {!toggle ? (
          <div className={styles.triangle_wrapper}>
            <div className={styles.triangle}></div>
            <div className={styles.text}>
              <p>PLAYER</p>
              <p>VIEW</p>
            </div>
          </div>
        ) : (
          <div className={styles.cards_wrapper}>
            <div className={styles.text}>
              <p>PLAYER</p>
            </div>
            <div className={styles.card_list}>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
              <div className={styles.card}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const PlayerView = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Component {...props} toggle={toggle} setToggle={setToggle}></Component>
  );
};
