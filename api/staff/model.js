exports.create = (staff) => ({
  "first_name": staff.first_name,
  "last_name": staff.last_name,
  "address": {
    "address_id": staff.address_id,
    "address":  staff.address,
    "city": staff.city,
    "country": staff.country
  },
  "picture": null,
  "email": staff.email,
  "store": staff.store_id,
  "active": staff.active,
  "username": staff.username,
  "password": staff.password,
  "last_update": staff.last_update
});