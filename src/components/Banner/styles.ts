import styled from 'styled-components';

interface props {
  src: string;
}

export const Container = styled.div<props>`
  width: 100%;
  max-width: 1200px;
  height: 400px;
  background: ${({ src }) => `url(${src}) no-repeat center`};
  color: white;
  display: flex;
  justify-content: center;
  padding: 16px;
  flex-direction: column;
  border-radius: 40px 0 40px 0;

  a {
    padding-top: 16px;
    color: #ff9000;
    font-weight: bold;
    font-family: nunito;

    @media (min-width: 600px) {
      font-size: 22px;
    }
  }
`;

export const Title = styled.p`
  width: 150px;
  color: #1c1c1c;
  font-family: nunito;
  font-weight: bold;

  @media (min-width: 600px) {
    color: #fff;
    width: 250px;
    font-size: 20px;
  }
`;
