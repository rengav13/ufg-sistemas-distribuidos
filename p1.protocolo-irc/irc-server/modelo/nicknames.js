import Map from './map'

class Nicknames extends Map {
  add (connection, nickname) {
    if (connection.nickname) { this.remove(connection.nickname) }

    this.put(nickname, connection.id)
    connection.nickname = nickname

    console.log('NICK: ' + connection.id + '> ' + connection.nickname)
  }

  exists (nickname) {
    return !!this.get(nickname)
  }
}

export default Nicknames
