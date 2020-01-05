const database = require('../mysql');

async function getStores(){
  const db = database.setDatabase();
  
  try {
    const result = await db.query(`
      SELECT * from store
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
  getStores,
}