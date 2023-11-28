import React, { FC, useState } from 'react';
import { AddButton, ButtonText, Container, Description, Subtitle, Title, ContainerInput, StyledTextInput, Info } from './styles';
import { TextInputProps, ScrollView } from 'react-native';
import Button from '@components/Button';
import theme from 'src/theme';

interface InputProps extends TextInputProps {
}

const Input: FC<InputProps> = ({ style, ...otherProps }) => {
  const [text, setText] = useState<string>('');

  return (
    <ContainerInput>
      <StyledTextInput
        onChangeText={(value) => setText(value)}
        value={text}
        style={style}
        {...otherProps}
      />
    </ContainerInput>
  );
};


export default function AddColaborator() {
  return (
    <ScrollView>
      <Container>
        <Title>Cadastro de Colaborador</Title>
        <Subtitle>Nome</Subtitle>
        <Input />
        <Subtitle>N° de matrícula</Subtitle>
        <Input />
        <Subtitle>E-mail</Subtitle>
        <Input />
        <Subtitle>Cargo</Subtitle>
        <Input />
        <Subtitle>Data de Nascimento</Subtitle>
        <Input autoComplete='birthdate-day' keyboardType='number-pad' />
        <Subtitle>Setor</Subtitle>
        <Input />
        <Info>
          <Button width={144} text='Cadastrar' color={theme.color.default} onPress={() => { console.log('Fala, Zézé!') }} />
          <Button width={144} text='Cancelar' color={theme.color.second} onPress={() => { console.log('Fala, Zézé!') }} />
        </Info>

      </Container>
    </ScrollView>

  );
}


