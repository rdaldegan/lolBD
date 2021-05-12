import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Heade = styled.header`
  display: ${(props) => props.display};
  visibility: ${(props) => props.visibility};

  .navbar{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  
  /* a{
    width: 200px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: blue;
    text-decoration: none;
    border-radius: 8px;
    background-color: white;
  } */
`;

export default function Header() {
  const router = useRouter();

  let show = true;
  if(router.route === '/'){
    show = false;
  }

  return (
    <Heade display={show ? 'flex' : 'none'} visibility={show ? 'visible' : 'hidden'}>

      <Navbar bg="primary" variant="dark" className='navbar'>
        <Navbar.Brand href="/home">LoL Database</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/historico">Histórico de Partidas</Nav.Link>
          <Nav.Link href="/campeoes">Meus Campeões</Nav.Link>
          <Nav.Link href="/skins">Minhas Skins</Nav.Link>
          <Nav.Link href="/itens">Itens</Nav.Link>
          <Nav.Link href="/feiticos">Feitiços de invocador</Nav.Link>
          <Nav.Link href="/lojaCampeao">Loja de campeões</Nav.Link>
          <Nav.Link href="/lojaSkin">Loja de skins</Nav.Link>
        </Nav>
        <Button variant="outline-light" type='button' onClick={() => {
          sessionStorage.removeItem('user')
          router.push('/')
        }}>
          Sair
        </Button>
      </Navbar>
    </Heade>
 );
}