import React, { FC, useState } from 'react';
import { AddButton, Box, Container, Description, Subtitle, Title, ContainerInput, StyledTextInput, Info } from './styles';
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


export default function Files() {
  return (
    <ScrollView>
      <Container>
        <Title>Ficha de Registro </Title>
        <Box>
          <Subtitle>Requerente</Subtitle>
          <Input />
          <Subtitle>Endereço completo</Subtitle>
          <Input />
          <Subtitle>Fone</Subtitle>
          <Input />
          <Subtitle>RA</Subtitle>
          <Input />
          <Subtitle>Curso</Subtitle>
          <Input />
          <Subtitle>Assunto</Subtitle>
          <Input />
          <Subtitle>Resumo Final</Subtitle>
          <Input multiline style={{ height: 140, alignItems: 'flex-start', justifyContent: 'flex-start' }} />

        </Box>

      </Container>
    </ScrollView>

  );
}


