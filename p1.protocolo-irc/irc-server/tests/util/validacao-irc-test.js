const should = require('should');
const is = require('../../util/validacao-irc');

describe('validacao-irc.js > Teste de métodos privados', () => {
    it('Deve validar se é um digito.', () => {
        is.private.digit('vagner').should.be.false();
        is.private.digit('23Aaf').should.be.false();
        is.private.digit('6982348923').should.be.true();
    });

    it('Deve validar se é um digito hex decimal.', () => {
        is.private.hexDigit('vagner').should.be.false();
        is.private.hexDigit('23Aaf').should.be.true();
        is.private.hexDigit('va45f').should.be.false();
    });

    it('Deve validar se é uma letra.', () => {
        is.private.letter('32864').should.be.false();
        is.private.letter('43923{#@%#$%}').should.be.false();
        is.private.letter('esta digitando').should.be.false();
        is.private.letter('está').should.be.false();
        is.private.letter('meuTeste').should.be.true();
    });

    it('Deve validar se é um caracter especial.', () => {
        is.private.special('sdlf[\\]^_`{|}sahf').should.be.false();
        is.private.special('vrá!@#$#$*{};;;').should.be.false();
        is.private.special('[\\]^_`{|}').should.be.true();
    });

    it('Deve validar se é um IPv4.', () => {
        is.private.ipv4('192.168.9').should.be.false();
        is.private.ipv4('x.y.z.r').should.be.false();
        is.private.ipv4('192.1.0.166').should.be.true();
    });

    it('Deve validar se é um IPv6.', () => {
        is.private.ipv6('192.1.0.166').should.be.false();
        is.private.ipv6('KA:KE:KR:KKKK:LU:AS:SD:DF').should.be.false();
        is.private.ipv6('FF:FF:FF:FF:FF:FF:FF:FF').should.be.true();
        is.private.ipv6('12:452:239:12:564:23:8:900').should.be.true();
        is.private.ipv6('0:0:0:0:0:FFFF:192.168.68.9').should.be.true();
    });

    it('Deve validar se é um endereço host.', () => {
        is.private.hostAddr('192.18.29').should.be.false();
        is.private.hostAddr('23:232:434:121:').should.be.false();
        is.private.hostAddr('192.168.68.9').should.be.true();
        is.private.hostAddr('0:0:0:0:0:FFFF:192.168.68.9').should.be.true();
    });

    it('Deve validar se é um short name.', () => {
        is.private.shortName('!sdjhf').should.be.false();
        is.private.shortName('nN{ICK-PC').should.be.false();
        is.private.shortName('nick-pc').should.be.true();
        is.private.shortName('34325df-pc').should.be.true();
    });

    it('Deve validar se é um host name.', () => {
        is.private.hostName('!sdjhf').should.be.false();
        is.private.hostName('nN{ICK-PC').should.be.false();
        is.private.hostName('nick-pc.5612').should.be.true();
        is.private.hostName('34325df-pc.ff.vagn-x').should.be.true();
    });
});

describe('validacao-irc.js > Teste de métodos publicos', () => {
    it('Deve validar se é uma chave.', () => {
        is.key('jashd ajsdf').should.be.false();
        is.key('\u0006asdjlksadfsa').should.be.false();
        is.key('\u0001\u0002\u0003\u0004\u0005').should.be.true();
        is.key('\u0007\u0008\u000Cvag{}#@%fd$%%$||^`~n').should.be.true();
    });

    it('Deve validar se é um user.', () => {
        is.user('jashd ajsdf').should.be.false();
        is.user('hjasas@akjsdsa.com').should.be.false();
        is.user('\u0007\u0008\u000Cg{}#%fd$%%$||^`~n').should.be.false();
        is.user('\u0001sadlk\u0002\u0003\u0004askdsa').should.be.false();
        is.user('sadlk\u0002\u0003\u0004askdsa').should.be.true();
        is.user('g{}#%fd$%%$||^`~n').should.be.true();
    });

    it('Deve validar se é id de canal.', () => {
        is.channelId('A9A1').should.be.false();
        is.channelId('aaA1h').should.be.false();
        is.channelId('A9A1H').should.be.true();
    });

    it('Deve validar se é um nome de canal.', () => {
        is.channelName(',ad').should.be.false();
        is.channelName(': asfksd\n\r').should.be.false();
        is.channelName('#chanel1').should.be.true();
        is.channelName('!cha\u0002nel1').should.be.true();
    });

    it('Deve validar se é um nickname.', () => {
        is.nickname('!sdjhf').should.be.false();
        is.nickname(':NICK-PC').should.be.false();
        is.nickname('#nick-pc').should.be.false();
        is.nickname('ni{}ck-pc').should.be.true();
    });

    it('Deve validar se é um host valido.', () => {
        is.host('!sdjhf').should.be.false();
        is.host('nN{ICK-PC').should.be.false();
        is.host('192.168.200.166').should.be.true();
        is.host('34325df-pc.ff.vagn-x').should.be.true();
    });

    it('Deve validar se é um server name.', () => {
        is.serverName('!sdjhf').should.be.false();
        is.serverName('nN{ICK-PC').should.be.false();
        is.serverName('nick-pc.5612').should.be.true();
        is.serverName('34325df-pc.ff.vagn-x').should.be.true();
    });

    it('Deve validar se é um nome de canal.', () => {
        is.channel('!vagner').should.be.false();
        is.channel('!A9A1Hcanal').should.be.true();
        is.channel('#vtest').should.be.true();
        is.channel('#x:y').should.be.true();
        is.channel('#m').should.be.true();
    });

    it('Deve validar se é um destino de mensagem valido.', () => {
        is.msgTo('#vagner').should.be.true();
        is.msgTo('vagner%192.168.200.166@nick-pc').should.be.true();
        is.msgTo('#vagner%192.168.200.66').should.be.true();
        is.msgTo('vagner-pc').should.be.true();
        is.msgTo('nick!user@192.16.1.1').should.be.true();
    });

    it('Deve validar se é um alvo.', () => {
        is.msgTarget('vagner-pc, vagner%192.168.200.166@nick-pc,nick!user@192.16.1.1').should.be.false();
        is.msgTarget('vagner-pc,vagner%192.168.200.166@nick-pc,nick!user@192.16.1.1').should.be.true();
    });

    it('Deve validar se é um alvo.', () => {
        is.target('vagner-pc').should.be.true();
        is.target('34325df-pc.ff.vagn-x').should.be.true();
    });

    it('Deve validar se usuario válido para comando privmsg.', () => {
        is.privmsgUser('#vagner').should.be.false();
        is.privmsgUser('#vagner%192.168.200.66').should.be.false();
        is.privmsgUser('34325df-pc.ff.vagn-x').should.be.false();
        is.privmsgUser('vagner%192.168.200.166@nick-pc').should.be.true();
        is.privmsgUser('vagner-pc').should.be.true();
        is.privmsgUser('nick!user@192.16.1.1').should.be.true();
    });

});