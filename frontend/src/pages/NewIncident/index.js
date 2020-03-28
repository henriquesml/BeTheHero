import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
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

        <form>
          <input placeholder='Título do caso'/>
          <textarea placeholder='Descrição'/>
          <input placeholder='Valor em reais'/>

          <button className='button' type='submit' >
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
