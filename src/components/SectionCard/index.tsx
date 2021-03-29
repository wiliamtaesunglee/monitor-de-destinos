import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Title,
  Section,
  TextContainer,
  Text,
  Button,
} from './styles';

type SectionCardProps = {
  src: string;
  title?: string;
  reverse?: boolean;
  Component: React.FC;
  text: string;
  textColor?: string;
  justifyContent?: string;
  showButton?: boolean;
};

const SectionCard: React.FC<SectionCardProps> = ({
  src,
  title = '',
  reverse = false,
  Component,
  text,
  textColor,
  justifyContent,
  showButton = false,
}) => {
  const histoy = useHistory();

  const handlePress = () => {
    histoy.push('/escolha-seu-destino');
  };

  return (
    <Container src={src}>
      <Section reverse={reverse} justifyContent={justifyContent}>
        <TextContainer>
          <Title>{title}</Title>
          <Text textColor={textColor}>{text}</Text>
          {showButton && <Button onClick={handlePress}>Saiba mais</Button>}
        </TextContainer>
        <Component />
      </Section>
    </Container>
  );
};

export default SectionCard;
