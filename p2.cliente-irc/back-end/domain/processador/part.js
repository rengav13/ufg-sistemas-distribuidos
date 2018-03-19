var Reply = require('../Reply')
var event = require('../webSocketEvents')

function part(comando, proxy) {
  var channel = comando.params.split(' ')[0].trim()
  new Reply(proxy.clientSocket)
    .event(event.part)
    .message(channel)
    .send()
}

module.exports = part