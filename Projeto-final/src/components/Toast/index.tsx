
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <SuccessContainer>
      <SuccessMessage>{message}</SuccessMessage>
    </SuccessContainer>
  );
};

const SuccessContainer = styled(View)`
  background-color: #4caf50;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  position: absolute;
  top: 0; 
  width: 100%;

`;

const SuccessMessage = styled(Text)`
  color: #fff;
`;

export default Toast;
