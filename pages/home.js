import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`

  .padding {
    padding: 3rem !important
  }

  .user-card-full {
      overflow: hidden
  }

  .card {
      border-radius: 5px;
      -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
      box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
      border: none;
      margin-bottom: 30px
  }

  .m-r-0 {
      margin-right: 0px
  }

  .m-l-0 {
      margin-left: 0px
  }

  .user-card-full .user-profile {
      border-radius: 5px 0 0 5px
  }

  .bg-c-lite-green {
      background: linear-gradient(to right, #0d6efd, #255eb3)
  }

  .user-profile {
      padding: 20px 0
  }

  .card-block {
      padding: 1.25rem
  }

  .m-b-25 {
      margin-bottom: 25px
  }

  .img-radius {
      border-radius: 5px
  }

  h6 {
      font-size: 14px
  }

  .card .card-block p {
      line-height: 25px
  }

  @media only screen and (min-width: 1400px) {
      p {
          font-size: 14px
      }
  }

  .card-block {
      padding: 1.25rem
  }

  .b-b-default {
      border-bottom: 1px solid #e0e0e0
  }

  .m-b-20 {
      margin-bottom: 20px
  }

  .p-b-5 {
      padding-bottom: 5px !important
  }

  .card .card-block p {
      line-height: 25px
  }

  .m-b-10 {
      margin-bottom: 10px
  }

  .text-muted {
      color: #919aa3 !important
  }

  .b-b-default {
      border-bottom: 1px solid #e0e0e0
  }

  .f-w-600 {
      font-weight: 600
  }

  .m-b-20 {
      margin-bottom: 20px
  }

  .m-t-40 {
      margin-top: 20px
  }

  .p-b-5 {
      padding-bottom: 5px !important
  }

  .m-b-10 {
      margin-bottom: 10px
  }

  .m-t-40 {
      margin-top: 20px
  }

  .user-card-full .social-link li {
      display: inline-block
  }

  .user-card-full .social-link li a {
      font-size: 20px;
      margin: 0 10px 0 0;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out
  }
`;


export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [EA, setEA] = useState(0);
  const [EL, setEL] = useState(0);
  const [baus, setBaus] = useState(0);
  const [chaves, setChaves] = useState(0);
  const [gemas, setGemas] = useState(0);

  useEffect(() => {
    if(sessionStorage.getItem('user') === null){
      router.push('/')
    }
    setUsername(sessionStorage.getItem('user'));
    const url = `/api/userData?user=${sessionStorage.getItem('user')}`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      if(response[0].user !== null){
        setEA(response[0].EA);
        setEL(response[0].EL);
        setBaus(response[0].baus);
        setChaves(response[0].chaves);
        setGemas(response[0].gemas);
      }
    })
  }, []);

  return (
    <Container>
      <div className="page-content page-container" id="page-content">
          <div className="padding">
              <div className="row container d-flex justify-content-center">
                  <div className="col-xl-6 col-md-12">
                      <div className="card user-card-full">
                          <div className="row m-l-0 m-r-0">
                              <div className="col-sm-4 bg-c-lite-green user-profile">
                                  <div className="card-block text-center text-white">
                                      <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
                                      <h5 className="f-w-600">{username}</h5>
                                  </div>
                              </div>
                              <div className="col-sm-8">
                                  <div className="card-block">
                                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Valores</h6>
                                      <div className="row">
                                          <div className="col-sm-6">
                                              <p className="m-b-10 f-w-600">Essência Azul</p>
                                              <h6 className="text-muted f-w-400">{EA}</h6>
                                          </div>
                                          <div className="col-sm-6">
                                              <p className="m-b-10 f-w-600">Essência Laranja</p>
                                              <h6 className="text-muted f-w-400">{EL}</h6>
                                          </div>
                                          <div className="col-sm-6">
                                              <p className="m-b-10 f-w-600">Baus</p>
                                              <h6 className="text-muted f-w-400">{baus}</h6>
                                          </div>
                                          <div className="col-sm-6">
                                              <p className="m-b-10 f-w-600">Chaves</p>
                                              <h6 className="text-muted f-w-400">{chaves}</h6>
                                          </div>
                                          <div className="col-sm-6">
                                              <p className="m-b-10 f-w-600">Gemas</p>
                                              <h6 className="text-muted f-w-400">{gemas}</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </Container>
/*     <Container>
      <main>
        <h3>Bem vinda(o) {username}</h3>
        <ul>
          <li>Baus: {baus}</li>
          <li>Chaves: {chaves}</li>
          <li>Gemas: {gemas}</li>
        </ul>
      </main>
    </Container> */
  );
}