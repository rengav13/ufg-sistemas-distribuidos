
function Comando(prop) {
  var message = String(prop.replace('/', '')).trim().split(' ');
  this.id = message[0].toUpperCase();
  this.params = message.slice(1).join(' ');

  return this;
}

module.exports = Comando;