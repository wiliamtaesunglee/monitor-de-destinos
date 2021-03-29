import styled from 'styled-components';

import Aviao from '../../assets/gol-aviao.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100px;
  }
`;

export const MainSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: nunito;
  font-size: 22px;
  width: 100%;
  max-width: 800px;
  color: #ff5a00;
  text-align: left;
  margin: 32px 0;
  font-weight: bold;
`;

export const FlysListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 16px 16px;
`;

export const FlysListHead = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  background-color: #ff5a00;
  flex-direction: column;
  font-family: nunito;
`;

export const FlyHeadeTitle = styled.p``;

export const FlyHeadText = styled.p`
  color: white;
  font-weight: bold;
`;

export const FlySectionDetails = styled.div`
  border-bottom: 1px solid #898998;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const Text = styled.div`
  color: #898998;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const TextContainer = styled.div``;

interface ButtonProps {
  activate?: boolean;
}

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
  width: 170px;
  color: white;
  background-color: ${({ activate }) => (activate ? '#ff5a00' : '#898998')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  opacity: 1;
  border: none;
  font-size: 14px;

  &:hover {
    opacity: 0.5;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckBox = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #ff5a00;
  background-color: transparent;
  margin-right: 16px;
`;

export const NavigatorButton = styled.button`
  width: 250px;
  color: white;
  background-color: #ff5a00;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  opacity: 1;
  border: none;
  font-size: 20px;
  margin: 32px 0 64px;
`;
