const database = require('../mysql');

async function getCountries(){
  const db = database.setDatabase();
  
  try {
    const result = await db.query(`
      SELECT * from country
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
  getCountries,
}