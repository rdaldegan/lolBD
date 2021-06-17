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

  var sql = `SELECT idSkin, nomeSkin, precoSkin, imagemSkin 
            FROM skins WHERE idSkin NOT IN (SELECT idSkin 
                                            FROM jogador 
                                            JOINTskins_jogador ON idJogador = jogador_id 
                                            JOIN skins on idSkin = skins_idSkin 
                                            WHERE nickname='${query.user}');`;

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
      data[index].imagemSkin = current.imagemSkin.toString('base64')
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