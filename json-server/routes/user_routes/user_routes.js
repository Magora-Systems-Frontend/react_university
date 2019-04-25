// handlers
const userLogin = require('../../handlers/users/login/login');

module.exports = function(server) {

  server.get('/api/users/login', userLogin);

};