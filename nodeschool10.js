"use strict"

var net = require('net');

var date = new Date();

function addZero (num) {
    if (num < 10){
        return "0" + num;
    }
    return num;
}

function getDate () {
     return date.getFullYear() + '-' +
            addZero(date.getMonth() + 1) + '-' +
            addZero(date.getDate()) + ' ' +
            addZero(date.getHours()) + ':' +
            addZero(date.getMinutes());    
}

var server = net.createServer(function (socket) {
    socket.end(getDate() + '\n');
})

server.listen(process.argv[2]);
