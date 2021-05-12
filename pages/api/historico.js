export async function getData(sql) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'remotemysql.com', //"sql10.freemysqlhosting.net",
    user: 'OvUoifjKLK', //"sql10411360",
    password: '1lWO9PC88S', //"YxsdIpQZNS",
    database: 'OvUoifjKLK', //"sql10411360"
  });
  return new Promise(function(resolve, reject){
    connection.query(sql, 
      function(err, result){             
        if(result === undefined){
          reject(new Error("Error result is undefined"));
        }else{
          resolve(result);
        }
      }
    )
  })
}

export default async function handler(req, res) {

  const { query } = req;

  var sql = `SELECT idPartida, duracao, ouro, danoCampeoes, danoRecebido, tropasAbatidas, placarVisao, lado, resultado, nickname, nomeCampeao, nomeSkin
  FROM jogador_partida
  LEFT JOIN skins
  ON idSkin=skins_idSkin
  INNER JOIN jogador
  ON jogador.idJogador=jogador_partida.jogador_id
  INNER JOIN campeao
  ON idCampeao=jogador_partida.campeao_idCampeao
  INNER JOIN partida
  ON idPartida=partida_idPartida AND idPartida IN (SELECT idPartida 
                                                  FROM partida, jogador, jogador_partida 
                                                  WHERE nickname='${query.user}'
                                                  AND idJogador=jogador_partida.jogador_id
                                                  AND idPartida=partida_idPartida
                                                  );`;

  var data = [];

  await getData(sql)
  .then(function(results){
    data = results;
  })
  .catch(function(err){
    console.log("Promise rejection error: "+err);
  })

  if(data.length === 0){
    try {
      res.status(201).json([
        {
          sucess: false,
          user: null,
        }
      ])
    } catch (err){
      res.status(500).json({
        statusCode: 500,
        message: err.message,
      })
    }
  }
  else{
    try {
      res.status(200).json([
        {
          sucess: true,
          user: query.user,
          data,
        }
      ])
    } catch (err){
      res.status(500).json({
        statusCode: 500,
        message: err.message,
      })
    }
  }
}