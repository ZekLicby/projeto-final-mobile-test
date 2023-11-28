import { Box, Container, ImagePrincipal, Subtitle, Title, Info, LoginArea } from './styles';
import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import unicaplogo from '../../images/unicap-logo1.png'
import theme from 'src/theme';

export default function Login({navigation}: any) {

    const goProfile = () => {
        navigation.navigate('DrawerScreens')
    }

    return (
        <Container>
            <Box>
                <ImagePrincipal source={unicaplogo} />
                <Info>
                    <Title>Bem vindo!</Title>
                    <Subtitle>Realize login na sua conta</Subtitle>
                </Info>
                <LoginArea>
                    <Input iconName="user" placeholder="Nº de matrícula" />
                    <Input iconName="lock" secureTextEntry />
                    <Button text='Entrar' color={theme.color.default} onPress={() => {goProfile()}} />
                    <Subtitle>Esqueceu sua senha?</Subtitle>
                </LoginArea>
            </Box>
        </Container>
    )
}

