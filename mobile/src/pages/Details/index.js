import React from 'react';
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import { Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'

import { Container, Header, ReturnButton, Incident, IncidentProperty, IncidentValue, ContactBox, HeroTitle, HeroDescription, Actions, ActionButton, TextButton } from './styles';

export default function Details() {

  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident

  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`

  function navigateBack() {
    navigation.goBack()
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <ReturnButton onPress={navigateBack} >
          <Feather name='arrow-left' size={28} color={'#e82041'}/>
        </ReturnButton>
      </Header>

      <Incident>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>{incident.name} de {incident.city}/{incident.uf}</IncidentValue> 

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.title}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue style={{marginBottom: 0}}>
          {Intl.NumberFormat('pt-BR', 
            { style: 'currency', currency: 'BRL' })
            .format(incident.value)}
        </IncidentValue>
      </Incident>

      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o Herói dessa caso.</HeroTitle>

        <HeroDescription>
          Entre em contato:
        </HeroDescription>

        <Actions>
          <ActionButton onPress={sendWhatsApp}>
            <TextButton>WhatsApp</TextButton>
          </ActionButton>

          <ActionButton onPress={sendEmail}>
            <TextButton>E-mail</TextButton>
          </ActionButton>
        </Actions>
      </ContactBox>

    </Container>
  );
}
