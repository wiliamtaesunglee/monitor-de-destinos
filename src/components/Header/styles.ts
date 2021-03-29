import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

export const Container = styled.header`
  background: #ff5a00;
  height: 100px;
  padding: 16px;
  width: 100%;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: nunito;
`;

export const MenuIcon = styled(FiMenu)`
  height: 31px;
  width: 30px;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const IconstContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-evenly;
`;
