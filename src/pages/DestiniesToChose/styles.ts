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

export const BannerContainer = styled.div`
  width: 100%;
  height: 500px;
  background: ${`url(${Aviao}) no-repeat center`};
  background-size: cover;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Title = styled.p`
  font-family: nunito;
  font-size: 22px;
  width: 100%;
  max-width: 500px;
  color: #979797;
  text-align: center;
`;

export const CardContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 32px 0 64px;
  justify-content: center;
`;

export const LocationName = styled.p``;
