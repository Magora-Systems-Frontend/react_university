const userRoutes = require('./user_routes/user_routes');
const countriesRoutes = require('./cointries_routes/countries_routes');

module.exports = function(api) {
  userRoutes(api);
  countriesRoutes(api);
};
