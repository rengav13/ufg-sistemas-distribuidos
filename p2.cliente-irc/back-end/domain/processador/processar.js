/**
 * Módulo responsável por realizar a chamada do processador especifico para o comando.
 *
 * O processaMensagem irá receber uma mensagem, presente no corpo da requisição, e decidir
 * se a mesma deve ser interpretada como um comando ou como uma simples mensagem.
 *
 * Se for:
 *  - Comando  -> Deve chamar a função responsável por tratar o comando.
 *  - Mensagem -> Envia a mensagem para o canal presente no cookie
 */

var Reply = require('../Reply')
var Comando = require('./Comando')

var event = require('../webSocketEvents')

var exec = {
  'PRIVMSG': require('./privmsg'),
  'MOTD': require('./motd'),
  'QUIT': require('./quit'),
  'JOIN': require('./join'),
  'PART': require('./part'),
  'PARTALL': require('./partall'),
  'NICK': require('./nick')
}

function processaMensagem(req, res, proxies) {
  if (!req.body.message) {
    res.end()
  } else if (req.body.message.startsWith('/')) {
    processaComando(proxies[req.cookies.token], req.body, req.cookies)
    res.end()
  } else {
    enviaMensagem(proxies[req.cookies.token], req.body)
    res.end()
  }
}

/**
 *  Formato de comando gerado pelo método:
 *    - <ID> <PARAMS>
 *  Onde:
 *    - ID representa o nome do comando.
 *    - PARAMS representa os argumentos do comando.
 */
function processaComando(proxy, dado) {
  var comando = new Comando(dado.message)

  if (!exec[comando.id]) {
    console.log('ERROR: Comando desconhecido: ' + comando.id)
    new Reply(proxy.clientSocket)
      .event(event.error)
      .message(comando.id + ': Comado desconhecido')
      .send()
  } else {
    exec[comando.id](comando, proxy)
  }
}

function enviaMensagem(proxy, data) {
  new Reply(proxy.clientSocket)
    .event(event.message)
    .message(data.message)
    .nickname(data.destination.type === 'USER' ? data.destination.name : null)
    .channel(data.destination.type === 'CHANNEL' ? data.destination.name : null)
    .send()
  if (data.destination.type === 'USER' || data.destination.type === 'CHANNEL') {
    proxy.clienteIRC.say(data.destination.name, data.message)
  }
}

module.exports = {
  method: 'post',
  url: '/mensagem',
  controller: processaMensagem
}