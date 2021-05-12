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

  var sql = `SELECT EA, EL, gemas, baus, chaves FROM jogador WHERE nickname='${query.user}'`;

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
          EA: data[0].EA,
          EL: data[0].EL,
          gemas: data[0].gemas,
          baus: data[0].baus,
          chaves: data[0].chaves,
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