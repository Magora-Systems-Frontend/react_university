// handlers
const userLogin = require('../../handlers/users/login/login');
const signUp = require('../../handlers/users/signUp/signUp');

module.exports = function(server) {

  server.post('/users/login', userLogin);
  server.post('/users/register', signUp);

};
