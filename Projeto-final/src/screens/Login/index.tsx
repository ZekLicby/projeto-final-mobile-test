import { StyleSheet, Text, View } from 'react-native';
import { Box, Container, ImagePrincipal, Subtitle, Title, Info, LoginArea } from './styles';
import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import unicaplogo from '../../images/unicap-logo1.png'

export default function Login(){
    return(
    <Container>
        <Box>
        <ImagePrincipal source={unicaplogo} />
        <Info>
        <Title>Bem vindo!</Title>
        <Subtitle>Realize login na sua conta</Subtitle>
        </Info>
        <LoginArea>
        <Input iconName="user" placeholder="Nº de matrícula" />
        <Input iconName="lock" secureTextEntry/>
        <Button text='Entrar' onPress={console.log('oi zézé')}/>
        <Subtitle>Esqueceu sua senha?</Subtitle>
        </LoginArea>


        </Box>
    </Container>
    )
}

