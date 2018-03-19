const replyCode = require('./reply_code')

class Formatter {
  static f (prefixo, codigo, nickname, mensagem) {
    return (!prefixo ? '' : ':' + prefixo + ' ') +
            (!replyCode[codigo] ? '' : replyCode[codigo] + ' ') +
            (!nickname ? '' : nickname + ' ') +
            (!mensagem ? '' : mensagem) +
            '\n'
  }
}

export default Formatter
