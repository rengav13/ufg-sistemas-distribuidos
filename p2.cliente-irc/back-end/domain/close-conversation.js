var event = require('./webSocketEvents')
var Reply = require('./Reply')

function closeConversation(req, res, proxies) {
  if (req.body.type === 'CHANNEL') {
    proxies[req.cookies.token].clienteIRC.part(req.body.name, function () {
      new Reply(proxies[req.cookies.token].clientSocket)
        .event(event.conversationClose)
        .channel(req.body.name)
        .send()
    })
    removeChannelFromProxy(proxies[req.cookies.token], req.body.name);

  } else if (req.body.type === 'USER') {
    new Reply(proxies[req.cookies.token].clientSocket)
      .event(event.conversationClose)
      .nickname(req.body.name)
      .send()
  }

  res.end();
}

function removeChannelFromProxy(proxy, channelName) {
  var index = proxy.info.canais.indexOf(channelName);
  if (index !== -1) {
    proxy.info.canais.splice(index, 1);
  }
}

module.exports = {
  method: 'post',
  url: '/close-conversation',
  controller: closeConversation
}