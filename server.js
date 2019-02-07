var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var cel ={
    name : '',
    y : 0,
    aws: 0
}
var x=0
net.createServer(function(sock) {
   console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
   sock.on('data', function(data) {
       console.log('DATA ' + sock.remoteAddress + ': ' + data);
     

   if (x == 0 ){
    cel.name = data
    sock.write('OK ');  
}

else{
    cel.y =data
    cel.aws = (cel.y-32)/1.8;
    sock.write('Degree Celsius = ' + cel.aws);
      sock.destroy();
}x++
});

   sock.on('close', function(data) {
       console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
   });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);