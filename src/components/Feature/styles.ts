import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 16px 8px;

  img {
    max-width: 100%;
  }

  @media (min-width: 600px) {
    max-width: 800px;
    align-items: space-between;
    justify-content: space-between;
  }
`;

export const TextCard = styled.p`
  color: #663399;
  width: 110px;
  text-align: center;
  margin-top: 16px;
  font-family: nunito;
  font-weight: bold;
`;
