import { ButtonContainer, ButtonText } from './styles';
import React, { FC } from 'react';

interface ButtonProps {
  onPress: () => void;
  text: string;
  color?: string;
  width?: number; 
  height?: number; 
}

const Button: FC<ButtonProps> = ({ onPress, text, color, width = 250, height = 48 }) => {
  return (
    <ButtonContainer onPress={onPress} style={{ backgroundColor: color, width, height }}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;
