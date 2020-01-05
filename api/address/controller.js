const repository = require('./repository');

function getAllAddress(){
  return repository.getAllAddress();
}

function addAddress(address){
  return repository.addAddress(address);
}

module.exports = {
  getAllAddress,
  addAddress
};