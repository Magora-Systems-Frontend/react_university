// handlers
const userLogin = require('../../handlers/users/login/login');
const userLoginGoogle = require('../../handlers/users/loginGoogle/loginGoogle');
const userLoginFacebook = require('../../handlers/users/loginFacebook/loginFacebook');
const userLoginVK = require('../../handlers/users/loginVK/loginVK');
const signUp = require('../../handlers/users/signUp/signUp');
const signUpPhone = require('../../handlers/users/signUp/signUpPhone');
const passwordRecovery = require('../../handlers/users/password/passwordRecovery');
const passwordSet = require('../../handlers/users/password/passwordSet');

module.exports = function(server) {

  server.post('/api/users/login', userLogin);
  server.post('/api/users/login/google', userLoginGoogle);
  server.post('/api/users/login/facebook', userLoginFacebook);
  server.post('/api/users/login/vk', userLoginVK);

  server.post('/api/users/register', signUp);
  server.post('/api/users/register/phone', signUpPhone);

  server.post('/api/users/password/recovery', passwordRecovery);
  server.post('/api/users/password/set', passwordSet);
};
