import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;

  .form{
    border: 1px solid blue;
    border-radius: 8px;
    padding: 50px;
    margin: 50px;
  }
`

export default function Home() {
  const router = useRouter()
  const [lnick, setLnick] = useState('')
  const [lsenha, setLsenha] = useState('')
  const [csenha, setCsenha] = useState('')
  const [cnick, setCnick] = useState('')
  const [cemail, setCemail] = useState('')
  const [cidade, setCidade] = useState(13)
  const [cgenero, setCgenero] = useState('Mulher')

  useEffect(() => {
    if(sessionStorage.getItem('user') !== null){
      router.push('/home')
    }
  }, [])

  function handleCSubmit(e){
    e.preventDefault();
    if(cnick === '' || csenha === '' || cemail === '' || cgenero === ''){
      alert('Erro: Dados faltando')
    }
    else {
      const url = `/api/register?user=${cnick}&senha=${csenha}&genero=${cemail}&email=${cgenero}&idade=${cidade}`
      fetch(url)
      .then(response => response.json())
      .then(response => {
        if(response[0].user !== null){
          sessionStorage.setItem('user', response[0].user);
          router.push('/home');
        }
      })
    }
  }

  function handleLSubmit(e){
    e.preventDefault();
    if(lnick === '' || lsenha === ''){
      alert('Erro: Dados faltando')
    }
    else {
      const url = `/api/login?user=${lnick}&senha=${lsenha}`
      fetch(url)
      .then(response => response.json())
      .then(response => {
        if(response[0].sucess === true){
          sessionStorage.setItem('user', response[0].user);
          router.push('/home');
        }
      })
    }
  }

  return (
    <Container>
      <Form className='form'>
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="nickname" value={lnick} onChange={(e) => setLnick(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder='senha' value={lsenha} onChange={(e) => setLsenha(e.target.value)} />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" onClick={(e) => handleLSubmit(e)}>
          Entrar
        </Button>
      </Form>

      <Form className='form'>
        <Form.Group>
          <Form.Label>Nickname</Form.Label>
          <Form.Control type="text" placeholder="nickname" value={cnick} onChange={(e) => setCnick(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder='senha' value={csenha} onChange={(e) => setCsenha(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"  placeholder='email' value={cemail} onChange={(e) => setCemail(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Gênero</Form.Label>
          <Form.Control as="select" value={cgenero} onChange={(e) => setCgenero(e.target.value)}>
            <option name="Mulher">Mulher</option>
            <option name="Homem">Homem</option>
            <option name="Outro">Outro</option>
          </Form.Control>
        </Form.Group> 

        <Form.Group>
          <Form.Label>Idade</Form.Label>
          <Form.Control type="number"  min={13} value={cidade} onChange={(e) => setCidade(e.target.value)}  />
        </Form.Group>

        <br />
        <Form.Text className="text-muted">
            Nós não compartilharemos seus dados com ninguém.
        </Form.Text>
        <br />
        <br />
        <Button variant="primary" type="submit" onClick={(e) => handleCSubmit(e)}>
          Criar Conta
        </Button>
      </Form>
    </Container>
  )
}
