Projeto 2 - protótipo de cliente web para servidor IRC da disciplina de aplicações/sistemas distribuídos

<h2>Como Instalar</h2>
Para executar este projeto é necessário ter instalado o framework NODEJS, junto com o gerenciador de pacotes npm(instalado por padrão com o NODEJS).
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

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

<h2>Download do repositório e execução da aplicação</h2>
Para realizar instalação primeiramente é necessário baixar o repositório.
* Clonando repositório pelo git

Via terminal clone o repositório:

````
git clone https://gitlab.com/sd1-ec-2017-2/p2-g5.git
````
**Caso não tenha o git instalado siga as instruções de [GIT - Primeiros Passos](https://git-scm.com/book/pt-br/v1/Primeiros-passos-Instalando-Git)**

* Baixando repositório via página do projeto

Clicando no ícone e escolhendo a extensão do download<br/>
![image](https://docs.gitlab.com/ce/user/project/pipelines/img/job_latest_artifacts_browser.png) 

* Acesse a pasta da aplicação
via terminal (linux, macOS e Windows)

````
     cd p2-g5
````

<h3>Instalação das dependências do projeto</h3>

````
     npm install
````

<h2>Iniciar aplicação</h2>
Via terminal ou prompt na pasta da aplicação, execute o comando a seguir

````
     node app.js
`````

No browser de sua preferência, digite na barra de endereço

````
     localhost:3000
````
É esperado a tela a seguir:
![Captura_de_Tela_2017-11-06_às_01.49.01](/uploads/0de6850b9d6e2fab40eb8fd14dd6da1b/tela-login.png)

Para mais informções acesse a wiki:


[HOME](https://gitlab.com/sd1-ec-2017-2/p2-g5/wikis/home)<br/>
[COMO USAR](https://gitlab.com/sd1-ec-2017-2/p2-g5/wikis/como-usar)<br/>


<h2>Referência</h2>

[Getting Started with npm](https://www.npmjs.com/package/npm/tutorial)<br/>
[Installing Node.js Tutorial macOS](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)<br/>
[Installing Node.js Tutorial Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)<br/>
[Install Node.js via package manager](https://nodejs.org/en/download/package-manager/)<br/>

