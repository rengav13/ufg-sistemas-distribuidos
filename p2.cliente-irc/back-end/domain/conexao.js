var path = require('path');

function conectar(req, res) {
  res.sendFile(path.join(__dirname, '../../front-end/index.html'));
}

function login(req, res) {
  res.sendFile(path.join(__dirname, '../../front-end/login.html'));
}
function ServerChange(req, res) {
  res.sendFile(path.join(__dirname, '../../front-end/ServerChange.html'));
}

module.exports.indexPage = {
  method: 'get',
  url: '/',
  controller: conectar
};

module.exports.loginPage = {
  method: 'get',
  url: '/login',
  controller: login
};

module.exports.ServerChangePage = {
  method: 'get',
  url: '/ServerChange',
  controller: ServerChange
};