const database = require('../mysql');

async function getAllAddress(){
  const db = database.setDatabase();
  
  try {
    const result = await db.query(`
      SELECT * from address
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

async function addAddress(address){
  const db = database.setDatabase();
  const properties = new Map(Object.entries(address));
  let values = Array.from(properties.values());
  let keys = Array.from(properties.keys());
  
  console.log(`${values}`);

  try {
    const result = await db.query(`
      INSERT INTO address (${keys}) 
      VALUES (?)
    `, values);
    
    address.address_id = result.insertId;
    return Promise.resolve(address);
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

module.exports = {
  getAllAddress,
  addAddress
}