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

  var sql = `select idSkin, nomeSkin, imagemSkin, nomeCampeao from jogador
	join skins_jogador sj on idJogador = sj.jogador_id
	join skins s on skins_idSkin = idSkin
	join campeao on s.campeao_id = idCampeao
	join maestria m on idJogador = m.jogador_id and idCampeao = m.campeao_id
    where nickname = ${query.user};`;

  var data = [];

  await getData(sql)
  .then(function(results){
    data = results[0];
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