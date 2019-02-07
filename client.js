var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;

var x = 0
var client = new net.Socket();

client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('5935512043');
});


client.on('data', function(data) { 
let answer=Math.floor(Math.random() * 21);
 console.log('DATA: ' + data);
    if (x == 0 ){
        client.write('25');  
    }
   else{
        client.destroy();  
    }

    x++
});



// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});

