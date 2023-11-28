import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

interface InputProps extends TextInputProps {
  iconName: string;
}

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const InputField = styled.TextInput`
  flex: 1;
  padding: 0 10px;
`;

const IconContainer = styled.View`
  margin-right: 10px;
`;

const Input: FC<InputProps> = ({ iconName, ...rest }) => {
  return (
    <InputContainer>
      <IconContainer>
        <Feather name={iconName} size={20} color="#555" />
      </IconContainer>
      <InputField {...rest} />
    </InputContainer>
  );
};

export default Input;
