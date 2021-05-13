import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem  from 'react-bootstrap/ListGroupItem';

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
  
  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    const url = `/api/campeoes?user=${sessionStorage.getItem('user')}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        console.log(response[0].data);
        setCampeoes(response[0].data);
      }
    })
  }, []);

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
            </ListGroup>
          </Card>
        ))}
      </ul>
    </Container>
  );
}