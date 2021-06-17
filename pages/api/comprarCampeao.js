export async function getData(sql) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdlol',
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

  var sql = `SELECT precoCampeao, EA, idJogador, idCampeao FROM campeao, jogador WHERE idCampeao='${query.idCampeao}' AND nickname='${query.user}'`;

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
    if(data[0].precoCampeao > data[0].EA){
      try {
        res.status(200).json([
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
      const diferenca = data[0].EA - data[0].precoCampeao;
      const jogador_id = data[0].idJogador;
      const campeao_id = data[0].idCampeao;
      
      var sql = `INSERT INTO maestria VALUES (0, 0, ${jogador_id}, ${campeao_id});`;
  
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
        var sql = `UPDATE jogador SET EA=${diferenca} WHERE idJogador=${jogador_id};`;
  
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
          try {
            res.status(201).json([
              {
                sucess: true,
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
    }
  }
}