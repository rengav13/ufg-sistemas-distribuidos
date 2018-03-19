import net from 'net';
import Processor from './comandos/processor';
import IRCServer from './modelo/servidor_irc';

const tcpServer = net.createServer();
const IRC_PORT = 65000;
let ircServer = {};

tcpServer.on('listening', () => ircServer = new IRCServer(tcpServer.address()));
tcpServer.on('error', (err) => console.log(err));

tcpServer.on('connection', (socket) => {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    socket.endByCommand = false;

    ircServer.subscribe(socket);

    socket.on('data', (data) => Processor.analyse(data, socket, ircServer));

    socket.on('end', () => {
        if (!socket.endByCommand) {
            ircServer.unsubscribe(socket)
        }
    });
});

tcpServer.listen(IRC_PORT);
