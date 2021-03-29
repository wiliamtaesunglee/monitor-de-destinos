import styled from 'styled-components';

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
  padding: 16px;
  display: flex;
  justify-content: center;
`;
