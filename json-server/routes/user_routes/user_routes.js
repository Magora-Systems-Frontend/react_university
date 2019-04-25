// handlers
const userLogin = require('../../handlers/users/login/login');

module.exports = function(api) {

  api.get('/users/login', (req, res) => {console.log('aaa'); res.send({ a: 'a' })});

};