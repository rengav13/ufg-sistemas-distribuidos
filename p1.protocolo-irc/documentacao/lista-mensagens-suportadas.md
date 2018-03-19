# Projeto 1 de Sistemas Distribuidos - Grupo 5

## Servidor IRC (Internet Relay Chat) utilizando Sockets em NODEJS

Este projeto tem como objetivo a implementacao de um servidor IRC utilizando sockets em nodejs, ou seja, utilizaremos o protocolo de comunicação IRC para o desenvolvimento de um servidor de bate-papo (chat), permitindo a conversa em grupo ou privada atendendo as normas do [RFC 2812](https://pt.wikipedia.org/wiki/Request_for_Comments)  que contém as descrições técnicas do protocolo.

## Lista de Mensagens Permitidas

### Registro de Conexão
Mensagens responsaveis por registrar uma conexão com o servidor IRC:[RFC Connection Registration](https://tools.ietf.org/html/rfc2812#section-3.1")

| Mensagem | Parametro | RFC |
| -------- | --------- | --- |
|NICK| nickname |Comando utilizado para registrar um nickname (apelido) ou alterar um já existente, garantindo unicidade. [RFC NICK](https://tools.ietf.org/html/rfc2812#section-3.1.2)|
|USER | user mode \* :realname | Comando utilizado para registrar usuário(login), modo de operação inicial e o nome real do usuário, **é preciso ter nickname cadastrado**. [RFC USER](https://tools.ietf.org/html/rfc2812#section-3.1.3)|
|MODE|nickname ( "+" / "-" )( "i" / "w" / "o" / "O" / "r" ) )|Comando utilizado para identificar o modo como os usuários irão ser visualizados entre si. **é necessário ter nickname e user cadastrados** [RFC MODE](href=https://tools.ietf.org/html/rfc2812#section-3.1.5).|
|QUIT||Comando utilizado para encerrar a conexão com servidor. [RFC QUIT](https://tools.ietf.org/html/rfc2812#section-3.1.7)

### Operações de Canal
Mensagens responsaveis por manipular canais, ou seja, criar, entrar e sair de canais: [RFC Channel Operations](https://tools.ietf.org/html/rfc2812#section-3.2")

| Mensagem | Parametro | RFC |
| -------- | --------- | --- |
|JOIN | (#,&,+,!)nome_canal chave_de_acesso|Comando utilizado para criar, entrar em canais. [RFC JOIN](https://tools.ietf.org/html/rfc2812#section-3.1.2)|
|PART|canal , mensagem(opcional)|Comando para sair de canais. [RFC PART](https://tools.ietf.org/html/rfc2812#section-3.2.2)|

### Envio de mensagem
Mensagens responsaveis pela comunicação entre usuarios [RFC Sending messages](https://tools.ietf.org/html/rfc2812#section-3.3)

| Mensagem | Parametro | RFC |
| -------- | --------- | --- |
|PRIVMSG | destinario mensagem | Utilizado para o envio privado de mensagens entre usuários e envio de mensagem para canais. [RFC Private messages](https://tools.ietf.org/html/rfc2812#section-3.3.1)|

### Mensagens opcionais

| Mensagem | Parametro | RFC |
| -------- | --------- | --- |
|USERHOST|nickname(s) (separados por espaço) | Utilizado para listar o host do nickname informado. [RFC Userhost](https://tools.ietf.org/html/rfc2812#section-4.8)|

### Mensagens diversas

| Mensagem | Parametro | RFC |
| -------- | --------- | --- |
|PING |:nickname | Mensagem trocada entre usuário e servidor para teste de conexão [RFC Ping](https://tools.ietf.org/html/rfc2812#section-3.7.2)|
|PONG |:nickname |Mensagem trocada entre usuário e servidor para teste de conexão [RFC Pong](https://tools.ietf.org/html/rfc2812#section-3.7.3)|

