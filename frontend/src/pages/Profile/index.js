import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import Switch from 'react-switch';
import { shade } from 'polished';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import themes from '../../styles/themes';

import { Container, Header } from './styles';

import logoImg from '../../assets/logo.svg'

import { themeRequest } from '../../store/modules/theme/actions'
import { OngSignOut } from '../../store/modules/ong/actions'

export default function Profile() {

  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)
  const {id, name} = useSelector(state => state.ong)
  
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    async function handleOngs() {
      await api.get('/profile', {
        headers: {
          Authorization: id
        }
      }).then(function(success){
        setIncidents(success.data)
      }).catch(function(err){
        toast.error(err.response.data.error)
      })
    }

    handleOngs()
  }, [id])

  async function handleDelete(id) {
    await api.delete(`/incidents/${id}`, {
      headers: {
        Authorization: id
      }
    }).then(function(success){
      setIncidents(incidents.filter(incident => incident.id !== id))
      toast.success('Caso deletado com sucesso.')
    }).catch(function(err){
      toast.error(err.response.data.error)
    })
  }

  function handleLogout() {
    dispatch(OngSignOut())
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(themeRequest('dark'))
    } else {
      dispatch(themeRequest('light'))
    }
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt='Be The Hero' />
        <span>Bem vinda, {name}</span>

        <Switch
          onChange={toggleTheme}
          checked={themes[theme].title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, themes[theme].colors.primary)}
          onColor={themes[theme].colors.primary}
          
        />

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
