import ValidationError from '../../error/validationerror';

function ping(command, connection, server) {
    let pingCmd = toPingCmd(command);
    validate(pingCmd, connection);
    connection.unicast(null, 'PONG ' + ':' + server.info.id)
}

function toPingCmd(command) {
    return {
        id: command.id,
        nickname: command.params.split(':')[1]
    }
}

function validate(pingCmd, connection) {
    new ValidationError('ERR_NOORIGIN', ':Não foi especificado a origem')
        .throwIf(!pingCmd.nickname);

    new ValidationError('ERR_NOSUCHNICK', pingCmd.nickname + ' :Não é o mesmo nickname da conexão')
        .throwIf(connection.nickname !== pingCmd.nickname);
}

module.exports = ping;