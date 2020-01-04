const database = require('../mysql');

async function getStaff(){
  const db = database.setDatabase();
  
  try {
    return await db.query("SELECT * FROM staff");
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

module.exports = {
  getStaff
}