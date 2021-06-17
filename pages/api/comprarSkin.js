export async function getData(sql) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'remotemysql.com', 
    user: '0U8BmikqdF',
    password: 'XpOrEixap9',
    database: '0U8BmikqdF',
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

  var sql = `SELECT precoSkin, EL, idJogador, idSkin FROM skins, jogador WHERE idSkin='${query.idSkin}' AND nickname='${query.user}'`;

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
    if(data[0].precoSkin > data[0].EL){
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
      const diferenca = data[0].EL - data[0].precoSkin;
      const jogador_id = data[0].idJogador;
      const skin_id = data[0].idSkin;
      
      var sql = `INSERT INTO skins_jogador VALUES (${jogador_id}, ${skin_id});`;
  
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
        var sql = `UPDATE jogador SET EL=${diferenca} WHERE idJogador=${jogador_id};`;
  
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