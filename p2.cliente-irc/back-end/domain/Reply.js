var mensagem = require('./mensagens');

function Reply(socket) {
  var that = this;
  this.socket = socket;
  this._event = null;
  this._message = null;
  this._nickname = null;
  this._channel = null;
  this._server = null;

  this.event = function (event) {
    that._event = event;
    return that;
  }

  this.messageByCode = function (code) {
    if (!mensagem[code]) {
      console.log('[' + code + ']' + ' Erro desconhecido, por favor contate o administrador.');
      that._message = 'Erro desconhecido, por favor contate o administrador.';
    } else {
      that._message = mensagem[code];
    }
    return that;
  };

  this.message = function (message) {
    that._message = message;
    return that;
  };

  this.nickname = function (nickname) {
    that._nickname = nickname;
    return that;
  };

  this.channel = function (channel) {
    that._channel = channel;
    return that;
  };

  this.server = function (server) {
    that._server = server;
    return that;
  };

  this.toString = function () {
    return JSON.stringify(that.getReply());
  };

  this.getReply = function() {
    return {
      message: that._message,
      timestamp: Date.now(),
      nickname: that._nickname,
      channel: that._channel,
      server: that._server
    };
  };

  this.send = function () {
    that.socket.emit(that._event, that.getReply());
  }

  return this;
}

module.exports = Reply;