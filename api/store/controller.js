const repository = require('./repository');

function getStores(){
  return repository.getStores();
}

module.exports = {
  getStores,
};