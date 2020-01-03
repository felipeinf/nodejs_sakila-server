const express = require('express');
const response = require('../responses');
const router = express.Router();
const controller = require('./controller');

router.get('/', async function (req, res) {
  try {
    const staff = await controller.getStaff();      
    response.succes(req, res, staff);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Unexpected Error', 500, error);
  }
}); 

module.exports = router;