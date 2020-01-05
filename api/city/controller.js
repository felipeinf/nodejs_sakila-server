const repository = require('./repository');

function getCities(){
  return repository.getCities();
}

module.exports = {
  getCities,
};