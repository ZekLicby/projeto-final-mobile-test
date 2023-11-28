import { Box, Container, ImagePrincipal, Subtitle, Title, Info, LoginArea } from './styles';
import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import unicaplogo from '../../images/unicap-logo1.png'

export default function PasswordScreen() {
  return (
    <Container>
      <Box>
        <ImagePrincipal source={unicaplogo} />
        <Info>
          <Title>Recuperação de senha</Title>
          <Subtitle>Para redefinir sua  senha,  informe seu email cadastrado e lhe enviaremos um link com as devidas instruções.</Subtitle>
        </Info>
        <LoginArea>
          <Input iconName="mail" placeholder="Digite seu e-mail" secureTextEntry />
          <Button text='Entrar' onPress={() => { console.log('oi zézé') }} />
          <Subtitle>Cancelar</Subtitle>
        </LoginArea>
      </Box>
    </Container>
  )
}

