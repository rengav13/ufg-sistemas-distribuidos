# Projeto 1 de Sistemas Distribuidos - Grupo 5
## Casos de Teste 
### Comando NICK
<table dir="auto">
<thead>
<tr>
	<th colspan="3" style="text-align: left">Caso de Teste - NICK</th>
</tr>
</thead>
<tbody>
<tr>
	<td style="text-align: left">ID</td>
	<td colspan="2" style="text-align: left">CT-NICK</td>
</tr>
<tr>
	<td style="text-align: left">OBJETIVO</td>
	<td colspan="2" style="text-align: left">Inserir nickname no servidor</td>
</tr>
<tr>
	<td style="text-align: left">PRÉ-CONDIÇÕES</td>
	<td colspan="2" style="text-align: left">Estar conectado servidor</td>
</tr>
<tr>
	<th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
	<td rowspan="3" style="text-align: left">Entrada</td>
	<td>1 - Comando nick sem passar o parâmetro</td>
	<td> <code>nick</code> </td>
</tr>
<tr>
	<td>2 - Comando nick com novo nickname único</td>
	<td> <code>nick teste</code> </td>
</tr>
<tr>
	<td>3 - Comando nick com nickname já cadastrado</td>
	<td> <code>nick teste</code> </td>
</tr>

<tr>
	<td rowspan="3" style="text-align: left">Saída</td>
	<td>1 - ERR_NONICKNAMEGIVEN</td>
	<td> <code>431 undefined :Não foi passado o nickname</code> </td>
</tr>
<tr>
	<td>2 - </td>
	<td>Nenhuma resposta é esperada</td>
</tr>
<tr>
	<td>3 - ERR_NICKNAMEINUSE</td>
	<td> <code>433 teste :Nickname já existe</code> </td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Cliente tem nickname único registrado</td>
</tr>
</tbody>
</table>

### Comando USER
<table dir="auto">
<thead>
<tr>
	<th colspan="3" style="text-align: left">Caso de Teste - USER</th>
</tr>
</thead>
<tbody>
<tr>
	<td style="text-align: left">ID</td>
	<td colspan="2" style="text-align: left">CT-USER</td>
</tr>
<tr>
	<td style="text-align: left">OBJETIVO</td>
	<td colspan="2" style="text-align: left">Inserir usuário no servidor</td>
</tr>
<tr>
	<td style="text-align: left">PRÉ-CONDIÇÕES</td>
	<td colspan="2" style="text-align: left">Estar com nickname cadastrado</td>
</tr>
<tr>
	<th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
	<td rowspan="3" style="text-align: left">Entrada</td>
	<td>1 - Comando <code>user</code> sem nickname registrado</td>
	<td> <code>user</code> </td>
</tr>
<tr>
	<td>2 - Comando user faltando parâmetros</td>
	<td> <code>user</code> ou <code>user nometeste 0 *:nome sobrenome</code> (observar necessidade de espaço antes do identidicador dois pontos</td>
</tr>
<tr>
	<td>3 - Comando user com todos os parametros</td>
	<td> <code>user nometeste 0 * :nome sobrenome </code> </td>
</tr>

<tr>
	<td rowspan="3" style="text-align: left">Saída</td>
	<td>1 - EERR_NOTREGISTERED</td>
	<td> <code>451 undefined :Primeiro cadastre o nickname</code> </td>
</tr>
<tr>
	<td>2 - ERR_NEEDMOREPARAMS</td>
	<td><code>461 teste USER :Faltando parametros</code></td>
</tr>
<tr>
	<td>3 - Mensagem de boas vindas ao servidor </td>
	<td><code>::::6667 375 teste :- **Servidor IRC G5 SD1** Mensagem do dia -
::::6667 372 teste :- Seja bem vindo ao Servidor IRC G5 SD1 EC2017
::::6667 372 teste :- Desenvolvido por: 
::::6667 372 teste :-     * Ana Gabriella Frietas Hoffmann - @ah.gabriella 
::::6667 372 teste :-     * Vagner Luciano da Costa Silva - vagnerbas13@gmail.com 
::::6667 376 teste :Fim do comando MOTD
user nometeste 0 * :nome sobrenome
::::6667 001 teste Seja bem vindo ao IRC teste!nometeste@::1:49614
::::6667 002 teste Seu servidor é :::6667, na versão 0.0.0
::::6667 003 teste O servidor foi criado em Wed Sep 27 2017 01:22:11 GMT-0300 (-03)
::::6667 004 teste **Servidor IRC G5 SD1** 0.0.0  
::::6667 005 teste CHANTYPES=#!&+ NICKLEN=9 CHANMODES=eIbq,k,flj,CFLMPQScgimnprstz INVEX=I CASEMAPPING=ascii ELIST RFC2812 :São suportados pelo servidor
::::6667 251 teste :O servidor possui 2 usuários e 0 em 1 servidor
::::6667 254 teste 0 :Canais formados
::::6667 255 teste :Eu tenho 2 clientes e 1 servidor
::::6667 375 teste :- **Servidor IRC G5 SD1** Mensagem do dia - 
::::6667 372 teste :- Seja bem vindo ao Servidor IRC G5 SD1 EC2017 
::::6667 372 teste :- Desenvolvido por: 
::::6667 372 teste :-     * Ana Gabriella Frietas Hoffmann - @ah.gabriella 
::::6667 372 teste :-     * Vagner Luciano da Costa Silva - vagnerbas13@gmail.com 
::::6667 376 teste :Fim do comando MOTD</code></td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Cliente tem dados de usuário registrado </td>
</tr>
</tbody>
</table>

### Comando MODE
<table dir="auto">
<thead>
<tr>
	<th colspan="3" style="text-align: left">Caso de Teste - MODE</th>
</tr>
</thead>
<tbody>
<tr>
	<td style="text-align: left">ID</td>
	<td colspan="2" style="text-align: left">CT-MODE</td>
</tr>
<tr>
	<td style="text-align: left">OBJETIVO</td>
	<td colspan="2" style="text-align: left">Alterar o mode de operação do usuário</td>
</tr>
<tr>
	<td style="text-align: left">PRÉ-CONDIÇÕES</td>
	<td colspan="2" style="text-align: left">Estar com nickname e user cadastrados</td>
</tr>
<tr>
	<th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
	<td rowspan="8" style="text-align: left">Entrada</td>
	<td>1 - Comando mode sem nickname cadastrado</td>
	<td> <code>mode teste</code> </td>
</tr>
<tr>
	<td>2 - Comando mode sem user cadastrado</td>
	<td> <code>mode teste</code> </td>
</tr>
<tr>
	<td>3 - Comando mode sem parametros (com nickname e user cadastrados)</td>
	<td> <code>mode</code> </td>
</tr>
<tr>
	<td>4 - Comando mode passando nickname de outro usuário</td>
	<td> <code>mode outroteste</code> </td>
</tr>
<tr>
	<td>5 - Comando mode passando o parametro nickname </td>
	<td> <code>mode teste</code> </td>
</tr>
<tr>
	<td>6 - Comando mode passando o parametro nickname e parametro de operação de modo diferente de: (+,-)(a,i,w,r,o,O,s)</td>
	<td> <code>mode teste +h</code> </td>
</tr>
<tr>
	<td>7 - Comando mode passando número maior de parametros esperados</td>
	<td> <code>mode teste mais campos</code> </td>
</tr>
<tr>
	<td>8 - Comando mode passando parametros corretos</td>
	<td> <code>mode teste +i</code> </td>
</tr>


<tr>
	<td rowspan="8" style="text-align: left">Saída</td>
	<td>1 - EEERR_NOTREGISTERED</td>
	<td> <code>451 undefined :Nickname não cadastrado</code> </td>
</tr>
<tr>
	<td>2 - EEERR_NOTREGISTERED </td>
	<td> <code>451 teste :User não cadastrado</code></td>
</tr>
<tr>
	<td>3 - ERR_NEEDMOREPARAMS</td>
	<td> <code>461 teste MODE : Faltando parametros</code> </td>
</tr>
<tr>
	<td>4 - ERR_USERSDONTMATCH</td>
	<td> <code>502 teste :Não é possivel mudar o modo de outro usuário</code></td>
</tr>
<tr>
	<td>5 - RPL_UMODEIS, apresenta o modo de operação atual</td>
	<td> <code>221 teste +</code> </td>
</tr>
<tr>
	<td>6 - ERR_UMODEUNKNOWNFLAG</td>
	<td> <code>501 teste :flag MODE desconhecida</code> </td>
</tr>
<tr>
	<td>7 - ERR_NEEDMOREPARAMS</td>
	<td> <code>461 teste MODE : Possui mais parametros que o necessario mais campos</code> </td>
</tr>
<tr>
	<td>8 - </td>
	<td>Nenhuma resposta ao usuário é esperada</td>
</tr>

<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Cliente tem mode de operação alterado</td>
</tr>
</tbody>
</table>

### Comando QUIT
<table dir="auto">
<thead>
<tr>
	<th colspan="3" style="text-align: left">Caso de Teste - QUIT</th>
</tr>
</thead>
<tbody>
<tr>
	<td style="text-align: left">ID</td>
	<td colspan="2" style="text-align: left">CT-QUIT</td>
</tr>
<tr>
	<td style="text-align: left">OBJETIVO</td>
	<td colspan="2" style="text-align: left">Sair do servidor</td>
</tr>
<tr>
	<td style="text-align: left">PRÉ-CONDIÇÕES</td>
	<td colspan="2" style="text-align: left">Estar conectado no localhost na porta 6667</td>
</tr>
<tr>
	<th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
	<td style="text-align: left">Entrada</td>
	<td>1 - Comando quit</td>
	<td> <code>quit</code> </td>
</tr>
<tr>
	<td style="text-align: left">Saída</td>
	<td>1 - Comando quit não exige parametros</td>
	<td> <code>Connection closed by foreign host.</code> </td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Cliente é desconectado do servidor</td>
</tr>
</tbody>
</table>

### Comando JOIN
<table dir="auto">
<thead>
<tr>
	<th colspan="3" style="text-align: left">Caso de Teste - JOIN</th>
</tr>
</thead>
<tbody>
<tr>
	<td style="text-align: left">ID</td>
	<td colspan="2" style="text-align: left">CT-JOIN</td>
</tr>
<tr>
	<td style="text-align: left">OBJETIVO</td>
	<td colspan="2" style="text-align: left">Criar, inserir e sair de Canais</td>
</tr>
<tr>
	<td style="text-align: left">PRÉ-CONDIÇÕES</td>
	<td colspan="2" style="text-align: left">Estar com nickname e user cadastrados</td>
</tr>
<tr>
	<th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
	<td rowspan="11" style="text-align: left">Entrada</td>
	<td>1 - Comando join sem nickname cadastrados</td>
	<td> <code>join </code> </td>
</tr>
<tr>
	<td>2 - Comando join sem user cadastrado</td>
	<td> <code>join</code> </td>
</tr>
<tr>
	<td>3 - Comando join sem parametros (com nickname e user cadastrados)</td>
	<td> <code>join</code> </td>
</tr>
<tr>
	<td>4 - Comando join passando nome de canal se parametro inicial (#,&,+,!)</td>
	<td> <code>join canalteste</code> </td>
</tr>
<tr>
	<td>5 - Comando join passando número de parametros maior que necessário </td>
	<td> <code>mode teste</code> </td>
</tr>
<tr>
	<td>6 - Comando join sem passar o parametro de chave de canal já criado com chave</td>
	<td> <code>join +canalteste</code> </td>
</tr>
<tr>
	<td>7 - Comando join em canal já criado e com parametro chave correto</td>
	<td> <code>join +canalteste chave</code> </td>
</tr>
<tr>
	<td>8 - Comando join com parametro 0</td>
	<td> <code>join 0</code> </td>
</tr>
<tr>
    <td>9 - Comando join em mais de um canal</td>
    <td> <code>join +teste,#outrocanal</code> </td>
</tr>
<tr>
    <td>10 - Comando join em canal que já está participando</td>
    <td> <code>join +teste</code> </td>
</tr>
<tr>
    <td>11 - Comando join em canal, visão de outro usuário do canal</td>
    <td><code>join +teste</code></td>
</tr>

<tr>
	<td rowspan="11" style="text-align: left">Saída</td>
	<td>1 - EEERR_NOTREGISTERED</td>
	<td> <code>451 undefined :Nickname não cadastrado</code> </td>
</tr>
<tr>
	<td>2 - EEERR_NOTREGISTERED </td>
	<td> <code>451 teste :User não cadastrado</code></td>
</tr>
<tr>
	<td>3 - ERR_NEEDMOREPARAMS</td>
	<td> <code>461 teste JOIN : Faltando parametros</code> </td>
</tr>
<tr>
	<td>4 - ERR_NEEDMOREPARAMS</td>
	<td> <code>461 teste JOIN : O nome do canal deve iniciar com #, &, + ou ! ->canalteste</code></td>
</tr>
<tr>
	<td>5 - ERR_NEEDMOREPARAMS</td>
	<td> <code>461 teste JOIN : Possui mais parametros que o necessario</code> </td>
</tr>
<tr>
	<td>6 - ERR_BADCHANNELKEY</td>
	<td> <code>475 teste +canalteste:Não foi possivel conectar ao canal, chave inválida</code> </td>
</tr>
<tr>
	<td>7 - RPL_NOTOPIC, RPL_NAMREPLY, RPL_ENDOFNAMES</td>
	<td> <code>::::6667 331 teste +canalteste:Não foi setado um topico para o canal
		::::6667 353 teste = +canalteste :novo teste
		::::6667 366 teste +canalteste :Fim da lista de NAMES</code></td>
</tr>
<tr>
	<td>8 - Erro no Servidor</td>
	<td>Em processo de alteração</td>
</tr>
<tr>
    <td>9 - </td>
    <td><code>::::6667 331 teste +teste:Não foi setado um topico para o canal
::::6667 353 teste = +teste :novo teste
::::6667 366 teste +teste :Fim da lista de NAMES
::::6667 331 teste #outrocanal:Não foi setado um topico para o canal
::::6667 353 teste = #outrocanal :teste
::::6667 366 teste #outrocanal :Fim da lista de NAMES</code></td>
</tr>
<tr>
    <td>10 - Nenhuma mensagem é esperada</td>
    <td></td>
</tr>
<tr>
    <td>11 - visão de outro usuário do canal</td>
    <td><code>teste> Entrou no canal +teste</code></td>
</tr>

<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Cliente tem usuário cadastrado ou removido da lista de canais</td>
</tr>
</tbody>
</table>

### Comando PART
<table dir="auto">
<thead>
<tr>
    <th colspan="3" style="text-align: left">Caso de Teste - PART</th>
</tr>
</thead>
<tbody>
<tr>
    <td style="text-align: left">ID</td>
    <td colspan="2" style="text-align: left">CT-PART</td>
</tr>
<tr>
    <td style="text-align: left">OBJETIVO</td>
    <td colspan="2" style="text-align: left">Sair de Canais especificos, podendo enviar mensagens adicional</td>
</tr>
<tr>
    <td style="text-align: left">PRÉ-CONDIÇÕES</td>
    <td colspan="2" style="text-align: left">Estar em algum canal</td>
</tr>
<tr>
    <th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
    <td rowspan="5" style="text-align: left">Entrada</td>
    <td>1 - Comando part com parametro de canal existente, porem sem nickname cadastrado </td>
    <td> <code>part +teste</code> </td>
</tr>
<tr>
    <td>2 - Comando part sem parametros</td>
    <td> <code>part</code> </td>
</tr>
<tr>
    <td>3 - Comando part em canal que não existe</td>
    <td> <code>part +canalnaoexiste</code> </td>
</tr>
<tr>
    <td>4 - Comando part em canal que não está participando</td>
    <td> <code>part +teste</code> </td>
</tr>
<tr>
    <td>5 - Comando part em canal passando tambem parametro de mensagem</td>
    <td> <code>part +teste ,adeus</code> </td>
</tr>
<tr>
    <td rowspan="5" style="text-align: left">Saída</td>
    <td>1 - ERR_NOTONCHANNEL</td>
    <td> <code>442 undefined :Você não está no canal</code> </td>
</tr>
<tr>
    <td>2 -ERR_NEEDMOREPARAMS </td>
    <td><code>461 teste PART :Faltando parametros</code></td>
</tr>
<tr>
    <td>3 - ERR_NOSUCHCHANNEL</td>
    <td> <code>403 teste c :O cannal não existe</code> </td>
</tr>
<tr>
    <td>4 - ERR_NOTONCHANNEL</td>
    <td> <code>442 teste +teste :Você não está no canal</code> </td>
</tr>
<tr>
    <td>5 - Nenhuma mensagem pro usuário é esperada</td>
    <td> Mensagem vista por outros participantes do canal
        <code>teste > adeus</code>
        <code>teste > Saiu do canal +teste</code>
    </td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left">Cliente tem usúario removido da lista do canal</td>
</tr>
</tbody>
</table>

### Comando PRIVMSG
<table dir="auto">
<thead>
<tr>
    <th colspan="3" style="text-align: left">Caso de Teste - PRIVMSG</th>
</tr>
</thead>
<tbody>
<tr>
    <td style="text-align: left">ID</td>
    <td colspan="2" style="text-align: left">CT-PRIVMSG</td>
</tr>
<tr>
    <td style="text-align: left">OBJETIVO</td>
    <td colspan="2" style="text-align: left">Envio privado de mensagens entre usuários e envio de mensagem para canais.</td>
</tr>
<tr>
    <td style="text-align: left">PRÉ-CONDIÇÕES</td>
    <td colspan="2" style="text-align: left">Estar participando de algum canal</td>
</tr>
<tr>
    <th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
    <td rowspan="7" style="text-align: left">Entrada</td>
    <td>1 - Comando privmsg sem nickname e user cadastrado</td>
    <td> <code>privmsg +teste :texto de teste</code> </td>
</tr>
<tr>
    <td>2 - Comando privmsg para um canal que não está participando</td>
    <td> <code>privmsg +teste :oi canal teste</code> </td>
</tr>
<tr>
    <td>3 - Comando privmsg sem parametros destinatário e mensagem</td>
    <td> <code>privmsg</code> </td>
</tr>
<tr>
    <td>4 - Comando privmsg sem parametro de mensagem </td>
    <td> <code>privmsg +teste</code></br>
    <code>privmsg user</code> </td>
</tr>
<tr>
    <td>5 - Comando privmsg para vários destinátarios</td>
    <td> <code>privmsg user,+teste :ola a todos</code> </td>
</tr>
<tr>
    <td>6 - Comando privmsg para nickname invalido</td>
    <td> <code>privmsg naouser :ola</code> </td>
</tr>
<tr>
    <td>7 - Comando privmsg para canal invalido</td>
    <td> <code>privmsg +naocanal :ola</code> </td>
</tr>
<tr>
    <td rowspan="7" style="text-align: left">Saída</td>
    <td>1 - ERR_NOTREGISTERED</td>
    <td> <code>451 undefined :Nickname não cadastrado</code></br>
        <code>451 teste :User não cadastrado</code>
    </td>
</tr>
<tr>
    <td>2 - ERR_NOTONCHANNEL</td>
    <td><code>442 teste +teste :Você não está no canal</code></td>
</tr>
<tr>
    <td>3 - ERR_NORECIPIENT</td>
    <td> <code>411 teste :Não foi informado o destinatario</code> </td>
</tr>
<tr>
    <td>4 - ERR_NOTEXTTOSEND</td>
    <td> <code>412 teste :Não foi informado texto para enviar</code> </td>
</tr>
<tr>
    <td>5 - Nenhuma mensagens espera</td>
    <td>Mensagem recebida pelos destinatários: <code>ola a todos</code></td>
</tr>
<tr>
    <td>6 - ERR_NOSUCHNICK, ERR_UNKNOWNCOMMAND</td>
    <td><code>401 teste naouser :Nickname não cadastrado!</code></br>
        <code>421 teste PRIVMSG :Algum parametro especficado não pode ser interpretad</code></td>
</tr>
<tr>
    <td>7 - ERR_NOSUCHCHANNEL</td>
    <td><code>403 teste :Canal inexistente</code></td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Cliente tem mensagens enviadas para canais e outros usuários</td>
</tr>
</tbody>
</table>

### Comando USERHOST
<table dir="auto">
<thead>
<tr>
    <th colspan="3" style="text-align: left">Caso de Teste - USERHOST</th>
</tr>
</thead>
<tbody>
<tr>
    <td style="text-align: left">ID</td>
    <td colspan="2" style="text-align: left">CT-USERHOST</td>
</tr>
<tr>
    <td style="text-align: left">OBJETIVO</td>
    <td colspan="2" style="text-align: left">Utilizado para listar o host do nickname informado</td>
</tr>
<tr>
    <td style="text-align: left">PRÉ-CONDIÇÕES</td>
    <td colspan="2" style="text-align: left">Estar conectado no servidor</td>
</tr>
<tr>
    <th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
    <td rowspan="3" style="text-align: left">Entrada</td>
    <td>1 - Comando userhost sem parametros </td>
    <td> <code>userhost</code> </td>
</tr>
<tr>
    <td>2 - Comando userhost passando nickname</td>
    <td> <code>userhost teste</code> </td>
</tr>
<tr>
    <td>3 - userhost passando mais que um nickname</td>
    <td> <code>userhost teste user</code> </td>
</tr>
    <td rowspan="3" style="text-align: left">Saída</td>
    <td>1 - ERR_NEEDMOREPARAMS</td>
    <td> <code>461 teste USERHOST : Faltando parametros</code> </td>
</tr>
<tr>
    <td>2 - RPL_USERHOST </td>
    <td><code>302 teste teste=-username@::1</code></td>
</tr>
<tr>
    <td>3 - RPL_USERHOST</td>
    <td><code>::::8080 302 teste teste=-username@::1</code></br>
        <code>::::8080 302 teste user=-outrouser@::1</code> </td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Cliente tem userhost apresentado</td>
</tr>
</tbody>
</table>

### Comando não listado
<table dir="auto">
<thead>
<tr>
    <th colspan="3" style="text-align: left">Caso de Teste - NOTLIST</th>
</tr>
</thead>
<tbody>
<tr>
    <td style="text-align: left">ID</td>
    <td colspan="2" style="text-align: left">CT-NOTLIST</td>
</tr>
<tr>
    <td style="text-align: left">OBJETIVO</td>
    <td colspan="2" style="text-align: left">Inserir comando não listado no servidor e informar erro</td>
</tr>
<tr>
    <td style="text-align: left">PRÉ-CONDIÇÕES</td>
    <td colspan="2" style="text-align: left">Estar conectado no servidor</td>
</tr>
<tr>
    <th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
    <td rowspan="1" style="text-align: left">Entrada</td>
    <td>1 - Qualquer comando não listado</td>
    <td> <code>notlist</code> </td>
</tr>
<tr>
    <td rowspan="1" style="text-align: left">Saída</td>
    <td>1 - ERR_UNKNOWNCOMMAND</td>
    <td> <code>421 teste notlist :Comando desconhecido</code> </td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Aguardo de novo comando</td>
</tr>
</tbody>
</table>

### Comando PING
<table dir="auto">
<thead>
<tr>
    <th colspan="3" style="text-align: left">Caso de Teste - PING</th>
</tr>
</thead>
<tbody>
<tr>
    <td style="text-align: left">ID</td>
    <td colspan="2" style="text-align: left">CT-PING</td>
</tr>
<tr>
    <td style="text-align: left">OBJETIVO</td>
    <td colspan="2" style="text-align: left">Comando utilizado para testar a ativação do usuário</td>
</tr>
<tr>
    <td style="text-align: left">PRÉ-CONDIÇÕES</td>
    <td colspan="2" style="text-align: left">Estar conectado no servidor</td>
</tr>
<tr>
    <th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
    <td rowspan="3" style="text-align: left">Entrada</td>
    <td>1 - ping sem parametro nickname</td>
    <td> <code>ping</code> </td>
</tr>
<tr>
    <td>2 - ping com paramtro nickname</td>
    <td> <code>ping :teste</code> </td>
</tr>
<tr>
    <td>3 - ping com paramtro nickname de outro usuário </td>
    <td> <code>ping :outrouser</code> </td>
</tr>

<tr>
    <td rowspan="3" style="text-align: left">Saída</td>
    <td>1 - ERR_NOORIGIN</td>
    <td> <code>409 teste :Não foi especificado a origem</code> </td>
</tr>
<tr>
    <td>2 - </td>
    <td> <code>PONG ::::8080</code> </td>
</tr>
<tr>
    <td>3 - ERR_NOSUCHNICK</td>
    <td> <code>401 teste outrouser :Não é o mesmo nickname da conexão</code> </td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Não há pós condições</td>
</tr>
</tbody>
</table>

### Comando PONG
<table dir="auto">
<thead>
<tr>
    <th colspan="3" style="text-align: left">Caso de Teste - PONG</th>
</tr>
</thead>
<tbody>
<tr>
    <td style="text-align: left">ID</td>
    <td colspan="2" style="text-align: left">CT-PONG</td>
</tr>
<tr>
    <td style="text-align: left">OBJETIVO</td>
    <td colspan="2" style="text-align: left">Comando utilizado para testar a ativação do usuário</td>
</tr>
<tr>
    <td style="text-align: left">PRÉ-CONDIÇÕES</td>
    <td colspan="2" style="text-align: left">Estar conectado no servidor</td>
</tr>
<tr>
    <th colspan="3" style="text-align: left">Procedimentos: Entradas e Saídas</th>
</tr>
<tr>
    <td rowspan="3" style="text-align: left">Entrada</td>
    <td>1 - pong sem parametro nickname</td>
    <td> <code>pong</code> </td>
</tr>
<tr>
    <td>2 - pong com paramtro nickname</td>
    <td> <code>pong :teste</code> </td>
</tr>
<tr>
    <td>3 - pong com paramtro nickname de outro usuário </td>
    <td> <code>pong :outrouser</code> </td>
</tr>

<tr>
    <td rowspan="3" style="text-align: left">Saída</td>
    <td>1 - ERR_NOORIGIN</td>
    <td> <code>409 teste :Não foi especificado a origem</code> </td>
</tr>
<tr>
    <td>2 - </td>
    <td> <code>nenhuma resposta é esperada</code> </td>
</tr>
<tr>
    <td>3 - ERR_NOSUCHNICK</td>
    <td> <code>401 teste outrouser :Não é o mesmo nickname da conexão</code> </td>
</tr>
<tr>
<td style="text-align: left"> Pós condições </td>
<td colspan="2" style="text-align: left"> Não há pós condições</td>
</tr>
</tbody>
</table>
