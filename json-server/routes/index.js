const userRoutes = require('./user_routes/user_routes');

module.exports = function(api) {
  userRoutes(api);
};