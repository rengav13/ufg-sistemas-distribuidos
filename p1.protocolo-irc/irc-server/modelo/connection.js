import Formatter from '../util/formatacao'
import Comm from '../modelo/communication'

class Connection {
  constructor (socket, serverId) {
    this.id = socket.name
    this.serverId = serverId
    this.socket = socket
    this.nickname = null
    this.user = null
  }

  addUser (user) {
    this.user = user
  }

  existsUser (userName) {
    return !!this.user && !!this.user.userName === userName
  }

  isRestricted () {
    if (!this.user) { return false }
    return this.user.isRestricted()
  }

  userAtServerToString (serverAddr) {
    return this.user.nickname + '!' + this.user.userName + '@' + serverAddr
  }

  unicast (connectionTx, message) {
    Comm.unicast(message, this, connectionTx)
  }

  write (message) {
    this.socket.write(message)
  }

  reply (code, message) {
    this.socket.write(Formatter.f(this.serverId, code, this.nickname, message))
  }
}

export default Connection
