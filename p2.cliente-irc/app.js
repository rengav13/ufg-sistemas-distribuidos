var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var webSocketCookieParser = require('socket.io-cookie');
var routes = require('./back-end/routes');
var Proxy = require('./back-end/domain/Proxy');

var http = require('http').Server(app);
var webSocket = require('socket.io')(http);

var proxies = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cookieParser());

(function registerRoutes() {
	routes.forEach(function (route) {
		app[route.method](route.url, function (req, res) {
			route.controller(req, res, proxies)
		});
	});
})();

// Deve vir após registro de rotas para que os filtros de autenticação
// e a tela de login sejam carregadas corretamente.
app.use(express.static('front-end'));

webSocket.use(webSocketCookieParser);

webSocket.on('connection', function (socket) {
  var cookies = socket.request.headers.cookie;
  if (!proxies[cookies.token]) {
    proxies[cookies.token] = new Proxy(cookies, socket);   
  }

  socket.on('disconnecting', function () {
	if (proxies[cookies.token]) {
	    proxies[cookies.token].clienteIRC.disconnect();
  	    delete proxies[cookies.token];   
	}
  });
});

http.listen(3000, function () {
  console.log('Servindo na porta 3000');
});
