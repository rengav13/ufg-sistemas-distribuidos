import ValidationError from '../../error/validationerror';
import Util from '../../util/util';

const is = require('../../util/validacao-irc');

function privmsg(command, connection, server) {
    preValidate(command);
    let privmsgCmd = toPrivmsgCmd(command);
    validate(privmsgCmd, connection, server);

    privmsgCmd.destinations
        .filter((dest) => dest.type === DestinationType.NICKNAME)
        .forEach((dest) => {
            let address = server.nicknames.get(dest.target);
            server.connections.get(address).unicast(connection, privmsgCmd.message);
        });

    privmsgCmd.destinations
        .filter((dest) => dest.type === DestinationType.CHANNEL)
        .forEach((dest) => server.channels.getByName(dest.target).multicast(connection, privmsgCmd.message));

    /*privmsgCmd.destinations
        .filter((dest) => dest.type === DestinationType.USER)
        .forEach((dest) => );
     */
}

const DestinationType = {
    CHANNEL: 'channel',
    NICKNAME: 'nickname',
    USER: 'user',
    choose: (target) => {
        if (is.channel(target)) {
            return DestinationType.CHANNEL;
        }
        if (is.userAtHost(target) || is.userAtServer(target)) {
            return DestinationType.USER;
        }
        if (is.nicknameAtHost(target) || is.nickname(target)) {
            return DestinationType.NICKNAME;
        }
    }
};

class Destination {
    constructor(props) {
        this.target = props.target;
        this.server = props.server;
        this.type = props.type;
    }
}

function toPrivmsgCmd(command) {
    let commandSplited = command.params.split(' ');
    return {
        id: command.id,
        destinations: toDestinations(Util.splitByCommas(commandSplited[0])),
        message: command.params.split(':')[1]
    }
}

function toDestinations(rawTargets) {
    return rawTargets
        .filter(rawTarget => is.msgTo(rawTarget))
        .map(rawTarget => extractProps(rawTarget))
        .map(props => new Destination(props));
}

function extractProps(target) {
    if (is.channel(target)) {
        return {
            target: target,
            server: null,
            type: DestinationType.CHANNEL
        };
    }
    if (is.nicknameAtHost(target)) {
        return {
            target: target.split('!')[0],
            server: target.split('@')[1],
            type: DestinationType.choose(target)
        };
    }
    if (is.userAtHost(target)) {
        return {
            target: target.split('%')[0],
            server: target.split('%')[1],
            type: DestinationType.choose(target)
        };
    }
    if (is.userAtServer(target)) {
        return {
            target: target.split(/[%]|[@]/)[0],
            server: target.split(/[%]|[@]/)[1],
            type: DestinationType.choose(target)
        };
    }
    if (is.nickname(target)) {
        return {
            target: target,
            server: null,
            type: DestinationType.NICKNAME
        };
    }
}

function preValidate(command) {
    new ValidationError('ERR_NEEDMOREPARAMS', 'PRIVMSG :Algum destino está errado.')
        .throwIf(!is.msgTarget(command.params.split(':')[0].trim()));
}

function validate(privmsgCmd, connection, server) {
    new ValidationError('ERR_NOTREGISTERED', ':Nickname não cadastrado')
        .throwIf(!connection.nickname);

    new ValidationError('ERR_NOTREGISTERED', ':User não cadastrado')
        .throwIf(!connection.user);

    console.log(privmsgCmd.destinations);

    new ValidationError('ERR_NORECIPIENT', ':Não foi informado o destinatario')
        .throwIf(Util.isNullOrEmpty(privmsgCmd.destinations));

    new ValidationError('ERR_NOTEXTTOSEND', ':Não foi informado texto para enviar')
        .throwIf(Util.isNullOrEmpty(privmsgCmd.message));

    new ValidationError('ERR_UNKNOWNCOMMAND', 'PRIVMSG :Algum parametro especficado não pode ser interpretado')
        .throwIf(privmsgCmd.destinations.length > server.info.maxPrivmsgTargets);

    privmsgCmd.destinations.forEach((dest) => validateDestination(dest, connection, server));
}

function validateDestination(destination, connection, server) {
    new ValidationError('ERR_NOSUCHCHANNEL', ':Canal inexistente')
        .throwIf(destination.type === DestinationType.CHANNEL && !server.channels.get(destination.target));

    new ValidationError('ERR_NOTONCHANNEL', destination.target + ' :Você não está no canal')
        .throwIf(destination.type === DestinationType.CHANNEL && !server.channels.belongsTo(connection, destination.target));

    new ValidationError('ERR_NOSUCHNICK', destination.target + ' :Nickname não existe')
        .throwIf(destination.type === DestinationType.NICKNAME && !server.nicknames.exists(destination.target));

    new ValidationError('ERR_NOSUCHNICK', destination.target + ' :User não existe')
        .throwIf(destination.type === DestinationType.USER && !server.connections.get(destination.server) && !server.connections.get(destination.server).existsUser(destination.target));
}

module.exports = privmsg;