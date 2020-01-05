const database = require('../mysql');

async function getCities(){
  const db = database.setDatabase();
  
  try {
    const result = await db.query(`
      SELECT * from city
    `);

    return Promise.resolve(result);
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

module.exports = {
  getCities,
}