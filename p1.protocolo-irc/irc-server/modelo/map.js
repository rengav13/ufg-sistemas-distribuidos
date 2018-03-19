class Map {
  constructor () {
    this.object = {}
  }

  put (key, value) {
    this.object[key] = value
  }

  get (key) {
    if (!this.object[key]) {
      return null
    }
    return this.object[key]
  }

  getAll () {
    return this.object
  }

  remove (key) {
    if (!this.object[key]) { return }
    delete this.object[key]
  }
}

export default Map
