/**
 * Sakila Server 
 * 
 * @description REST API server developed using the NodeJs, Express and MySql. 
 * @version 1.0
 * @author Felipe Concha Almeida
 * @since January 2020
 * @license Apache
 */

(function main(){ 
  const express = require('express');
  const bodyParser = require('body-parser');
  const api = require('./api/router');
  
  const app = express();
  let port = 3000;
  
  app.use(bodyParser.json());
  api.routing(app);
  app.listen(port, () => console.log(`Server listen on ${port}`));
})();