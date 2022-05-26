import React from 'react';

import { Link } from 'react-router-dom';
import { Container, FakeLink, Form } from './styled';
import AzamonLogo from '../../images/azamon-logo-black.png';

function Login() {
  return (
    <div>
      <Container>
        <Link to="/">
          <img src={AzamonLogo} alt="Azamon logo" />
        </Link>
        <Form>
          <p className="title">Iniciar sessão</p>
          <label htmlFor="name">
            E-mail (telemóvel para contas móveis)
            <input type="text" />
          </label>
          <button type="submit">Continuar</button>
          <p className="privacy">
            Ao criar uma conta, aceita as <FakeLink>Condições de Uso</FakeLink>{' '}
            e o <FakeLink>Aviso de Privacidade</FakeLink> da Amazon.
          </p>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
