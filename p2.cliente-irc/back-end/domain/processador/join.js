var event = require('../webSocketEvents')
var is = require('./validacao-irc')
var Reply = require('../Reply')

function join(comando, proxy) {
  if (isExitAll(comando)) {
    exitAll(proxy)
  } else {
    joinChannels(comando, proxy)
  }
}

function isExitAll(comando) {
  return comando.params.split(' ')[0] === '0'
}

function exitAll(proxy) {
  proxy.info.canais.forEach(function (nomeCanal) {
    proxy.clienteIRC.part(nomeCanal, function () {
      new Reply(proxy.clientSocket)
        .event(event.conversationClose)
        .channel(nomeCanal)
        .send()
    })
  })
  proxy.info.canais = []
}

function joinChannels(comando, proxy) {
  var listaCanais = comando.params.split(' ')[0].split(',')
  var listaSenhas = comando.params.split(' ')[1]
  //se na lista de parâmetro exista senhas cria se um array para tal
  if (listaSenhas) {
    listaSenhas = comando.params.split(' ')[1].split(',')
  } else {
    listaSenhas = []
  }

  if (existePeloMenosUmNomeDeCanalInvalido(listaCanais)) {
    enviaWarn(comando, proxy)
  } else {
    for (var i = 0; i < listaCanais.length; i++) {
      if (listaSenhas.length < i)
        listaSenhas.push('')
      joinChannel(proxy, listaCanais[i], listaSenhas[i])
    }
  }
}

function existePeloMenosUmNomeDeCanalInvalido(listaCanais) {
  return listaCanais.some(function (canal) {
    return !is.channel(canal)
  })
}

function joinChannel(proxy, channel, key) {
  proxy.joinChannel(channel, key)
}

function enviaWarn(comando, proxy) {
  new Reply(proxy.clientSocket)
    .event(event.warn)
    .message('Parâmetros ínvalidos: ' + comando.params + ' : O nome de canal deve iniciar com #')
    .send()
}

module.exports = join