Projeto 3 - Protótipo de cliente web para servidor IRC da disciplina de sistemas distribuídos. Utilizando RabbitMQ para desacoplar cliente do servidor.

<h2>Como Instalar</h2>
Para executar este projeto é necessário ter instalado o framework NODEJS, junto com o gerenciador de pacotes npm(instalado por padrão com o NODEJS).
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [rabbitMQ](https://www.rabbitmq.com/)

<h2>Download e Instalação do node</h2>

<h3>Debian 8</h3>
Via terminal, instalação e teste do **node** e **npm**.

Instalação do pacote nodejs
```
     curl -sL https://deb.nodesource.com/setup | sudo -E bash -
 
     sudo apt-get install -y nodejs
```
Atualização do npm
```
     npm install -g npm
````
Teste do node e npm
Verificar a versão instalada na máquina
````
     node -v

     npm -v
````
Download e Instalação do RabbitMQ para Debian<br/>
    Siga os passo descritos em [rabbitMQ Install Debian](https://www.rabbitmq.com/install-debian.html)
    

<h3>macOS</h3>
Instalação e teste do **node**
1. Download do Node.js .pkg em [Nodejs downloads](https://nodejs.org/en/download/)
2. Execute o Node.js .pkg Installer
3. Verificando se foi instalado corretamente, via terminal execute o comando

````
     node -v
````
Atualização e teste do **npm**, via terminal execute

````
     sudo npm install npm --global
````

Para verificar a versão instalada na máquina

````
     npm -v
````
Download e Instalação do RabbitMQ para MacOS<br/>
Siga os passo descritos em [rabbitMQ Install MacOS ](https://www.rabbitmq.com/install-homebrew.html)

<h3>Windows</h3>
Instalação e teste do **node**
1. Download do Node.js .msi em [Nodejs downloads](https://nodejs.org/en/download/)
2. Execute o Node.js .msi Installer
3. Verificando se foi instalado corretamente, via prompt execute o comando

````
     node -v
````
Atualização e teste do **npm**, via prompt execute

````
    npm install npm --global
````

Para verificar a versão instalada na máquina

````
     npm -v
````

Download e Instalação do RabbitMQ para Windows<br/>
Siga os passo descritos em [rabbitMQ Install Windows](https://www.rabbitmq.com/install-windows.html)


<h2>Download do repositório e execução da aplicação</h2>
Para realizar instalação primeiramente é necessário baixar o repositório.
* Clonando repositório pelo git

Via terminal clone o repositório:

````
git clone https://gitlab.com/sd1-ec-2017-2/p3-g5.git
````
**Caso não tenha o git instalado siga as instruções de [GIT - Primeiros Passos](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Instalando-Git)**

* Baixando repositório via página do projeto

Clicando no ícone e escolhendo a extensão do download<br/>
![image](https://docs.gitlab.com/ce/user/project/pipelines/img/job_latest_artifacts_browser.png) 

* Acesse a pasta da aplicação
via terminal (linux, macOS e Windows)

````
     cd p3-g5
````

<h3>Instalação das dependências do projeto</h3>

````
     npm install
````

<h2> Verifique se o rabbitmq server está rodando </h2>
````
    rabbitmqctl status
````
Caso o servidor não esteja ativo acesso os link do seu S.O. e siga instruções de inicialização

[rabbitMQ Debian](https://www.rabbitmq.com/install-debian.html)<br/>
[rabbitMQ MacOS ](https://www.rabbitmq.com/install-homebrew.html)<br/>
[rabbitMQ Windows](https://www.rabbitmq.com/install-windows.html)<br/>

<h2>Iniciar aplicação</h2>
Via terminal ou prompt na pasta da aplicação p3-g5, execute o comando a seguir

````
     node app.js
`````

Em outro promt ou terminal acesse a pasta amqp-irc contida em p3-g5
````
    cd amqp-irc
`````
Agora execute o comando a seguir

````
     node app.js
`````

No browser de sua preferência, digite na barra de endereço

````
     localhost:3000
````
É esperado a tela a seguir:<br/>
![login](/uploads/29e33076fc88a7c235867e059043dfd9/login.png)

Para mais informções acesse a wiki:


[HOME](https://gitlab.com/sd1-ec-2017-2/p3-g5/wikis/home)<br/>


<h2>Referência</h2>

[Getting Started with npm](https://www.npmjs.com/package/npm/tutorial)<br/>
[Installing Node.js Tutorial macOS](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)<br/>
[Installing Node.js Tutorial Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)<br/>
[Install Node.js via package manager](https://nodejs.org/en/download/package-manager/)<br/>
[Install rabbitMQ Debian](https://www.rabbitmq.com/install-debian.html)<br/>
[Install rabbitMQ MacOS ](https://www.rabbitmq.com/install-homebrew.html)<br/>
[Install rabbitMQ Windows](https://www.rabbitmq.com/install-windows.html)<br/>

