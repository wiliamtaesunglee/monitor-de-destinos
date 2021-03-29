import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionCard from '../../components/SectionCard';
import Menu from '../../components/Menu';

import CardOne from '../../assets/cardOne.png';
import CardTwo from '../../assets/cardTwo.png';
import Celphone from '../../assets/celphone.png';
import CardVacation from '../../assets/vacations.png';
import Bandeira from '../../assets/bandeira.png';
import Pcr from '../../assets/pcr.png';
import Turismo from '../../assets/turismo.png';
import Comercio from '../../assets/comercio.png';

import {
  Container,
  MainSection,
  CardImage,
  FeatureConteiner,
  CustomCard,
  Icon,
  TextCard,
  FeatureTitle,
  FeatureSection,
} from './styles';

const TrevelerMonitor: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <MainSection>
        <SectionCard
          showButton
          src={CardOne}
          text="Smiles Monitor é um programa desenvolvido pra você esteja planejando viajar em breve ou tenha uma reserva que foi afetada pela Covid-19, esta página fornecerá todas as informações de que você precisa para reservar com confiança e viajar com segurança durante este período desafiador."
          Component={() => <div />}
        />
        <SectionCard
          justifyContent="space-evenly"
          src={CardTwo}
          textColor="979797"
          title="App Smiles Viajante"
          text="Esteja você planejando viajar em breve ou tenha uma reserva que foi afetada pela Covid-19, aqui você ficará por dentro de todas as informações de que você precisa para reservar com confiança e viajar com segurança durante este período desafiador."
          Component={() => (
            <CardImage width={300}>
              <img src={Celphone} alt="celphone" />
            </CardImage>
          )}
        />
        <CustomCard>
          <FeatureTitle>Descubra como está seu destino</FeatureTitle>
          <FeatureSection>
            <FeatureConteiner>
              <Icon src={Bandeira} alt="bandeira laranja" />
              <TextCard>Bandeira Laranja</TextCard>
            </FeatureConteiner>

            <FeatureConteiner>
              <Icon src={Pcr} alt="bandeira laranja" />
              <TextCard>Bandeira Laranja</TextCard>
            </FeatureConteiner>
            <FeatureConteiner>
              <Icon src={Turismo} alt="bandeira laranja" />
              <TextCard>Bandeira Laranja</TextCard>
            </FeatureConteiner>

            <FeatureConteiner>
              <Icon src={Comercio} alt="bandeira laranja" />
              <TextCard>Bandeira Laranja</TextCard>
            </FeatureConteiner>
          </FeatureSection>
        </CustomCard>
        <SectionCard
          showButton
          justifyContent="space-between"
          reverse
          title="Aproveite sua viagens"
          src="https://images.unsplash.com/photo-1613144488732-19df6d7e8656?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          text="Criamos uma monitoria exclusiva dos seus destinos favoritos para que fique por dentro das noticias com agilidade e possa ter uma viagem melhor e mais segura. Em seus destinos  você poderá ver também as exigências de cada destino Gol e se preparar sem surpresas."
          Component={() => (
            <CardImage width={400}>
              <img src={CardVacation} alt="vacation" />
            </CardImage>
          )}
        />
      </MainSection>
      <Footer />
    </Container>
  );
};

export default TrevelerMonitor;
