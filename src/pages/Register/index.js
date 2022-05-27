import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

import { Container, FakeLink, Form } from './styled';
import AzamonLogo from '../../images/azamon-logo-black.png';
import {
  auth,
  registerWithEmailAndPassword,
} from '../../DB/firebase';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const register = () => {
    if (!name) toast.error('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/');
  }, [user, loading]);

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
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome e Apelido" />
          </label>
          <label htmlFor="email">
            Número de telemóvel ou email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="name">
            Palavra-passe
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Pelo menos 6 caracteres"
            />
          </label>
          <label htmlFor="name">
            Introduza novamente a palavra-passe
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </label>
          <button type="button" onClick={register}>Continuar</button>
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
