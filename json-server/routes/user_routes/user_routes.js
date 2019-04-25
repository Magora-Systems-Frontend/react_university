// handlers
const userLogin = require('../../handlers/users/login/login');

module.exports = function(server) {

  server.post('/api/v1/users/login', userLogin);

};