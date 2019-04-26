// handlers
const userLogin = require('../../handlers/users/login/login');
const signUp = require('../../handlers/users/signUp/signUp');
const signUpPhone = require('../../handlers/users/signUp/signUpPhone');

module.exports = function(server) {

  server.post('/users/login', userLogin);
  server.post('/users/register', signUp);
  server.post('/users/register/phone', signUpPhone);

};
