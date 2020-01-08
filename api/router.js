const staff = require('./staff/network');
const city = require('./city/network');
const country = require('./country/network');
const address = require('./address/network');
const store = require('./store/network');

function routing(server) {
  //Access control
  server.use((req, res, next) => {
    res.header({
      'Access-Control-Allow-Methods': req.headers['access-control-request-method'],
      'Access-Control-Allow-Origin': req.headers['origin']
    });
    next();
  });

  server.use('/staff', staff);
  server.use('/store', store);
  server.use('/address', address);
  server.use('/city', city);
  server.use('/country', country);
}

module.exports = {
  routing
};