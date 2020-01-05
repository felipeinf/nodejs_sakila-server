const express = require('express');
const response = require('../responses');
const router = express.Router();
const controller = require('./controller');

router.get('/all', async function (req, res) {
  try {
    const result = await controller.getAllAddress();      
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500, 'Error in controller', error);
  }
}); 

router.post('/', async function (req, res) {
  const body = req.body;

  try {
    const result = await controller.addAddress(body);    
    response.success(req, res, result, 201);
  } 
  catch (error) { 
    console.error(error);
    response.error(req, res, 'Invalid information', 400, 'Error in controller', error);
  }
});

module.exports = router;