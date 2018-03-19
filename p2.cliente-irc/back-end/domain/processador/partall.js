var Reply = require('../Reply')
var event = require('../webSocketEvents')

function partall(comando, proxy) {
  new Reply(proxy.clientSocket)
    .event(event.partall)
    .send()
}

module.exports = partall