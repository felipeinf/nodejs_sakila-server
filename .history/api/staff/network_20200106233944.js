const express = require('express');
const response = require('../responses');
const router = express.Router();
const controller = require('./controller');

router.get('/', async function (req, res) {
  try {
    const result = await controller.getStaff();      
    response.success(req, res, result);
  }
  catch (error) {
    console.error(error);
    response.error(req, res, 'Invalid information', 500, 'Error in controller', error);
  }
}); 

router.get('/:id', async function (req, res) {
  const id = req.params.id;

  try {
    const result = await controller.getStaffMemberById(id);      
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
    const result = await controller.addStaffMember(body);    
    response.success(req, res, result, 201);
  } 
  catch (error) { 
    console.error(error);
    response.error(req, res, 'Invalid information', 400, 'Error in controller', error);
  }
});

router.patch('/:id', async function (req, res) {
  const body = req.body;
  const id = req.params.id;

  try {
      const result = await controller.updateStaffMember(id, body);
      response.success(req, res, result, 200);
  } 
  catch (error) { 
      console.error(error);
      response.error(req, res, 'Invalid information', 500, 'Error in controller', error);
  }
});

router.delete('/:id', async function (req, res) {
  const id = req.params.id;

  try {
      const result = await controller.deleteStaffMember(id);
      response.success(req, res, result, 200);
  } 
  catch (error) { 
      console.error(error);
      response.error(req, res, 'Invalid information', 500, 'Error in controller', error);
  }
});

module.exports = router;