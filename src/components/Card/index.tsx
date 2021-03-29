import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, TitleContainer } from './styles';

type CardsProps = {
  placeId: number;
  name: string;
  src: string;
};

const Card: React.FC<CardsProps> = ({ placeId, name, src }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/destino-escolhido',
      state: placeId,
    });
  };

  return (
    <Container src={src} onClick={handleClick}>
      <TitleContainer>{name}</TitleContainer>
    </Container>
  );
};

export default Card;
