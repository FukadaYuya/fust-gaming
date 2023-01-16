import { Games as TemplateGames } from '@/components/templates';
import type { GetServerSideProps } from 'next';
import { games } from '@/types/cms-types';
import { microCMSClient } from '@/libs/client';

type Props = {
  games: games[];
};

const Games = (props: Props) => {
  return <TemplateGames {...props} />;
};

export default Games;

export const getStaticProps: GetServerSideProps = async () => {
  const games = await microCMSClient.gets('games', {
    limit: 10000,
    fields: ['icon_img', 'link_url', 'title'],
  });
  return {
    props: {
      games: games?.contents || [],
    },
  };
};
