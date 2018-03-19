
class Command {
  constructor (prop) {
    let message = String(prop).trim().split(' ')
    this.id = message[0].toUpperCase()
    this.params = message.slice(1).join(' ')
  }
}

export default Command
