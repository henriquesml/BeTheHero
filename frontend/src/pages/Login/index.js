import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import { Container, SectionForm } from './styles';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Login() {
  return (
    <Container>
      <SectionForm>
        <img src={logoImg} alt='Be The Heroe'/>

        <form>
          <h1>Faça seu Login</h1>

          <input placeholder='ID da sua ONG' />
          <button className='button' type='submit' >Entrar</button>

          <a href='/register'>
            <FiLogIn size={16} color='#e02041' />Não tenho cadastro
          </a>
        </form>
      </SectionForm>

      <img src={heroesImg} alt='Heroes'/>
    </Container>
  );
}
