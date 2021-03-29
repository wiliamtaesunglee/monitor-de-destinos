import React, { ButtonHTMLAttributes } from 'react';

import { Container, TextCard } from './styles';

type FeatureProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  url: string;
  alt: string;
  name: string;
};

const Feature: React.FC<FeatureProps> = ({ url, alt, name }) => {
  return (
    <Container>
      <img src={url} alt={alt} />
      <TextCard>{name}</TextCard>
    </Container>
  );
};

export default Feature;
