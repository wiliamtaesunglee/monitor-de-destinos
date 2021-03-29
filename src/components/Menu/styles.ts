import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

export const Container = styled.header`
  background: #fff;
  padding: 8px 16px;
  width: 100%;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: nunito;
  color: #898998;
  box-shadow: 0 2px 6px #898998;
  font-size: 12px;
`;

export const MenuIcon = styled(FiMenu)`
  height: 31px;
  width: 30px;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const MenuItem = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
`;

export const MenuItemText = styled.p`
  color: #ff5a00;
  font-weight: bold;
`;

interface ItemListProps {
  visible: boolean;
}

export const ItemList = styled.div<ItemListProps>`
  position: absolute;
  top: 35px;
  border: 10px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: white;
  z-index: 1000;
  color: #898998;
  padding: 16px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 6px #898998;

  a {
    &:hover {
      color: #ff5a00;
    }
    font-size: 14px;
    font-weight: bold;
    padding: 8px 0;
    color: #898998;
  }
`;

export const EachItem = styled.p`
  &:hover {
    color: #ff5a00;
  }
  font-size: 14px;
  font-weight: bold;
  padding: 8px 0;
`;
