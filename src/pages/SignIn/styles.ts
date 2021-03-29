import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      margin-bottom: 16px;
      font-family: nunito;
      text-align: left;
    }

    a {
      color: #1e1e1e;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const LinkNavigation = styled(Link)`
  color: #1e1e1e;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  text-decoration: none;
  transition: color 0.2s;

  align-items: center;

  svg {
    margin-right: 16px;
  }

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;

  animation: ${appearFromLeft} 1s;

  img {
    width: 70px;
  }
`;

export const Text = styled.p`
  text-align: center;
`;

export const Divisor = styled.div`
  width: 80%;
  background-color: #ccc;
  height: 1px;
  align-self: center;
  margin-bottom: 64px;
`;
