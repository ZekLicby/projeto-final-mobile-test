import React from 'react';
import { AddButton, ButtonText, Container, Description, Subtitle, Title } from './styles';


export default function Profile() {
  const dadosPerfil = [
    { subtitle: 'Nome', description: 'Charly Silva' },
    { subtitle: 'N° de matrícula', description: '00000000' },
    { subtitle: 'E-mail', description: 'email@unicap.br' },
    { subtitle: 'Cargo', description: 'Gerente' },
    { subtitle: 'Data de Nascimento', description: '01/01/2000' },
    { subtitle: 'Setor', description: 'Protocolo' },
  ];

  return (
    <Container>
      <Title>Meu Perfil</Title>
      {dadosPerfil.map(({ subtitle, description }, index) => (
        <React.Fragment key={index}>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
        </React.Fragment>
      ))}
      <AddButton>
       <ButtonText>Adicionar colaborador</ButtonText>
      </AddButton>
    </Container>
  );
}
