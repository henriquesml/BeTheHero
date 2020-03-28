import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {

  const ongId = localStorage.getItem('ongId')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()

    const data = {
      title,
      description,
      value
    }

    await api.post('/incidents', data, {
      headers: {
        Authorization: ongId,
      }
    }).then(function(success){
      
      history.push('/profile')
    }).catch(function(err){
      console.log(err.response.data.error)
    })
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontra um herói para resolver isso.</p>
          
          <Link className='link' to='/profile'>
            <FiArrowLeft size={16} color='#e02041' />Voltar
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Título do caso'
            
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='Descrição'
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Valor em reais'
          />

          <button className='button' type='submit' >
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
