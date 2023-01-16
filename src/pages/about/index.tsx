import { About as TemplateAbout } from '@/components/templates';
import type { GetServerSideProps } from 'next';
import { about } from '@/types/cms-types';
import { microCMSClient } from '@/libs/client';

type Props = {
  about: about;
};

const About = (props: Props) => {
  return <TemplateAbout {...props} />;
};

export default About;

export const getStaticProps: GetServerSideProps = async () => {
  const about = await microCMSClient.get('about', '', {
    fields: ['description', 'title'],
  });
  return {
    props: {
      about,
    },
  };
};
