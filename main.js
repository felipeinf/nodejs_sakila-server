const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/router');

var app = express();
const port = 4040;

app.use(bodyParser);
api.routing(app);
app.listen(port, () => console.log(`Server listen on ${port}`));