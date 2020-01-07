exports.create = (staff) => ({
  "staff_id": staff.staff_id,
  "first_name": staff.first_name,
  "last_name": staff.last_name,
  "address": {
    "address_id": staff.address_id,
    "address":  staff.address,
    "city": staff.city,
    "country": staff.country
  },
  "picture": staff.picture,
  "email": staff.email,
  "store_id": staff.store_id,
  "active": staff.active,
  "username": staff.username,
  "password": staff.password,
  "last_update": staff.last_update
});