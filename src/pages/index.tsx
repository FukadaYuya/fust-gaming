import { Top } from '@/components/templates';
import { microCMSClient } from '@/libs/client';
import type { GetServerSideProps, NextPage } from 'next';
import { members, games } from '../types/cms-types';

type Props = {
  members: members[];
  games: games[];
};

const Home = (props: Props) => {
  return <Top {...props} />;
};

export default Home;

export const getStaticProps: GetServerSideProps = async () => {
  const members = await microCMSClient.gets('members', {
    limit: 10000,
    fields: ['id', 'name', 'icon_img'],
  });
  const games = await microCMSClient.gets('games', {
    limit: 10000,
    fields: ['title', 'icon_img', 'id', 'link_url'],
  });

  // console.log(members);
  // console.log(games);
  return {
    props: {
      members: members?.contents,
      games: games?.contents,
    },
  };
};
