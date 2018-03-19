var event = require('./webSocketEvents')
var Reply = require('./Reply')

var ProxyInfo = require('./ProxyInfo');
var ProxyListeners = require('./ProxyListeners');

var irc = require('irc');

function Proxy(props, socket) {
  this.info = new ProxyInfo(props);
  this.clienteIRC = new irc.Client(this.info.servidor, this.info.nickname);
  this.clientSocket = socket;

  this.listen = new ProxyListeners(this, props);

  this.joinChannel = function(channel, key) {
    var channelName = channel + (!!key ? ' ' + key : '')
    this.clienteIRC.join(channelName, function () {
      if (this.info.canais.indexOf(channelName) === -1) {
        this.info.canais.push(channelName);
        new Reply(this.clientSocket)
          .event(event.joinChannel)
          .message('Você está conectado no canal ' + channelName)
          .channel(channelName)
          .send();
      } else {
        new Reply(this.clientSocket)
          .event(event.warn)
          .message('Você já está conectado no canal ' + channelName)
          .channel(channelName)
          .send();
      }
    }.bind(this));
  }

  return this;
}

module.exports = Proxy;
