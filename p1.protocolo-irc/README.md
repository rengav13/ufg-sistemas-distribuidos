# Projeto 1 de Sistemas Distribuidos - Grupo 5
## MEMBROS
* Vagner Luciano da Costa Silva - vagnerbas13@gmail.com - Mestre e Desenvolvedor
* Ana Gabriella Frietas Hoffmann - @ah.gabriella - Developer

# Servidor IRC (Internet Relay Chat) utilizando Sockets em NODEJS

Este projeto tem como objetivo a implementacao de um servidor IRC utilizando sockets em nodejs, ou seja, utilizaremos o protocolo de comunicação IRC para o desenvolvimento de um servidor de bate-papo (chat), permitindo a conversa em grupo ou privada atendendo as normas do [RFC 2812](https://pt.wikipedia.org/wiki/Request_for_Comments) que contém as descrições técnicas do protocolo.

## Começando

Essas instruções irão auxia-lo a utilizar uma cópia do servidor IRC em sua máquina local para fins de desenvlvimento e teste.

## Pré requisitos
	
#### Utilizando máquina [Debian 8](https://www.debian.org/distrib/), x64.
	
* [TELNET](https://pt.wikipedia.org/wiki/Telnet) - protocolo de rede que proporciona comunicacao baseada em texto.

```
  sudo apt-get update && sudo apt-get install telnet
```

  Teste de TELNET usando o Google como host

```
	telnet www.google.com 80
```
			
* [NODE.JS](https://nodejs.org/en/download/package-manager/) - interpretador de codigo JavaScript que funciona do lado do servidor.

```
	curl -sL https://deb.nodesource.com/setup_6.x
	sudo -E bash - sudo apt-get install -y nodejs
```

  Verificar versão do nodejs

``` 
     node -v  ou nodejs -v
```

#### Utilizando Mac OS

* [TELNET](https://pt.wikipedia.org/wiki/Telnet) - protocolo de rede que proporciona comunicacao baseada em texto.

	[Tutorial: Enable Telnet on Mac OS](http://ananddrs.com/2014/09/23/enable-telnet-on-mac-os-x-mavericksricks/)

* [NODE.JS](https://nodejs.org/en/download/package-manager/) - interpretador de codigo JavaScript que funciona do lado do servidor.
	
	[Tutorial Download e Install Package Nodejs on MacOS](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)

	Com o terminal aberto verificar versão do nodejs
``` 
   node -v
```

#### Utilizando Windows

 * [TELNET](https://pt.wikipedia.org/wiki/Telnet) - protocolo de rede que proporciona comunicacao baseada em texto.
 
Passo a passo para ativação do telnet no Windows

> 1 - Abrir o Painel de Controle

> 2 - Clicar em Programas 

> 3 - Clicar em Ativar ou desativar recursos do Windows

> 4 - Na lista de recursos, marcar TELNET e dar Ok.

   * [NODE.JS](https://nodejs.org/en/download/package-manager/) - interpretador de codigo JavaScript que funciona do lado do servidor.
        [Tutorial instalando nodejs Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)

## Instalação e Inicialização do Servidor

 Para iniciar este servidor você deve clonar o repositório
 ```
 	git clone https://gitlab.com/sd1-ec-2017-2/p1-g5/
 ```

**Caso não tenha o git instalado siga as instruções de [GIT - Primeiros Passos](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Instalando-Git)**

 Acesse a pasta do servidor
 
```
	$ cd ~/p1-g5/irc-server
```
 
 Iniciar o servidor
 
```
	$ nodejs main.js ou $ node main.js
```
 **O servidor IRC será iniciado na porta 6667**

 Para acessar o servidor IRC abra um novo terminal e execute

 ```
 	$ telnet localhost 6667
 ```

## Manuais

[Lista de Mensagens Suportadas](/documentacao/lista-mensagens-suportadas.md)

[Caso de Teste](/documentacao/casosdeteste.md)
  

## Referência
Você pode se interessar também em olhar outros servidores IRC disponíveis no Repositório do Ubuntu. Isto inclui ircd-ircu e ircd-hybrid.
	Visite [IRCD FAQ](http://www.irc.org/tech_docs/ircnet/faq.html) para mais detalhes sobre o servidor IRC.

Para maiores informações sobre as normas do protocolo utilizado para o desenvolvimento deste servidor visite [RFC 2812 - Internet Relay Chat](https://tools.ietf.org/html/rfc2812).
