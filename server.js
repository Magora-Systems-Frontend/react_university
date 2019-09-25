//Install express server
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});
app.get('/service-worker.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'assets', 'service-worker.js'));
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'assets', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});