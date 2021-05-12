import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`

`;

export default function Imagem() {
  const router = useRouter();

  const [img, setImg] = useState([])
  
  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    const url = `/api/imagem`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].sucess === true){
        setImg(response[0].data);
        console.log(response[0].data)
      }
    })
  }, []);

  return (
    <Container>
      <img src={`data:image/png;base64, ${img}`}  />
    </Container>
  );
}