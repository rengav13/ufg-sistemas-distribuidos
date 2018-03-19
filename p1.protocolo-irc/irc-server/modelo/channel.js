import Comm from '../modelo/communication'
import Util from '../util/util'
import ValidationError from '../error/validationerror'

const STATUS = {
  'SECRETO': '@',
  'PRIVADO': '*',
  'PUBLICO': '='
}

/**
 * Status de canal permitidos:
 *      '@' : Canais secretos
 *      '*' : Canais privados
 *      '=' : Canais publicos
 */
class Channel {
  constructor (props) {
    this.name = props.name
    this.key = props.key
    this.status = STATUS['PUBLICO']
    this.topic = ''
    this.modes = [] // Manipulado pelos membros do canal
    this.members = {} // Map<IP_PORTA, Connection>
  }

  visibleNicknames () {
    let nicknames = []
    Util.forEach(this.members, (address, connection) => {
      if (connection.user.isVisible()) { nicknames.push(connection.nickname) }
    })
    return nicknames
  }

  listMembers () {
    return Util.toList(this.members)
  };

  getMembers () {
    return this.members
  };

  authorized (name, key) {
    new ValidationError('ERR_BADCHANNELKEY', name + ' :Não foi possivel conectar ao canal, chave inválida')
      .throwIf(this.key !== key)
    return this
  }

  join (connection) {
    if (this.members[connection.id]) { return }
    this.members[connection.id] = connection
    this.multicast(connection, connection.nickname + '> Entrou no canal ' + this.name)
  }

  part (connection, message) {
    delete this.members[connection.id]
    message = !message ? '' : message
    this.multicast(connection, connection.nickname + ':Saiu de ' + this.name + ':' + message)
  };

  multicast (connection, message) {
    Comm.multicast(this.listMembers(), connection, message)
  };

  isMember (address) {
    return !!this.members[address]
  }
}

export default Channel
