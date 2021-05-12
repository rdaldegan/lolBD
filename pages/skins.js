import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Card from 'react-bootstrap/Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
    margin: 50px;
  }

  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

export default function Skins() {
  const router = useRouter();

  const [skins, setSkins] = useState([])
  
  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    const url = `/api/skins?user=${sessionStorage.getItem('user')}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        const separados = response[0].data.reduce((acc, current) => {
          if (!acc[current.nomeCampeao]) {
            acc[current.nomeCampeao] = [];
          }
          acc[current.nomeCampeao].push(current);
          return acc;
        }, {})
        setSkins(Object.entries(separados));
      }
    })
  }, []);

  return (
    <Container>
      <h2>Skins Habilitadas</h2>
      <ul>
        {skins.map(current => (
          <div key={current[0]}>
            <h3>{current[0]}</h3>
            {current[1].map((skin)=> (
              <div className='cards' key={skin.idSkin}>
                <Card
                  style={{ width: '18rem' }}
                  bg={'primary'}
                  text={'dark'}
                >
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{skin.nomeSkin}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div> 
        ))}
      </ul>
    </Container>
  );
}