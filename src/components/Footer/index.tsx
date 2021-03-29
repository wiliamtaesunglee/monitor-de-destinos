import React from 'react';

import logoImg from '../../assets/lg-smiles-white.svg';
import { Container, Text } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
      <div>
        <Text>SMILES FIDELIDADE S.A. CNPJ/MF 05.730.375/0001-20</Text>
        <Text>
          Alameda Rio Negro, 585 - 2º andar Bloco B - Barueri/SP CEP: 06454-000
        </Text>
      </div>
    </Container>
  );
};

export default Header;
