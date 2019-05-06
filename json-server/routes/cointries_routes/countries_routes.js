// handlers
const getCountries = require('../../handlers/countries/getCountries/getCountries');
const getCities = require('../../handlers/countries/getCities/getCities');

module.exports = function(server) {

  server.get('/api/countries', getCountries);
  server.get('/api/countries/cities', getCities);

};
