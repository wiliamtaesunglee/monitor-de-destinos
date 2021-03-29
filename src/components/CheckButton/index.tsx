import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type CheckButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  checked: boolean;
};

const CheckButton: React.FC<CheckButtonProps> = ({ checked }) => {
  return <Container checked={checked} />;
};

export default CheckButton;
