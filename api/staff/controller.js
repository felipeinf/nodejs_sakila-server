const repository = require('./repository');

function getStaff(){
  return repository.getStaff();
}

function addStaffMember(staffMember){
  return repository.addStaffMember(staffMember);
}

function deleteStaffMember(staffMemberId){
  return repository.deleteStaffMember(staffMemberId);
}

function updateStaffMember(staffMemberId, staffMember){
  return repository.updateStaffMember(staffMemberId, staffMember);
}

module.exports = {
  getStaff,
  addStaffMember,
  deleteStaffMember,
  updateStaffMember
};