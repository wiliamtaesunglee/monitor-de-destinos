import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, Title } from './styles';

type BannerProps = {
  src: string;
  title: string;
  pathNavigation: string;
};

const Banner: React.FC<BannerProps> = ({ src, title, pathNavigation }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(pathNavigation);
  };

  return (
    <Container src={src} onClick={handleClick}>
      <Title>{title}</Title>
      <Link to={pathNavigation}>Saiba mais</Link>
    </Container>
  );
};

export default Banner;
