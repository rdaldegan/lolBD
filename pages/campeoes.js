import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem  from 'react-bootstrap/ListGroupItem';
import Button  from 'react-bootstrap/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    margin: 50px;
  }

  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  img{
    transition: 0.3s;
    :hover{
      z-index: 500;
      transform: scale(2.5);
    }
  }
`;

export default function Campeoes() {
  const router = useRouter();

  const [campeoes, setCampeoes] = useState([])
  
  useEffect(() => {                                                   // Executa quando a página é renderizada
    if(sessionStorage.getItem('user') === null){                      // CRUD checa se existe um usuário logado
      router.push('/')                                                // Se não houver ele redireciona para a página de login
    }
    const url = `/api/campeoes?user=${sessionStorage.getItem('user')}`// CRUD define a URL (endpoint da API) que executa a query desejada
                                                                      // passando o nickname do usuário amrazenado na sessionStorage como
                                                                      // query param => user = nome de usuário armazenado

    fetch(url)                                                        // CRUD faz a requisição HTTP para a URL definida
    .then(response => response.json())                                // CRUD converte para um objeto
    .then(response => {
      if(response[0].sucess === true){                                // CRUD verifica se o parâmetro sucess da resposta é true
        setCampeoes(response[0].data);                                // CRUD define a state (variavel de estado) campeões como a resposta obtida
      }
    })
  }, []);

  function handleSell(campeao){
    const url = `/api/venderCampeao?user=${sessionStorage.getItem('user')}&campeao=${campeao.idCampeao}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        router.push('/home');
      }
    })
  }

  return (
    <Container>
      <h2>Campeões Habilitados</h2>
      <ul>
        {campeoes.map((campeao) => (
          <Card className='card'
            style={{ width: '18rem' }}
            key={campeao.idCampeao}
            bg={'primary'}
            text={'dark'}
          >
            <Card.Img variant="top" src={`data:image/png;base64, ${campeao.imagemCampeao}`} />
            <Card.Body>
              <Card.Title>{campeao.nomeCampeao}</Card.Title>
              <Card.Text>{campeao.textoCampeao}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{campeao.regiao}</ListGroupItem>
              <ListGroupItem>Maestria: {campeao.nivel}</ListGroupItem>
              <ListGroupItem>{campeao.pontos} pontos</ListGroupItem>
              <Button variant="primary" onClick={() => handleSell(campeao)}>Vender</Button>
            </ListGroup>
          </Card>
        ))}
      </ul>
    </Container>
  );
}