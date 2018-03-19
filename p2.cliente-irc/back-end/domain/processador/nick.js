var Reply = require('../Reply')
var event = require('../webSocketEvents')

function nick(comando, proxy) {
  var nickname = comando.params.split(' ')[0].trim()

  var nickmessage = 'Nick alterado de ' + proxy.info.nickname + ' para ' + nickname

  proxy.clienteIRC.send('nick', nickname)

  new Reply(proxy.clientSocket)
    .event(event.nick)
    .message(nickmessage)
    .nickname(nickname)
    .send()
}

module.exports = nick
