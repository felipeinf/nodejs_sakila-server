const mysql = require('mysql');
const util = require('util');

var connectParams = require('../environments/sakila-params')
var sakilaConnection = mysql.createConnection(connectParams);
const query = util.promisify(sakilaConnection.query).bind(sakilaConnection);

async function getStaff(){
  try {
    await sakilaConnection.connect();
    const results = await query("SELECT * FROM staff");

    sakilaConnection.destroy();
    
    return Promise.resolve(results.map((row)=>{
      var employee = {...row};
      employee.picture = null;
      return employee;
    }));
  } 
  catch (error) {
    sakilaConnection.destroy();
    return Promise.reject('Error');
  }
}

module.exports = {
  getStaff
}