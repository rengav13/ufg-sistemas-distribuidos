import ValidationError from '../../error/validationerror';
import Formatter from '../../util/formatacao';

function quit(command, connection, server) {
    let quitCmd = toQuitCmd(command);

    validate(quitCmd);

    server.unsubscribe(connection.socket, formatMessage(connection, server, quitCmd));
    connection.socket.endByCommand = true;
    connection.socket.end();
}

function validate(quitCmd) {
    new ValidationError('ERR_NEEDMOREPARAMS', 'QUIT :Mensagem está em formato inválido')
        .throwIf(quitCmd.shouldHaveMessage() && !quitCmd.message);
}

function toQuitCmd(command) {
    return {
        id: command.id,
        message: command.params.split(':')[1],
        shouldHaveMessage: function () {
            return !!command.params;
        }
    }
}

function formatMessage(connection, server, quitCmd) {
    if (!quitCmd.message)
        return '';
    return Formatter.f(connection.userAtServerToString(server.info.id), undefined, undefined, quitCmd.message)
}

module.exports = quit;