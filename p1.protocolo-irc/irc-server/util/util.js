class Util {
  static forEach (object, each) {
    for (let key in object) {
      each(key, object[key])
    }
  }

  static toList (object) {
    let list = []
    for (let key in object) {
      list.push(object[key])
    }
    return list
  }

  static isNullOrEmpty (object) {
    return object === null || object === undefined || object.length === 0
  }

  static copyArray (array) {
    let copy = []
    array.forEach((element) => copy.push(element))
    return copy
  }

  static removeByPattern (array, pattern) {
    let auxRemove = Util.copyArray(array)
    auxRemove.forEach(flag => {
      if (pattern.test(flag) && array.indexOf(flag) !== -1) { array.splice(array.indexOf(flag), 1) }
    })
  }

  static removeIfExists (array, arrayRef) {
    arrayRef.forEach(element => {
      if (array.indexOf(element) !== -1) { array.splice(array.indexOf(element), 1) }
    })
  }

  static splitByCommas (text) {
    if (text) {
      return text.split(',')
    }
    return []
  }
}

export default Util
