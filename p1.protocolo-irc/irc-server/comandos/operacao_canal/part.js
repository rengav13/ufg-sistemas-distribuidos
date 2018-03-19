import ValidationError from '../../error/validationerror';
import Util from '../../util/util';

function part(command, connection, server) {
    let partCmd = toPartCmd(command);
    validate(partCmd, connection, server);
    server.channels.exitSeveral(partCmd.channels, connection, partCmd.message);
}

function toPartCmd(command) {
    return {
        id: command.id,
        channels: Util.splitByCommas(command.params.split(':')[0]),
        message: command.params.split(':')[1]
    }
}

function validate(partCmd, connection, server) {
    new ValidationError('ERR_NEEDMOREPARAMS', 'PART :Não foi passado canais para o comando')
        .throwIf(Util.isNullOrEmpty(partCmd.channels));

    partCmd.channels.forEach(name => validateChannel(name, connection, server));
}

function validateChannel(channelName, connection, server) {
    new ValidationError('ERR_NOSUCHCHANNEL', channelName + ' :O cannal não existe')
        .throwIf(!server.channels.get(channelName));

    new ValidationError('ERR_NOTONCHANNEL', channelName + ' :Você não está no canal')
        .throwIf(!server.channels.belongsTo(connection, channelName));
}

module.exports = part;