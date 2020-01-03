const repository = require('./repository');

function getStaff(){
  return repository.getStaff();
}

module.exports = {
  getStaff
};