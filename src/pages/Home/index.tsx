import React from 'react';

import BannerSrc from '../../assets/banner.png';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import { Container, MainSection } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <MainSection>
        <Banner
          src={BannerSrc}
          title="Smiles Viajante permiete que você tenha viagens seguras."
          pathNavigation="/monitor-de-destinos"
        />
      </MainSection>
      <Footer />
    </Container>
  );
};

export default Home;
