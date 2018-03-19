import ValidationError from '../../error/validationerror';
import Util from '../../util/util';

//TODO testar
function userhost(command, connection, server) {
    let userHostCmd = toUserHostCmd(command);
    validate(userHostCmd);

    userHostCmd.nicknames
        .map(nickname => {
            return {nickname: nickname, address: server.nicknames.get(nickname)};
        })
        .filter(param => !!param.address)
        .forEach(param => connection.reply('RPL_USERHOST', replyMessage(param, server)));
}

function toUserHostCmd(command) {
    return {
        id: command.id,
        nicknames: command.params.split(' ')
    }
}

function validate(userHostCmd) {
    new ValidationError('ERR_NEEDMOREPARAMS', 'USERHOST : Faltando parametros')
        .throwIf(Util.isNullOrEmpty(userHostCmd.nicknames));
}

function replyMessage(param, server) {
    let endPoint = server.connections.get(param.address);
    return param.nickname + '=-' + endPoint.user.userName + '@' + server.info.id;
}

module.exports = userhost;