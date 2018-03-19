
class IRCServerInfo {
  constructor (props) {
    this.id = props.address + ':' + props.port
    this.endereco = props.address
    this.porta = props.port
    this.versao = '0.0.0'
    this.dataCriacao = new Date()
    this.nome = '**Servidor IRC G5 SD1**'
    this.modosUsuario = ''
    this.modosCanal = ''
    this.maxPrivmsgTargets = 10
  }
}

export default IRCServerInfo
