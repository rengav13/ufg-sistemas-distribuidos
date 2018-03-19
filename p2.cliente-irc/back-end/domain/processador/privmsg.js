var event = require('../webSocketEvents')
var Reply = require('../Reply')
var is = require('./validacao-irc')

function privmsg(comando, proxy) {
  var destinos = comando.params.split(' ')[0].trim()
  var mensagem = comando.params.split(' ')[1]
  if (is.msgTarget(destinos)) {
    destinos.split(',').forEach(function (destino) {
      enviaMensagem(proxy, destino, mensagem);
    });
  } else {
    new Reply(proxy.clientSocket)
      .event(event.error)
      .message('Os destinatários informados estão inválidos!')
      .send()
  }
}

function enviaMensagem(proxy, destino, mensagem) {
  if (!mensagem) {
    new Reply(proxy.clientSocket)
      .event(event.warn)
      .message('Por favor informe uma mensagem')
      .nickname(proxy.info.nickname)
      .send();
    return;
  }

  proxy.clienteIRC.send('privmsg', destino, mensagem);

  new Reply(proxy.clientSocket)
    .event(event.message)
    .message(mensagem)
    .nickname(is.channel(destino) ? null : destino)
    .channel(is.channel(destino) ? destino : null)
    .send();
}

module.exports = privmsg;
