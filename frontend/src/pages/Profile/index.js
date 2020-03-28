import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import { Container, Header } from './styles';

import logoImg from '../../assets/logo.svg'

export default function Profile() {

  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')
  const [incidents, setIncidents] = useState([])

  const history = useHistory()

  useEffect(() => {
    async function handleOngs() {
      await api.get('/profile', {
        headers: {
          Authorization: ongId
        }
      }).then(function(success){
        setIncidents(success.data)
      }).catch(function(err){
        console.log(err.response.data.error)
      })
    }

    handleOngs()
  }, [ongId])

  async function handleDelete(id) {
    await api.delete(`/incidents/${id}`, {
      headers: {
        Authorization: ongId
      }
    }).then(function(success){
      setIncidents(incidents.filter(incident => incident.id !== id))
    }).catch(function(err){
      console.log(err.response.data.error)
    })
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt='Be The Hero' />
        <span>Bem vinda, {ongName}</span>

        <Link className='button' to='/incidents/new' >Cadastrar novo caso</Link>

        <button title='Sair' onClick={handleLogout} type='button'>
          <FiPower size={18} color='#E02041' />
        </button>
      </Header>

      <h1>
        Casos cadastrados
      </h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type='button' onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color='#a8a8b3' />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
