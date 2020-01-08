const database = require('../mysql');
const model = require('./model');

async function getStaff(){
  const db = database.setDatabase();
  
  try {
    const result = await db.query(`
      SELECT staff_id, first_name, last_name, staff.address_id, address.address, city.city, country.country, picture, email, store_id, active, username, password, staff.last_update  FROM staff
      JOIN address ON address.address_id = staff.address_id
      JOIN city ON city.city_id = address.city_id
      JOIN country ON country.country_id = city.country_id
    `);

    return Promise.resolve(result.map((staffMember) => model.create(staffMember)));
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

async function getStaffMemberById(staffMemberId){
  const db = database.setDatabase();
  
  try {
    const result = await db.query(`
      SELECT staff_id, first_name, last_name, staff.address_id, address.address, city.city, country.country, picture, email, store_id, active, username, password, staff.last_update  FROM staff
      JOIN address ON address.address_id = staff.address_id
      JOIN city ON city.city_id = address.city_id
      JOIN country ON country.country_id = city.country_id
      WHERE staff.staff_id = ${staffMemberId}
    `);

    return Promise.resolve(model.create(result.shift()));
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

async function addStaffMember(staffMember){
  const db = database.setDatabase();
  const properties = new Map(Object.entries(staffMember));
  let values = Array.from(properties.values());
  
  try {
    const result = await db.query(`
      INSERT INTO staff 
        (first_name, last_name, address_id, email, store_id, active, username, password) 
      VALUES (?)
    `, values);

    staffMember.staff_id = result.insertId;
    return Promise.resolve(staffMember);
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

async function deleteStaffMember(staffMemberId){
  const db = database.setDatabase();

  try {
    const result = await db.query(`
      SELECT staff_id, first_name, last_name, staff.address_id, address.address, city.city, country.country, picture, email, store_id, active, username, password, staff.last_update  FROM staff
      JOIN address ON address.address_id = staff.address_id
      JOIN city ON city.city_id = address.city_id
      JOIN country ON country.country_id = city.country_id
      WHERE staff.staff_id = ${staffMemberId}
    `);

    await db.query(`
      DELETE FROM staff WHERE staff_id = ${staffMemberId}
    `);
    
    return Promise.resolve(model.create(result.shift()));
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

async function updateStaffMember(staffMemberId, staffMember){
  const db = database.setDatabase();
  const properties = Object.entries(staffMember);
  let values = properties.map((property) => `${property[0]}='${property[1]}'`);

  try {
    const result = await db.query(`
      SELECT staff_id, first_name, last_name, staff.address_id, address.address, city.city, country.country, picture, email, store_id, active, username, password, staff.last_update  FROM staff
      JOIN address ON address.address_id = staff.address_id
      JOIN city ON city.city_id = address.city_id
      JOIN country ON country.country_id = city.country_id
      WHERE staff_id = ${staffMemberId}
    `);

    await db.query(`
      UPDATE staff
      SET ${values}
      WHERE staff_id = ${staffMemberId}
    `);

    return Promise.resolve(model.create(result.shift()));
  } 
  catch (error) {
    return Promise.reject(error);    
  }
  finally{
    await db.disconnect();
  }
}

module.exports = {
  getStaff,
  getStaffMemberById,
  addStaffMember,
  deleteStaffMember,
  updateStaffMember
}