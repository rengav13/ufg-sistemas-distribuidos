var Reply = require('./Reply');
var event = require('./webSocketEvents');
var is = require('./processador/validacao-irc');

function ProxyListeners(proxy, props) {
  var that = this;
  this.proxy = proxy;
  this.props = props;

  (function initDefaultListeners() {
    that.proxy.clienteIRC.addListener('error', function(message) {
      console.log('ERRO: ' + message);
      new Reply(that.proxy.clientSocket)
        .event(event.error)
        .messageByCode(message.rawCommand)
        .send();
    });

    that.proxy.clienteIRC.addListener('registered', function (message) {
      that.proxy.joinChannel(that.props.channel);
      new Reply(that.proxy.clientSocket)
        .event(event.connected)
        .message(message.args[1])
        .nickname(that.proxy.info.nickname)
        .server(message.server)
        .send();
    });

    that.proxy.clienteIRC.addListener('motd', function (motd) {
      new Reply(that.proxy.clientSocket)
        .event(event.message)
        .message(motd)
        .server(proxy.info.servidor)
        .send();
    });

    that.proxy.clienteIRC.addListener('message', function (from, to, message, comando) {
      if (comando.command === 'PRIVMSG' && is.channel(comando.args[0])) {
        new Reply(that.proxy.clientSocket)
          .event(event.message)
          .message(message)
          .nickname(from)
          .channel(comando.args[0])
          .send();
      } else {
        new Reply(that.proxy.clientSocket)
          .event(event.message)
          .message(message)
          .nickname(from)
          .send();
      }
    })
  })();
}

module.exports = ProxyListeners;