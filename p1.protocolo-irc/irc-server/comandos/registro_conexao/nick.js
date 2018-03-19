import ValidationError from '../../error/validationerror';

const is = require('../../util/validacao-irc');

function nick(command, connection, server) {
    let nicknameCmd = toNicknameCmd(command);
    validate(nicknameCmd, connection, server);
    server.nicknames.add(connection, nicknameCmd.nickname);
}

function toNicknameCmd(command) {
    return {
        id: command.id,
        nickname: command.params
    }
}

function validate(command, connection, server) {
    new ValidationError('ERR_NONICKNAMEGIVEN', ':Não foi passado o nickname')
        .throwIf(!command.nickname);

    new ValidationError('ERR_ERRONEUSNICKNAME', command.nickname + ' : Nickname inválido.')
        .throwIf(!is.nickname(command.nickname));

    new ValidationError('ERR_NICKNAMEINUSE', ':Nickname já existe')
        .throwIf(server.nicknames.get(command.nickname));

    new ValidationError('ERR_RESTRICTED', ':Sua conexão está restrita')
        .throwIf(connection.isRestricted());
}

module.exports = nick;