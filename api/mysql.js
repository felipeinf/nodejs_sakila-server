const mysql = require('mysql');
const util = require('util');
const connectParams = require('./_environments/sakila-params');

function setDatabase(){
  let connection = mysql.createConnection(connectParams);

  return {
    query(sql, values){
      return util
        .promisify(connection.query)
        .call(connection, sql, [values]);
    },
    disconnect(){
      return util
        .promisify(connection.end)
        .call(connection);
    }
  };
}

module.exports = {
  setDatabase,
}