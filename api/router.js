const staff = require('./staff/network');

function routing(server) {
  server.use('/staff', staff);
}

module.exports = {
  routing
};