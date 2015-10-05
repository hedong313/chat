/**
 * Created with JetBrains PhpStorm.
 * User: hedong
 * Date: 15-10-5
 * Time: 上午11:32
 * To change this template use File | Settings | File Templates.
 */

var io = require('socket.io');
var http = require('http');
module.exports.messageHandler = messageHandler;

function messageHandler(io) {
    io.on('connection', function(socket) {
        console.log(socket.id+' connected');
        socket.on('private', function(data) {
            console.log(data);
            io.emit('private', data);
        });


    });
}

