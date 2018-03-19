var Reply = require('../Reply')
var event = require('../webSocketEvents');

function quit(comando, proxy) {
  var mensagem = comando.params.split(' ')[0].trim();
  var quitmessage = 'User ' + proxy.info.nickname + ' saiu do IRC: ' + mensagem;

  proxy.clienteIRC.send('quit', quitmessage);

  new Reply(proxy.clientSocket)
    .event(event.quit)
    .message(quitmessage)
    .nickname(proxy.info.nickname)
    .send();
}

module.exports = quit;