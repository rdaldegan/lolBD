
import React from 'react';



export async function getStaticProps() {

  function getData(sql) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host: "sql10.freemysqlhosting.net",
      user: "sql10411360",
      password: "YxsdIpQZNS",
      database: "sql10411360"
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
  
  
  var sql = 'SELECT * FROM campeao'
  var data = [];
  var error = '';
  await getData(sql)
  .then(function(results){
    data = results;
  })
  .catch(function(err){
    console.log("Promise rejection error: "+err);
  })

  return {
    props: {
      data: JSON.stringify(data),
      error,
    },
    revalidate: 100,
  };
}

export default function Search({ data, error }) {

  data = JSON.parse(data);

  console.log(error);
  return (
     <div>
       {error && (<h3>{error}</h3>)}
       {data.map((current, index) => (
         <div key={index}>
           <span>nome: {current.nome}</span>
           <br />
           <span>texto: {current.texto}</span>
           <br />
           <span>regiao: {current.regiao}</span>
           <br />
           <hr />
        </div>
       ))}
    </div>
 );
}