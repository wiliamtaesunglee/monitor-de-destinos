import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Menu from '../../components/Menu';

import {
  Container,
  MainSection,
  BannerContainer,
  Title,
  CardContainer,
} from './styles';

const DestiniesToChose: React.FC = () => {
  const [destiniesList, setDestiniesList] = useState([]);
  const [requestError, setRequestError] = useState(false);

  const getDestiniesListRequest = async () => {
    try {
      const response = await api.get('place');
      if (response?.data.length > 0) {
        setDestiniesList(response?.data);
      }
    } catch (error) {
      setRequestError(Boolean(error));
    }
  };

  useEffect(() => {
    getDestiniesListRequest();
  }, []);

  return (
    <Container>
      <Header />
      <Menu />
      {!requestError && (
        <MainSection>
          <BannerContainer />
          <Title>
            Conheça todos os destinos que você pode monitorar através de nossos
            canais.
          </Title>
          <CardContainer>
            {destiniesList.map(({ placeId, name, thumbnailUrl }) => (
              <Card
                key={placeId}
                placeId={placeId}
                name={name}
                src={thumbnailUrl}
              />
            ))}
          </CardContainer>
        </MainSection>
      )}
      <Footer />
    </Container>
  );
};

export default DestiniesToChose;
