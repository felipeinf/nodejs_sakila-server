const express = require('express');
const response = require('../responses');
const router = express.Router();
const controller = require('./controller');

router.get('/all', async function (req, res) {
  try {
    const result = await controller.getCities();      
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500, 'Error in controller', error);
  }
}); 

module.exports = router;