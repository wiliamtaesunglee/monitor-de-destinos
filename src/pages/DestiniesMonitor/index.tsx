import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import {
  Container,
  Title,
  FlysListContainer,
  CheckBox,
  FlySectionDetails,
  MainContent,
  Text,
  MainSection,
  Section,
  Button,
  ButtonContainer,
  NavigatorButton,
} from './styles';

const DestiniesMonitor: React.FC = () => {
  const histoy = useHistory();
  const [requestError, setRequestError] = useState(false);
  const [destiniesList, setDestiniesList] = useState([
    {
      name: '',
      placeId: '',
      thumbnailUrl: '',
    },
  ]);

  const getDestiniesListRequest = async () => {
    try {
      const response = await api.get('monitor');
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

  const handleClick = (placeId: string) => {
    const getTravelData = async () => {
      try {
        await api.get(`/unmonitor/${placeId}`);
        const filterList = destiniesList.filter(
          item => item.placeId !== placeId,
        );
        if (filterList.length > 0) {
          setDestiniesList(filterList);
        } else {
          setDestiniesList([
            {
              name: '',
              placeId: '',
              thumbnailUrl: '',
            },
          ]);
        }
      } catch (error) {
        setRequestError(Boolean(error));
      }
    };

    getTravelData();
  };

  const handleClickNavigation = () => {
    histoy.push('/escolha-seu-destino');
  };

  return (
    <Container>
      <Header />
      <Menu />
      <MainSection>
        <Title>Destinos Monitorados</Title>
        {destiniesList[0].placeId &&
          destiniesList.map(item => (
            <Section>
              <FlysListContainer>
                <FlySectionDetails>
                  <MainContent>
                    <CheckBox />
                    <Text>{item.name}</Text>
                  </MainContent>
                  <ButtonContainer>
                    <Button activate onClick={() => handleClick(item.placeId)}>
                      Cancelar monitoria
                    </Button>
                  </ButtonContainer>
                </FlySectionDetails>
              </FlysListContainer>
            </Section>
          ))}
        <NavigatorButton onClick={handleClickNavigation}>
          Adicionar novo destino
        </NavigatorButton>
      </MainSection>
      <Footer />
    </Container>
  );
};

export default DestiniesMonitor;
