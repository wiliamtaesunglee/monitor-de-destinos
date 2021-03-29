import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import {
  Container,
  Title,
  FlysListContainer,
  FlysListHead,
  FlyHeadeTitle,
  FlySectionDetails,
  TextContainer,
  Text,
  MainSection,
  Section,
  Button,
  ButtonContainer,
} from './styles';

const MyFlys: React.FC = () => {
  const [requestError, setRequestError] = useState(false);
  const [destiniesList, setDestiniesList] = useState([
    {
      arriveDateTime: '',
      departDateTime: '',
      destinationPlaceId: 0,
      destinyCode: '',
      destinyName: '',
      duration: '',
      locatorCode: '',
      monitored: true,
      originCode: '',
      originName: '',
      smilesId: 0,
    },
  ]);

  const getDestiniesListRequest = async () => {
    try {
      const response = await api.get('/flights');
      setDestiniesList(response.data);
    } catch (error) {
      setRequestError(Boolean(error));
    }
  };

  useEffect(() => {
    getDestiniesListRequest();
  }, []);

  const handleClick = (destinationPlaceId: number) => {
    const getTravelData = async () => {
      try {
        await api.get(`/monitor/${destinationPlaceId}`);
      } catch (error) {
        setRequestError(Boolean(error));
      }
    };

    const filterItems = destiniesList.map(item => {
      if (item.destinationPlaceId === destinationPlaceId) {
        return {
          ...item,
          monitored: true,
        };
      }
      return item;
    });

    setDestiniesList(filterItems);

    getTravelData();
  };

  return (
    <Container>
      <Header />
      <Menu />
      <MainSection>
        <Title>Meus voos</Title>
        {destiniesList.map(item => (
          <Section>
            <FlysListContainer>
              <FlysListHead>
                <FlyHeadeTitle>{item.originName}</FlyHeadeTitle>
              </FlysListHead>
              <FlySectionDetails>
                <Text>Origem</Text>
                <TextContainer>
                  <Text>{item.originCode}</Text>
                  <Text>{item.originName}</Text>
                </TextContainer>

                <TextContainer>
                  <Text>{item.destinyCode}</Text>
                  <Text>{item.destinyName}</Text>
                </TextContainer>
                <Text>Destino</Text>
              </FlySectionDetails>
            </FlysListContainer>
            <ButtonContainer>
              <Button
                activate={!item.monitored}
                onClick={() => handleClick(item.destinationPlaceId)}
              >
                {!item.monitored ? 'Monitorar Destino' : 'Destino Monitorado'}
              </Button>
              <Button activate={false}>Bagagens</Button>
              <Button activate={false}>Escoher assento</Button>
              <Button activate={false}>Check-in</Button>
              <Button activate={false}>Seguro viagem</Button>
              <Button activate={false}>adastrar celular</Button>
            </ButtonContainer>
          </Section>
        ))}
      </MainSection>
      <Footer />
    </Container>
  );
};

export default MyFlys;
