const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./json-server/db.json');
const appRoutes = require('./routes/index');
const middlewares = jsonServer.defaults();

const PORT = 8021;

appRoutes(server);

// server.get('/api/users/login', (req, res) => {res.send({a: 'aaa'});});

server.use(function(err, req, res, next) {
  res.status(500).send(err);
  next(err);
});

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on port: ${PORT}`)
});