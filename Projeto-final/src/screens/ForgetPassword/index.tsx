import { StyleSheet, Text, View } from 'react-native';
import { Box, Container, ImagePrincipal, Subtitle, Title, Info, LoginArea } from './styles';
import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import unicaplogo from '../../images/unicap-logo1.png'

export default function ForgetPassword(){
    return(
    <Container>
        <Box>
        <Info>
        <ImagePrincipal source={unicaplogo} />
        <Title>Redifinição de Senha</Title>
        </Info>
        <LoginArea>
        <Input iconName="key" placeholder="Digite sua nova senha" secureTextEntry/>
        <Input iconName="key" placeholder="Confirme sua senha" secureTextEntry/>
        <Button text='Entrar' onPress={() => {console.log('oi zézé')}}/>
        <Subtitle>Cancelar</Subtitle>
        </LoginArea>


        </Box>
    </Container>
    )
}

