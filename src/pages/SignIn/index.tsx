import React, { useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory, Link } from 'react-router-dom';

import logoImg from '../../assets/lg-smiles-orange.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Background,
  AnimationContainer,
  LinkNavigation,
  Text,
  Divisor,
} from './styles';

type FormHandlesProps = FormHandles;

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandlesProps>(null);
  const histoy = useHistory();

  const handleSubmit = () => {
    histoy.push('/home');
  };

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="smiles" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Acesse sua conta</h1>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" placeholder="Password" type="password" />
            <Button>Entrar</Button>
            <Link to="/forgot-password">Esqueci meu numero smiles</Link>
          </Form>
          <Divisor />
          <Text>Ainda não é cliente Smiles?</Text>
          <LinkNavigation to="/signup">
            Crie sua conta
            <FiChevronRight />
          </LinkNavigation>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
