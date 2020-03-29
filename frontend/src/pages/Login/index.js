import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import { Container, SectionForm } from './styles';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

import { OrgRequest } from '../../store/modules/org/actions'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  async function handleLogin(e){
    console.log('form: ', email, password)
    e.preventDefault()
    dispatch(OrgRequest(email, password))
  }

  return (
    <Container>
      <SectionForm>
        <img src={logoImg} alt='Be The Heroe'/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='E-mail da sua ONG'
          />

          <input
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
            placeholder='Senha da sua ONG'
          />
          <button className='button' type='submit' >Entrar</button>

          <Link className='link' to='/register'>
            <FiLogIn size={16} color='#e02041' />Não tenho cadastro
          </Link>
        </form>
      </SectionForm>

      <img src={heroesImg} alt='Heroes'/>
    </Container>
  );
}
