const repository = require('./repository');

async function getStaff(){
  const staff = await repository.getStaff();
  
  return staff.map((employee) => {
    employee.picture = null;
    return employee;
  });
}

module.exports = {
  getStaff
};