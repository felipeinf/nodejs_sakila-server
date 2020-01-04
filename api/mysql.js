const mysql = require('mysql');
const util = require('util');
const connectParams = require('./environments/sakila-params')

function setDatabase(){
  var connection = mysql.createConnection(connectParams);

  return {
    query(sql){
      return util
        .promisify(connection.query)
        .call(connection, sql);
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