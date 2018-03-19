import ValidationError from "../../error/validationerror";
import Util from '../../util/util';

const is = require('../../util/validacao-irc');

function mode(command, connection) {
    let modeCmd = toModeCmd(command);
    validate(command, modeCmd, connection);

    if (modeCmd.isShowUserModes()) {
        connection.reply('RPL_UMODEIS', connection.user.modesToString());
        return;
    }

    Util.removeByPattern(modeCmd.insertModes, /^([a]|[o]|[O])$/);
    Util.removeByPattern(modeCmd.removeModes, /^([a]|[r])$/);

    connection.user.addModes(modeCmd.insertModes);
    connection.user.removeModes(modeCmd.removeModes);
    console.log(connection.user.modesToString());
}

function toModeCmd(command) {
    let commandSplited = command.params.split(' ');
    let insert = getModes(commandSplited[1], /[-]\w*/g, /[+]/g);
    let remove = getModes(commandSplited[1], /[+]\w*/g, /[-]/g);
    return {
        id: command.id,
        nickname: commandSplited[0],
        insertModes: insert,
        removeModes: remove,
        isShowUserModes: function () {
            return insert.length === 0 && remove.length === 0
        }
    }
}

function getModes(command, replace, split) {
    if (command) {
        return command.replace(':', '').replace(replace, '').split(split).join('').split('');
    }
    return [];
}

function validate(rawCmd, modeCmd, connection) {
    new ValidationError('ERR_NEEDMOREPARAMS', 'MODE : Possui mais parametros que o necessario')
        .throwIf(rawCmd.params.split(' ').length > 2);

    new ValidationError('ERR_NOTREGISTERED', ':Nickname não cadastrado')
        .throwIf(!connection.nickname);

    new ValidationError('ERR_NOTREGISTERED', ':User não cadastrado')
        .throwIf(!connection.user);

    new ValidationError('ERR_NEEDMOREPARAMS', 'MODE : Faltando parametros')
        .throwIf(!modeCmd.nickname);

    new ValidationError('ERR_NEEDMOREPARAMS', 'MODE :Nickname inválido')
        .throwIf(!is.nickname(modeCmd.nickname));

    new ValidationError('ERR_USERSDONTMATCH', ':Não é possivel mudar o modo de outro usuário')
        .throwIf(modeCmd.nickname !== connection.nickname);

    new ValidationError('ERR_UMODEUNKNOWNFLAG', ':flag MODE desconhecida')
        .throwIf(modeCmd.insertModes.some(isInvalidFlag));

    new ValidationError('ERR_UMODEUNKNOWNFLAG', ':flag MODE desconhecida')
        .throwIf(modeCmd.removeModes.some(isInvalidFlag));
}

function isInvalidFlag(flag) {
    return !/^[a]|[i]|[w]|[r]|[o]|[O]|[s]$/.test(flag);
}

module.exports = mode;