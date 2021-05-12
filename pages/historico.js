import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Card from 'react-bootstrap/Card';

const Container = styled.div`
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul{
    width: 100%;
  }
`;

const Lado = styled.div`
  background-color: ${(props) => props.lado};
  width: 100%;
  padding: 20px;
  margin: 0;
  border-radius: 15px;
`;

const Partida = styled.div`
  margin: 40px;
  padding: 10px;

  .sem-detalhes{
    display: ${(props) => props.semDetalhes};
  }
  .com-detalhes{
    display: ${(props) => props.comDetalhes};
  }
`;

const Player = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  header{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  main{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;


export default function Historico() {
  const router = useRouter();

  const [partidas, setPartidas] = useState([]);
  const [selected, setSelected] = useState('');
  
  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    const url = `/api/historico?user=${sessionStorage.getItem('user')}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].user !== null){
        const separados = response[0].data.reduce((acc, current) => {
          if (!acc[current.idPartida]) {
            acc[current.idPartida] = [];
          }
          acc[current.idPartida].push(current);
          return acc;
        }, {})
        setPartidas(Object.entries(separados));
      }
    })
  }, []);

  return (
    <Container>
      <h2>Histórico de Partidas</h2>
      <ul>
        {partidas.map((partida) => {

          const player = partida[1].find(element => element.nickname === sessionStorage.user);
          const ladoA = partida[1].filter((lado) => lado.lado === 'A' ? true : false)
          const ladoV = partida[1].filter((lado) => lado.lado === 'V' ? true : false)
          
          return (
            <Partida
              key={partida[0]}
              onClick={() => { selected === player.idPartida ? setSelected('') : setSelected(player.idPartida) }}
              semDetalhes={selected === player.idPartida ? 'none' : ''}
              comDetalhes={selected === player.idPartida ? '' : 'none'}>

              <Card className='sem-detalhes'
                bg={player.resultado === 'V' ? 'primary' : 'danger'}
                text={'dark'}
              >
                <Card.Header><h5>{player.resultado === 'V' ? 'Vitoria' : 'Derrota'}</h5></Card.Header>
                <Card.Body>
                  <Card.Title>{player.nomeCampeao}</Card.Title>
                  <Card.Text><b>Duração: {player.duracao}</b></Card.Text>
                </Card.Body>
              </Card>

              <Card className='com-detalhes'
                bg={player.resultado === 'V' ? 'primary' : 'danger'}
                text={'dark'}
              >
                <Card.Header>
                  <h5>Duração: {player.duracao}</h5>
                </Card.Header>
                <Card.Header>
                  {(ladoA.length > 0 && ladoA[0].resultado === 'D') && <h5>Derrota</h5> }
                  {(ladoA.length > 0 && ladoA[0].resultado === 'V') && <h5>Vitoria</h5> }
                </Card.Header>
                <Card.Body>
                  <Lado lado='#7facef'>
                    {ladoA.map((dados) => (
                      <div key={dados.nickname}>
                        <Player>
                          <header>
                            <h5>Jogador: {dados.nickname}</h5>
                            <h5>Campeão: {dados.nomeCampeao}</h5>
                            {dados.nomeSkin && <h5>Skin: {dados.nomeSkin}</h5>}
                          </header>
                          <main>
                            <p>Dano causado: {dados.danoCampeoes}</p>
                            <p>Dano recebido: {dados.danoRecebido}</p>
                            <p>Tropas Abatidas: {dados.tropasAbatidas}</p>
                            <p>Total de Gold: {dados.ouro}</p>
                            <p>Total de Gold: {dados.ouro}</p>
                            <p>Placar de visão: {dados.placarVisao}</p>
                          </main>
                        </Player>
                        <hr />
                      </div>
                    ))}
                  </Lado>
                </Card.Body>
                <Card.Header>
                  {(ladoV.length > 0 && ladoV[0].resultado === 'D') && <h5>Derrota</h5> }
                  {(ladoV.length > 0 && ladoV[0].resultado === 'V') && <h5>Vitoria</h5> }
                </Card.Header>
                <Card.Body>
                  <Lado lado='#db6d78'>
                    {ladoV.map((dados) => (
                      <div key={dados.nickname}>
                        <Player>
                          <header>
                            <h5>Jogador: {dados.nickname}</h5>
                            <h5>Campeão: {dados.nomeCampeao}</h5>
                            {dados.nomeSkin && <h5>Skin: {dados.nomeSkin}</h5>}
                          </header>
                          <main>
                            <p>Dano causado: {dados.danoCampeoes}</p>
                            <p>Dano recebido: {dados.danoRecebido}</p>
                            <p>Tropas Abatidas: {dados.tropasAbatidas}</p>
                            <p>Total de Gold: {dados.ouro}</p>
                            <p>Total de Gold: {dados.ouro}</p>
                            <p>Placar de visão: {dados.placarVisao}</p>
                          </main>
                        </Player>
                        <hr />
                      </div>
                    ))}
                  </Lado>
                </Card.Body>
              </Card>
            </Partida>
          )
        })}
      </ul>
    </Container>
  );
}