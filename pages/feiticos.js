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
`;

export default function Feiticos() {
  const router = useRouter();

  const [feiticos, setFeiticos] = useState([])
  
  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    const url = `/api/feiticos?user=${sessionStorage.getItem('user')}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        setFeiticos(response[0].data);
      }
    })
  }, []);

  return (
    <Container>
      <h2>Campeões Habilitados</h2>
      <ul>
        {feiticos.map((feitico) => (
          <Card className='card'
            style={{ width: '18rem' }}
            key={feitico.idFeiticos}
            bg={'primary'}
            text={'dark'}
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{feitico.nome}</Card.Title>
              <Card.Text>{feitico.texto}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </ul>


      {/* <ul>
        {feiticos.map((feitico) => (
          <li >
          <h3>{feitico.nome}</h3>
          <p>{feitico.texto}</p>
          <hr />
          </li>
        ))}
      </ul> */}
    </Container>
  );
}