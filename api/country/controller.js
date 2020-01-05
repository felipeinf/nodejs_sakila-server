const repository = require('./repository');

function getCountries(){
  return repository.getCountries();
}

module.exports = {
  getCountries,
};