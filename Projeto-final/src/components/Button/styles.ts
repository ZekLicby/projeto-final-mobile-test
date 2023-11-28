import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../theme';

export const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${theme.color.default};
  height: 48px;
  width: 250px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;