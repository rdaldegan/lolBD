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

export default function lojaSkin() {
  const router = useRouter();

  const [skins, setSkins] = useState([])
  
  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    const url = `/api/lojaSkin?user=${sessionStorage.user}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        setSkins(response[0].data);
      }
    })
  }, []);

  function handleBuy(skin){
    const url = `/api/comprarSkin?user=${sessionStorage.user}&idSkin=${skin.idSkin}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        router.push('/skins');
      }
    })
  }

  return (
    <Container>
      <h2>Loja</h2>
      <ul>
        {skins.map((skin) => (
          <Card className='card'
            style={{ width: '18rem' }}
            key={skin.idSkin}
            bg={'primary'}
            text={'dark'}
          >
            <Card.Img variant="top" src={`data:image/png;base64, ${skin.imagemSkin}`} />
            <Card.Body>
              <Card.Title>{skin.nomeSkin}</Card.Title>
              <Card.Text>{skin.textoSkin}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{skin.regiao}</ListGroupItem>
              <ListGroupItem>Preço: {skin.precoSkin} el</ListGroupItem>
              <ListGroupItem><Button variant="outline-primary" onClick={() => handleBuy(skin)}>Comprar</Button></ListGroupItem>
            </ListGroup>
          </Card>
        ))}
      </ul>
    </Container>
  );
}