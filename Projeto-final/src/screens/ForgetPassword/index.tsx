import { Box, Container, ImagePrincipal, Subtitle, Title, Info, LoginArea } from './styles';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import unicaplogo from '../../images/unicap-logo1.png'
import theme from 'src/theme';
import Toast from '@components/Toast';

export default function ForgetPassword() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000); 
  };

  return (
    <Container>
      <Box>
        <Info>
          <ImagePrincipal source={unicaplogo} />
          <Title>Redifinição de Senha</Title>
        </Info>
        <LoginArea>
          <Input iconName="key" placeholder="Digite sua nova senha" secureTextEntry />
          <Input iconName="key" placeholder="Confirme sua senha" secureTextEntry />
          <Button text='Entrar' color={theme.color.default} onPress={handleShowToast} />
          {showToast && <Toast message="Senha alterada com sucesso!" />}

          <Subtitle>Cancelar</Subtitle>
        </LoginArea>
      </Box>
    </Container>
  )
}

