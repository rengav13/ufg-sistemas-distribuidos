import IRCServerInfo from './server-irc-info'
import Connections from './connections'
import Nicknames from './nicknames'
import Channels from './channels'
import Connection from './connection'
import Services from './services'

class IRCServer {
  constructor (props) {
    this.info = new IRCServerInfo(props)
    this.connections = new Connections()
    this.nicknames = new Nicknames()
    this.channels = new Channels()
    this.services = new Services()

    console.log('Servidor IRC ouvindo em ' + this.info.id + '\n')
  }

  subscribe (socket) {
    this.connections.put(socket.name, new Connection(socket, this.info.id))
    console.log('SUBSCRIBE: ' + socket.name)
  };

  unsubscribe (socket, message) {
    this.channels.exitAll(this.connections.get(socket.name), message)
    this.nicknames.remove(this.connections.get(socket.name).nickname)
    this.connections.remove(socket.name)
    console.log('UNSUBSCRIBE: ' + socket.name)
  };

  total (attribute) {
    return Object.keys(this[attribute].getAll()).length
  }
}

export default IRCServer
