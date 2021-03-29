import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid #ccc;
  color: #ccc;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
      border-color: #ccc;
    `}

      ${({ isFocused }) =>
        isFocused &&
        css`
          border-color: #ff9000;
          color: #ff9000;
        `}

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    padding-right: 16px;
    color: #666360;
    font-weight: bold;
    font-size: 14px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
