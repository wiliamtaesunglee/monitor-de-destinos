import styled, { css } from 'styled-components';

interface props {
  src: string;
}

interface SectionProps {
  reverse: boolean;
  justifyContent?: string;
}

interface TextProps {
  textColor?: string;
}

export const Container = styled.div<props>`
  width: 100%;
  height: 500px;
  background: ${({ src }) => `url(${src}) no-repeat center`};
  background-size: cover;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;

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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  font-family: nunito;
  font-weight: bold;
  color: #fff;
  font-size: 20px;
`;

export const Title = styled.p`
  color: #fe5a02;
  margin-bottom: 32px;
  font-size: 14px;

  @media (min-width: 600px) {
    font-size: 22px;
  }
`;

export const Text = styled.p<TextProps>`
  font-size: 12px;
  ${({ textColor }) =>
    textColor &&
    css`
      color: #${textColor};
    `}

  @media (min-width: 600px) {
    font-size: 16px;
  }
`;

export const Section = styled.div<SectionProps>`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
    ${({ justifyContent }) =>
      justifyContent &&
      css`
        justify-content: ${justifyContent};
      `}
  }
`;

export const Button = styled.button`
  width: 120px;
  padding: 8px;
  border: none;
  background-color: #fe5a02;
  color: white;
  border-radius: 8px;
  margin-top: 16px;

  &:hover {
    opacity: 0.7;
  }
`;
