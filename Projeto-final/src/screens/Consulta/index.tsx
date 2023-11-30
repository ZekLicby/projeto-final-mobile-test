// App.tsx
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Dropdown from '../../components/Dropdown';
import RequerimentoList from '../../components/RequerimentoList';

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const TituloContainer = styled(View)`
  background-color: #ddd;
  padding: 10px;
`;

const Titulo = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const requerimentosFalsos = [
  { nome: 'Requerimento 1', dataHora: '01/01/2023 10:00' },
  { nome: 'Requerimento 2', dataHora: '02/01/2023 15:30' },
];

const Consulta: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('todos');

  return (
    <Container>
      <Dropdown
        selectedValue={selectedDepartment}
        onValueChange={(value) => setSelectedDepartment(value)}
      />
      <TituloContainer>
        <Titulo>Requerimentos</Titulo>
      </TituloContainer>
      <RequerimentoList data={requerimentosFalsos} />
    </Container>
  );
};

export default Consulta;
