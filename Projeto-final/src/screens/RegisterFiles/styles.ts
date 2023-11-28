import styled from "styled-components/native";
import theme from "../../theme";
import { TouchableOpacity, View, Text } from "react-native";


export const Container = styled.View`
  flex: 1;
 height: 100%;
  justify-content: center;
  align-items: center;
`


export const Title = styled.Text`
  font-size: 30px;
  color: black;
  margin-bottom: 15%;
`

export const Subtitle = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: black;
`

export const Description = styled.Text`
  font-size: 25px;
  font-weight: regular;
  color: black;
`

export const Files = styled.View`
  gap: 15px;
  margin-bottom: 20%;
`

export const AddButton = styled.TouchableOpacity`
  background-color: #209EBA;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 292px;
  margin-top: 20px;
`

export const ContainerInput = styled.View`
  width: 90%;
  margin-bottom: 10px;
`;

export const StyledTextInput = styled.TextInput`
  height: 40px;
  border-color: black;
  border-width: 1px;
  padding: 10px;

`;

export const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: gray;
`;

interface CircleProps {
  isFilled: boolean;
}

export const Circle = styled(View)<CircleProps>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${(props) => (props.isFilled ? 'green' : 'transparent')};
`;

export const ButtonText = styled(Text)`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: ${theme.color.default};
`;
