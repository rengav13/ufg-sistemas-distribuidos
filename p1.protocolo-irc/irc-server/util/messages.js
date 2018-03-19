class Messages {
  static welcome (server, connection) {
    let welcome = []
    Messages.connectionStart(server.info, connection.nickname, connection.user.userName, connection.id)
      .forEach(message => welcome.push(message))
    Messages.serverConfiguration()
      .forEach(message => welcome.push(message))
    Messages.serverInfo(server)
      .forEach(message => welcome.push(message))
    Messages.messageOfTheDay(server.name)
      .forEach(message => welcome.push(message))
    return welcome
  }

  static connectionStart (serverInfo, nickname, login, host) {
    return [
      {code: 'RPL_WELCOME', message: 'Seja bem vindo ao IRC ' + nickname + '!' + login + '@' + host},
      {code: 'RPL_YOURHOST', message: 'Seu servidor é ' + serverInfo.endereco + ':' + serverInfo.porta + ', na versão ' + serverInfo.versao},
      {code: 'RPL_CREATED', message: 'O servidor foi criado em ' + serverInfo.dataCriacao},
      {code: 'RPL_MYINFO', message: serverInfo.nome + ' ' + serverInfo.versao + ' ' + serverInfo.modosUsuario + ' ' + serverInfo.modosCanal}
    ]
  }

  static serverConfiguration () {
    return [{code: 'RPL_ISUPPORT', message: 'CHANTYPES=#!&+ NICKLEN=20 CHANMODES=eIbq,k,flj,CFLMPQScgimnprstz INVEX=I CASEMAPPING=ascii ELIST RFC2812 :São suportados pelo servidor'}]
  }

  static serverInfo (server) {
    return [
      {code: 'RPL_LUSERCLIENT', message: ':O servidor possui ' + server.total('connections') + ' usuários e ' + server.total('services') + ' serviços em 1 servidor'},
      {code: 'RPL_LUSERCHANNELS', message: server.total('channels') + ' :Canais formados'},
      {code: 'RPL_LUSERME', message: ':Eu tenho ' + server.total('connections') + ' clientes e 1 servidor'}
    ]
  }

  static messageOfTheDay (serverName) {
    return [// Mensagem do dia (Deve ser buscado de um arquivo)
      {code: 'RPL_MOTDSTART', message: ':- ' + serverName + ' Mensagem do dia - '},
      {code: 'RPL_MOTD', message: ':- Seja bem vindo ao Servidor IRC G5 SD1 EC2017 '},
      {code: 'RPL_MOTD', message: ':- Desenvolvido por: '},
      {code: 'RPL_MOTD', message: ':-     * Ana Gabriella Frietas Hoffmann - @ah.gabriella '},
      {code: 'RPL_MOTD', message: ':-     * Vagner Luciano da Costa Silva - vagnerbas13@gmail.com '},
      {code: 'RPL_ENDOFMOTD', message: ':Fim do comando MOTD'}
    ]
  }

  static welcomeToChannel (channel) {
    let topic = {code: 'RPL_TOPIC', message: channel.name + ':' + channel.topic}
    let wTopic = {code: 'RPL_NOTOPIC', message: channel.name + ':Não foi setado um topico para o canal'}
    return [
      channel.topic === '' ? wTopic : topic,
      {code: 'RPL_NAMREPLY', message: channel.status + ' ' + channel.name + ' :' + channel.visibleNicknames().join(' ')},
      {code: 'RPL_ENDOFNAMES', message: channel.name + ' :Fim da lista de NAMES'}
    ]
  }
}

export default Messages
