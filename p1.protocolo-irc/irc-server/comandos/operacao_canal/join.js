import ValidationError from '../../error/validationerror';
import Util from '../../util/util';
import Messages from '../../util/messages';

const is = require('../../util/validacao-irc');

function join(command, connection, server) {
    let joinCmd = new JoinCommand(command, connection);
    validate(joinCmd, connection);

    if (joinCmd.isExitAll()) {
        server.channels.exitAll(connection, joinCmd.exitMessage());
    } else {
        server.channels.joinSeveral(joinCmd.channels, joinCmd.keys, connection);

        joinCmd.channels.forEach((name) => {
            Messages.welcomeToChannel(server.channels.getByName(name))
                .forEach((msg) => connection.reply(msg.code, msg.message));
        });
    }
}

class JoinCommand {

    constructor(command, connection) {
        this.id = command.id;
        this.channels = Util.splitByCommas(command.params.split(' ')[0]);
        this.keys = Util.splitByCommas(command.params.split(' ')[1]);
        this.isExitAll = () => command.params === '0';
        this.exitMessage = () => connection.nickname + ' saiu do canal';
    }

    isChannelPresent() {
        return this.isExitAll() && !Util.isNullOrEmpty(this.channels)
    };

    matchNumberOfKeys() {
        if (!this.isExitAll()) {
            return this.keys.length <= 1 || this.channels.length === this.keys.length;
        }
    };

    isMissingChannel() {
        return !this.isExitAll() && Util.isNullOrEmpty(this.channels)
    };
}

function validate(joinCmd, connection) {
    new ValidationError('ERR_NOTREGISTERED', ':Nickname não cadastrado')
        .throwIf(!connection.nickname);

    new ValidationError('ERR_NOTREGISTERED', ':User não cadastrado')
        .throwIf(!connection.user);

    new ValidationError('ERR_NEEDMOREPARAMS', 'JOIN :Faltando parametros')
        .throwIf(joinCmd.isMissingChannel());

    new ValidationError('ERR_NEEDMOREPARAMS', 'JOIN :Parametros no formato inválido')
        .throwIf(joinCmd.isChannelPresent());

    new ValidationError('ERR_NEEDMOREPARAMS', 'JOIN : O numero de keys é diferente do numero de canais')
        .throwIf(!joinCmd.matchNumberOfKeys());

    new ValidationError('ERR_NEEDMOREPARAMS', 'JOIN : Nome de canal inválido')
        .throwIf(joinCmd.channels.some((name) => !is.channel(name)));
}

module.exports = join;