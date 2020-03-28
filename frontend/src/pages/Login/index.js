import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import { Container, SectionForm } from './styles';

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Login() {

  const [id, setId] = useState('')

  const history = useHistory()

  async function handleLogin(e){
    e.preventDefault()

    await api.post('/sessions', {
      id
    }).then(function(success){
      console.log(success.data.name)
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', success.data.name)
      history.push('/profile')
    }).catch(function(err){
      console.log(err.response.data.error)
    })
  }

  return (
    <Container>
      <SectionForm>
        <img src={logoImg} alt='Be The Heroe'/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder='ID da sua ONG'
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
