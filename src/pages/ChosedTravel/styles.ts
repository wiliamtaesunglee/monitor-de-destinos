import styled from 'styled-components';

interface BannerProps {
  src: string;
}

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

export const BannerContainer = styled.div<BannerProps>`
  width: 100%;
  height: 500px;
  background: ${({ src }) => `url(${src}) no-repeat center`};
  background-size: cover;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  flex-direction: column;
  position: relative;
`;

export const LocationName = styled.p`
  font-size: 36px;
  color: white;
  font-family: nunito;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  max-width: 200px;
`;

export const CardContainer = styled.div`
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 64px 0;
  justify-content: center;
  flex-grow: 1;
`;

export const SecondCardSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  justify-content: space-between;
  margin: 32px 0;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const SecondCardImage = styled.div`
  width: 400px;

  img {
    width: 100%;
  }
`;

export const TextSection = styled.div`
  padding: 8px;
  width: 350px;
  font-family: nunito;
`;

export const TextTitle = styled.p`
  color: #fe5a02;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #979797;
  font-size: 14px;
`;

export const PickDateConteiner = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;

  img {
    width: 100%;
  }
`;

export const ReportStatus = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #fe5a02;
  opacity: 0.8;
  color: white;
  font-family: nunito;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
