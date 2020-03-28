import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg'

export default function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    await api.post('/ongs', {
      name,
      email,
      whatsapp,
      city,
      uf
    }).then(function(success){
      console.log(success.status)
      history.push('/')
    }).catch(function(err){
      console.log(err.response.data.error)
    })
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          
          <Link className='link' to='/'>
            <FiArrowLeft size={16} color='#e02041' />Já possuo uma conta
          </Link>
        </section>

        <form onSubmit={handleRegister} >
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Nome da ONG'
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
            placeholder='E-mail'
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder='WhatsApp'
          />

          <div className='input-group'>
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder='Cidade'
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder='UF'
              style={{ width: '80px' }}
            />
          </div>

          <button className='button' type='submit' >
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
