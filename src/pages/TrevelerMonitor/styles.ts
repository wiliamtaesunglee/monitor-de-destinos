import styled from 'styled-components';

interface CardProps {
  width: number;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 100px;
  }
`;

export const MainSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardImage = styled.div<CardProps>`
  width: ${({ width }) => `${width}px`};
  margin-top: 16px;
  display: flex;
  align-items: center;
  flex-direction: center;
  padding: 16px;

  img {
    width: 100%;

    @media (min-width: 600px) {
      width: 100%;
    }
  }

  @media (min-width: 600px) {
    margin: 0;
  }
`;

export const CustomCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 600px) {
    height: 400px;
  }
`;

export const FeatureSection = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const FeatureConteiner = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    max-width: 800px;
    align-items: space-between;
    justify-content: space-between;
  }
`;

export const Icon = styled.img`
  max-height: 100px;
`;

export const TextCard = styled.p`
  color: #663399;
  width: 110px;
  text-align: center;
  margin-top: 16px;
  font-family: nunito;
  font-weight: bold;
`;

export const FeatureTitle = styled.p`
  width: 100%;
  text-align: center;
  color: #fe5a02;
  font-family: nunito;
  margin: 16px 0 32px;
  font-weight: bold;

  @media (min-width: 600px) {
    text-align: left;
    max-width: 800px;
    align-items: space-between;
    justify-content: space-between;
  }
`;
