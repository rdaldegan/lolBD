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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  img{
    transition: 0.3s;
    :hover{
      z-index: 500;
      transform: scale(1.1);
    }
  }
`;

export default function Itens() {
  const router = useRouter();

  const [itens, setItens] = useState([])
  
  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    const url = `/api/itens?user=${sessionStorage.getItem('user')}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        setItens(response[0].data);
      }
    })
  }, []);

  return (
    <Container>
      <h2>Itens</h2>
      <ul>
        {itens.map((item) => (
          <Card className='card'
            style={{ width: '18rem' }}
            key={item.idItens}
            bg={'primary'}
            text={'dark'}
          >
            <Card.Img variant="top" src={`data:image/png;base64, ${item.imagemItem}`} />
            <Card.Body>
              <Card.Title>{item.nomeItem}</Card.Title>
              <Card.Text>{item.textoItem}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Preço: {item.precoItem} gold</ListGroupItem>
            </ListGroup>
          </Card>
        ))}
      </ul>
    </Container>
  );
}