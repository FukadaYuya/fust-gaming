import styles from './index.module.scss';
import { Header, Footer } from '@/components/molecules';
import { about } from '@/types/cms-types';
import { AboutContent } from '@/components/organisms';

type Props = {
  about: about;
};

export const About = ({ about }: Props) => {
  return (
    <>
      <Header />
      <main>
        <AboutContent description={about.description} />
      </main>
      <Footer />
    </>
  );
};
