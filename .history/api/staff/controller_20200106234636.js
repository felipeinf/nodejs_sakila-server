const repository = require('./repository');

function getStaff(){
  return repository.getStaff();
}

function getStaffMemberById(staffMemberId){
  return repository.getStaffMemberById(staffMemberId);
}

function addStaffMember(staffMember){
  return repository.addStaffMember(staffMember);
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
  getStaffMemberById,
  addStaffMember,
  deleteStaffMember,
  updateStaffMember
};