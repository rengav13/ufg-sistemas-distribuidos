import Command from '../modelo/command'
import ValidationError from '../error/validationerror'
import Util from '../util/util'

const exec = {
  'NICK': require('./registro_conexao/nick'),
  'USER': require('./registro_conexao/user'),
  'MODE': require('./registro_conexao/mode'),
  'JOIN': require('./operacao_canal/join'),
  'PING': require('./diversos/ping'),
  'PONG': require('./diversos/pong'),
  'PRIVMSG': require('./envio_mensagem/privmsg'),
  'USERHOST': require('./opcionais/userhost'),
  'PART': require('./operacao_canal/part'),
  'QUIT': require('./registro_conexao/quit')
}

class Processor {
  static analyse (message, socket, ircServer) {
    console.log('COMANDO RECEBIDO: ' + String(message))

    let connection = ircServer.connections.get(socket.name)

    if (Util.isNullOrEmpty(message)) { return }

    let command = new Command(message)

    Processor.execute(command, connection, ircServer)
  }

  static execute (command, connection, ircServer) {
    if (!exec[command.id]) {
      console.log('ERROR: Comando desconhecido')
      connection.reply('ERR_UNKNOWNCOMMAND', command.id + ' :Comando desconhecido')
      return
    }

    try {
      exec[command.id](command, connection, ircServer)
    } catch (error) {
      Processor.handleError(connection, error)
    }
  }

  static handleError (connection, error) {
    if (error instanceof ValidationError) {
      console.log('Erro de validação: ' + error.code + ' ' + error.message)
      connection.reply(error.code, error.message)
    } else {
      connection.reply('ERROR', 'Erro desconhecido, por favor contate o administrador.')
      throw error
    }
  }
}

export default Processor
