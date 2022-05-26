import React from 'react';

import { Link } from 'react-router-dom';
import { Container, FakeLink, Form } from './styled';
import AzamonLogo from '../../images/azamon-logo-black.png';

function Register() {
  return (
    <div>
      <Container>
        <Link to="/">
          <img src={AzamonLogo} alt="Azamon logo" />
        </Link>
        <Form>
          <p className="title">Criar conta</p>
          <label htmlFor="name">
            O seu nome
            <input type="text" placeholder="Nome e Apelido" />
          </label>
          <label htmlFor="name">
            Número de telemóvel ou email
            <input type="text" />
          </label>
          <label htmlFor="name">
            Palavra-passe
            <input type="password" placeholder="Pelo menos 6 caracteres" />
          </label>
          <label htmlFor="name">
            Introduza novamente a palavra-passe
            <input type="password" />
          </label>
          <button type="submit">Continuar</button>
          <p className="privacy">
            Ao criar uma conta, aceita as <FakeLink>Condições de Uso</FakeLink>{' '}
            e o <FakeLink>Aviso de Privacidade</FakeLink> da Amazon.
          </p>
          <div className="divider"></div>
          <div className="footer">
            <span>
              Já tem uma conta? <Link to="/login">Iniciar sessão</Link>
            </span>
            <br></br>
            <span>
              A fazer compras para fins profissionais?{' '}
              <FakeLink>Crie uma conta de empresa grátis</FakeLink>
            </span>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
