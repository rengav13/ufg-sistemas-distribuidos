import Map from './map'
import Channel from './channel'
import Util from '../util/util'

class Channels extends Map {
  getByName (name) {
    return this.get(name)
  }

  exitAll (connection, message) {
    let channels = this.getAll()
    Util.forEach(channels, (name, channel) => {
      if (this.belongsTo(connection, name)) { this.getByName(name).part(connection, message) }
    })
  }

  exitSeveral (channels, connection, message) {
    channels.forEach(name => this.getByName(name).part(connection, message))
  }

  belongsTo (connection, name) {
    return !!this.getByName(name) && this.getByName(name).isMember(connection.id)
  }

  joinSeveral (names, keys, connection) {
    names.forEach((name, pos) =>
      this.createOrGet({name: name, key: this.getChannelKey(keys, pos)})
        .authorized(name, this.getChannelKey(keys, pos))
        .join(connection))
  }

  getChannelKey (keys, pos) {
    if (keys.length === 0) {
      return ''
    }
    if (keys.length === 1) {
      return keys[0]
    }
    return keys[pos]
  }

  createOrGet (props) {
    if (!this.getByName(props.name)) { this.put(props.name, new Channel(props)) }
    return this.getByName(props.name)
  }
}

export default Channels
