import React from 'react';
import { FiUser, FiBell } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/lg-smiles-white.svg';
import Gol from '../../assets/gol.jpeg';
import { Container, MenuIcon, IconstContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <MenuIcon />
      <Link to="/home">
        <img src={logoImg} alt="logo" />
      </Link>
      <IconstContainer>
        <img src={Gol} alt="logo" />
        <FiUser />
        <FiBell />
      </IconstContainer>
    </Container>
  );
};

export default Footer;
