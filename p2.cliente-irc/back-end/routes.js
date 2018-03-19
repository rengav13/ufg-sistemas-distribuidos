module.exports = [
  require('./domain/conexao').loginPage,
  require('./filters/LoginFilter'),
  require('./filters/ServerFilter'),
  require('./filters/AuthFilter'),
  require('./domain/conexao').indexPage,
  require('./domain/conexao').ServerChangePage,
  require('./domain/processador/processar'),
  require('./domain/close-conversation')
]
