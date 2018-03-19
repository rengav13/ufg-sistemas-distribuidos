import ValidationError from '../../error/validationerror';
import User from '../../modelo/usuario';
import Messages from '../../util/messages';

const is = require('../../util/validacao-irc');

function user(command, connection, server) {
    let userCmd = toUserCmd(command);
    validate(userCmd, connection);
    server.connections.get(connection.id).addUser(new User(userCmd));

    Messages.welcome(server, connection)
        .forEach(message => connection.reply(message.code, message.message));
}

function toUserCmd(command) {
    let commandSsplited = command.params.split(' ');
    return {
        id: command.id,
        userName: commandSsplited[0],
        byteMask: commandSsplited[1],
        realName: command.params.split(':')[1]
    }
}

function validate(userCmd, connection) {
    new ValidationError('ERR_NOTREGISTERED', ':Primeiro cadastre o nickname')
        .throwIf(!connection.nickname);

    new ValidationError('ERR_NEEDMOREPARAMS', 'USER :Faltando parametros')
        .throwIf(!userCmd.userName || !userCmd.byteMask || !userCmd.realName);

    console.log(userCmd.userName);

    new ValidationError('ERR_NEEDMOREPARAMS', 'USER :Nome de usuário inválido')
        .throwIf(!is.user(userCmd.userName));
}

module.exports = user;