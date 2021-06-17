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

  var sql = `SELECT * FROM feiticos;`;

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
      data[index].imagemFeitico = current.imagemFeitico.toString('base64')
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