import React, { FC, useState } from 'react';
import { AddButton, Container, Description, Subtitle, Title, ContainerInput, StyledTextInput, Files, ButtonContainer, Circle, ButtonText } from './styles';
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components/native';


interface ToggleButtonProps {
  title: string;
}

const ToggleButton: FC<ToggleButtonProps> = ({ title }) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleToggle = () => {
    setIsFilled(!isFilled);
  };

  return (
    <ButtonContainer onPress={handleToggle}>
      <Circle isFilled={isFilled} />
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

import Button from '@components/Button';
import theme from 'src/theme';



export default function RegisterFiles() {
  return (
    <Container>
      <Files>
        <ToggleButton title='Ficha de registro 01' />
        <ToggleButton title='Ficha de registro 02' />
      </Files>


      <Button text='Enviar' color={theme.color.default} onPress={() => console.log('heyjude')} />
    </Container>

  );
}

