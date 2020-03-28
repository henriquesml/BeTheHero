import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import api from '../../services/api'

import logoImg from '../../assets/logo.png'

import { Container, Header, HeaderText, HeaderTextBold, Title, Paragraph, IncidentsList, Incident, IncidentProperty, IncidentValue, ShowDetails, DetailsButton } from './styles';

export default function Incidents() {
  const navigation = useNavigation()

  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  async function loadIncidents(){
    if (loading) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)

    const response = await api.get('/incidents', {
      params: { page }
    })

    setIncidents([...incidents, ...response.data])
    setTotal(response.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    loadIncidents()
  }, [])

  function navigateToDetail(incident){
    navigation.navigate('Details', { incident })
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos.</HeaderTextBold>
        </HeaderText>
      </Header>

      <Title>
        Bem-vindo!
      </Title>

      <Paragraph>
        Escolha um dos casos abaixo e salve o dia.
      </Paragraph>

      <IncidentsList
        data={incidents}
        keyExtrator={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        renderItem={
          ({item: incident}) => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat('pt-BR', 
                { style: 'currency', currency: 'BRL' })
                .format(incident.value)}
            </IncidentValue>

            <ShowDetails
              onPress={() => navigateToDetail(incident)}
            >
              <DetailsButton>
                Ver mais detalhes
              </DetailsButton>

              <Feather name='arrow-right' size={16} color='#e02041'/>
            </ShowDetails>
          </Incident>
        )}
      />
    </Container>
  );
}
