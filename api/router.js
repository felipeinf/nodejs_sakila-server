const staff = require('./staff/network');
const city = require('./city/network');
const country = require('./country/network');
const address = require('./address/network');
const store = require('./store/network');

function routing(server) {
  server.use('/staff', staff);
  server.use('/store', store);
  server.use('/address', address);
  server.use('/city', city);
  server.use('/country', country);
}

module.exports = {
  routing
};