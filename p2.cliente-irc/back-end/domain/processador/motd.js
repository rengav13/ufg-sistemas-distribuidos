function motd(comando, proxy) {
  proxy.clienteIRC.send('motd');
}

module.exports = motd;