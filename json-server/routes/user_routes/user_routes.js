// handlers
const userLogin = require('../../handlers/users/login/login');
const userLoginGoogle = require('../../handlers/users/loginGoogle/loginGoogle');
const userLoginVK = require('../../handlers/users/loginVK/loginVK');
const signUp = require('../../handlers/users/signUp/signUp');
const signUpPhone = require('../../handlers/users/signUp/signUpPhone');

module.exports = function(server) {

  server.post('/users/login', userLogin);
  server.post('/users/login/google', userLoginGoogle);
  server.post('/users/login/vk', userLoginVK);

  server.post('/users/register', signUp);
  server.post('/users/register/phone', signUpPhone);

};
