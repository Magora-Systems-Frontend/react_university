// handlers
const userLogin = require('../../handlers/users/login/login');
const userLoginGoogle = require('../../handlers/users/loginGoogle/loginGoogle');
const signUp = require('../../handlers/users/signUp/signUp');

module.exports = function(server) {

  server.post('/users/login', userLogin);
  server.post('/users/login/google', userLoginGoogle);

  server.post('/users/register', signUp);

};
