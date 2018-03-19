import Util from '../util/util'

class Comm {
  static multicast (connections, connectionTx, message) {
    Util.forEach(connections, (address, connctionRx) => Comm.unicast(message, connctionRx, connectionTx))
  };

  static unicast (message, connectionRx, connectionTx) {
    if (connectionRx === undefined || connectionRx === connectionTx) { return }
    connectionRx.write(message + '\n')
  };
}

export default Comm
