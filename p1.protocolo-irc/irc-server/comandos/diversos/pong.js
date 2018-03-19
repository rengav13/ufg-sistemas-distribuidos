import ValidationError from '../../error/validationerror';

//implementação completa, mas pode variar de acordo com a implementação de algumas caracteristicas do servidor
function pong(command, connection, server) {
    let pingCmd = toPongCmd(command);
    validate(pingCmd, connection);
}

function toPongCmd(command) {
    return {
        id: command.id,
        nickname: command.params.split(':')[1]
    }
}

function validate(pongCmd, connection) {
    new ValidationError('ERR_NOORIGIN', ':Não foi especificado a origem')
        .throwIf(!pongCmd.nickname);

    new ValidationError('ERR_NOSUCHNICK', pongCmd.nickname + ' :Não é o mesmo nickname da conexão')
        .throwIf(connection.nickname !== pongCmd.nickname);
}

module.exports = pong;