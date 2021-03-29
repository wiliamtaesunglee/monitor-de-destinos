import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Feature from '../../components/Feature';
import Menu from '../../components/Menu';
import Beach from '../../assets/beach.png';
import PickerDate from '../../assets/pickerDate.png';

import {
  Container,
  MainSection,
  BannerContainer,
  LocationName,
  ButtonContainer,
  CardContainer,
  SecondCardSection,
  SecondCardImage,
  TextSection,
  TextTitle,
  Text,
  PickDateConteiner,
  ReportStatus,
} from './styles';

const ChosedTravel: React.FC<RouteComponentProps> = ({ history }) => {
  const [reportStatus, setReportStatus] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [travelData, setTravelData] = useState({
    description: '',
    descriptionUrl: '',
    headerUrl: '',
    itens: [
      {
        image: '',
        name: '',
      },
    ],
    lastUpdated: '',
    name: '',
    placeId: 0,
    thumbnailUrl: '',
    isMonitored: false,
  });

  const { location } = history;

  useEffect(() => {
    const getTravelData = async () => {
      try {
        const response = await api.get(`/place/${location.state}`);
        setTravelData(response.data);
        setReportStatus(response.data.isMonitored);
      } catch (error) {
        setRequestError(Boolean(error));
      }
    };

    getTravelData();
  }, [location]);

  const handleClick = () => {
    const getTravelData = async () => {
      try {
        await api.get(`/monitor/${location.state}`);
        setReportStatus(true);
      } catch (error) {
        setRequestError(Boolean(error));
      }
    };

    getTravelData();
  };

  return (
    <Container>
      <Header />
      <Menu />
      <MainSection>
        <BannerContainer src={travelData.headerUrl}>
          {reportStatus && (
            <ReportStatus>Este destino está sendo monitorado</ReportStatus>
          )}
          <LocationName>{travelData.name.toUpperCase()}</LocationName>
          <ButtonContainer>
            {!reportStatus && (
              <Button onClick={handleClick}>Monitorar local</Button>
            )}
          </ButtonContainer>
        </BannerContainer>
        <CardContainer>
          {travelData.itens.map(item => (
            <Feature
              url={item.image}
              name={item.name}
              alt={item.name}
              key={item.name}
            />
          ))}
        </CardContainer>
        <SecondCardSection>
          <SecondCardImage>
            <img src={Beach} alt="praia" />
          </SecondCardImage>
          <TextSection>
            <TextTitle>{travelData.name.toUpperCase()}</TextTitle>
            <Text>{travelData.description}</Text>
          </TextSection>
        </SecondCardSection>
        <PickDateConteiner>
          <img src={PickerDate} alt="picker" />
        </PickDateConteiner>
      </MainSection>
      <Footer />
    </Container>
  );
};

export default ChosedTravel;
