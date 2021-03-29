import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  MenuItem,
  ItemList,
  MenuItemText,
  EachItem,
} from './styles';

const Menu: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <Container>
      <p>Buscar voos</p>
      <p>Viajar</p>
      <p>Clubes smailes</p>
      <p>Promoções</p>
      <p>Dicas de Acúmulo e Resgate</p>
      <p>Cartão de Crédito GOL Smiles</p>
      <p>Shopping Smiles</p>
      <p>Dicas Smiles</p>
      <p>+ Smiles</p>
      <MenuItem onMouseEnter={handleMouseEnter}>
        <MenuItemText>Monitor de viagens</MenuItemText>
        <ItemList visible={visible} onMouseLeave={handleMouseLeave}>
          <Link to="/destinos-monitorados">Destinos monitorados</Link>
          <br />
          <Link to="/meus-voos">Meus voos</Link>
          <br />
          <Link to="/escolha-seu-destino">Selecione seu destino</Link>
        </ItemList>
      </MenuItem>
    </Container>
  );
};

export default Menu;
