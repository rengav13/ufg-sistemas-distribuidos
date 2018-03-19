import Util from '../util/util'

class User {
  constructor (props) {
    this.nickname = props.nickname
    this.userName = props.userName
    this.password = props.password
    this.realName = props.realName
    this.modes = []
    this.decodeModeFromByteMask(props.byteMask)
  }

  decodeModeFromByteMask (byteMask) {
    if (byteMask & 0x08) {
      this.modes.push('w')
    }
    if (byteMask & 0x04) {
      this.modes.push('i')
    }
  };

  isVisible () {
    return this.modes.indexOf('i') === -1
  };

  isRestricted () {
    return this.modes.indexOf('r') !== -1
  }

  addModes (modes) {
    modes
      .filter(flag => this.modes.indexOf(flag) === -1)
      .forEach(flag => this.modes.push(flag))
  }

  removeModes (modes) {
    Util.removeIfExists(this.modes, modes)
  }

  modesToString () {
    if (!this.modes || this.modes.length === 0) { return '' }
    return '+' + this.modes.join('')
  }
}

export default User
