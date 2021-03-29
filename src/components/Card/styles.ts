import styled from 'styled-components';

interface ContainerProps {
  src: string;
}

export const Container = styled.button<ContainerProps>`
  background: ${({ src }) => `url(${src}) no-repeat center`};
  border-radius: 40px 0 40px 0;
  background-size: cover;
  border: none;
  padding: 0 16px;
  width: 220px;
  height: 220px;
  margin: 16px;
  position: relative;
`;

export const TitleContainer = styled.p`
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #663399;
  position: absolute;
  left: 0;
  bottom: 16px;
  font-size: 18px;
  line-height: 97%;
`;
