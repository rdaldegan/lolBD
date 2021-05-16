export async function getData(sql) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost', //"sql10.freemysqlhosting.net",
    user: 'root', //"sql10411360",
    password: '', //"YxsdIpQZNS",
    database: 'bdlol', //"sql10411360"
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

  var sql = `SELECT idCampeao, nomeCampeao, textoCampeao, regiao, precoCampeao, imagemCampeao 
          FROM campeao 
          WHERE idCampeao NOT IN (SELECT idCampeao 
                                  FROM jogador 
                                  JOIN maestria ON idJogador = jogador_id 
                                  JOIN campeao ON idCampeao = campeao_id 
                                  WHERE nickname = '${query.user}');`;

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
    data.map((current, index) => {
      data[index].imagemCampeao = current.imagemCampeao.toString('base64')
    });
    try {
      res.status(200).json([
        {
          sucess: true,
          data: data,
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