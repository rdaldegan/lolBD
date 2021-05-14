export async function getData(sql) {                      // Todos os endpoints da API possúem esta função getData
  var mysql = require('mysql');                           // que recebe o comando sql como parâmetro, estabelece 
  var connection = mysql.createConnection({               // a conexão com o banco de dados e executa o comando sql
    host: 'localhost',                                    // recebido
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

  const { query } = req;                                            // Recebe o parâmetro passado pelo CRUD 
                                                                    // (no caso apenas o nickname do usuário)     

  var sql = `SELECT idCampeao, nomeCampeao, textoCampeao,
            regiao, imagemCampeao, pontos, nivel 
            FROM campeao, maestria, jogador 
            WHERE (nickname='${query.user}' 
            AND idJogador=jogador_id AND idCampeao=campeao_id);`;   // Define o comando sql

  var data = [];

  await getData(sql)                                                // Chama a função getData mencionada acima
  .then(function(results){
    data = results;                                                 // Armazena o resultado em caso de sucesso
  })
  .catch(function(err){
    console.log("Promise rejection error: "+err);                   // Mostra o erro em caso de falha
  })

  if(data.length === 0){                                            // Checa se algum resultado foi armazenado
    try {
      res.status(201).json([                                        // Se não ele retorna sucess: false
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
    data.map((current, index) => {                                // Se sim ele faz a conversão das imagens retornadas
                                                                  // para strings
      data[index].imagemCampeao = current.imagemCampeao.toString('base64')
    });
    try {
      res.status(200).json([
        {
          sucess: true,                                           // E retorna os dados junto com sucess: true
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