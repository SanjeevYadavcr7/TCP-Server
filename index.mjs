import net from 'net';
 
const server = net.createServer(socket =>{
    console.log(`TCP Handshake Successfull => ${socket.remoteAddress} : ${socket.remotePort }`);
    socket.write('Hello Client');
    socket.on('data', data => {
        console.log(`Receiveed Stream => ${data.toString()}`);
    })
});


server.listen(8000, '127.0.0.1'); 