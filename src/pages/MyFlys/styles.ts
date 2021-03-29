import styled from 'styled-components';

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
  border: 1px solid #898998;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
`;

export const Text = styled.div`
  color: #898998;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
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
  border: 5px;
  color: white;
  font-weight: bold;
  background-color: ${({ activate }) => (activate ? '#ff5a00' : '#898998')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  opacity: 1;
  border: none;

  &:hover {
    opacity: 0.7;
  }
`;
