import { ButtonContainer, ButtonText } from './styles';
import React, { FC } from 'react';

interface ButtonProps {
  onPress: () => void;
  text: string;
}



const Button: FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
