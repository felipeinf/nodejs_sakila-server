const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = 4040;

app.use(bodyParser);
app.listen(port, () => console.log(`Server listen on ${port}`));