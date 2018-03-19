
class ValidationError {
  constructor (code, message) {
    this.code = code
    this.message = message
  }

  throwIf (condition) {
    if (condition) { throw new ValidationError(this.code, this.message) }
  }
}

export default ValidationError
