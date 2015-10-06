/**
 * Created with JetBrains PhpStorm.
 * User: hedong
 * Date: 15-10-5
 * Time: 上午11:32
 * To change this template use File | Settings | File Templates.
 */

var io = require('socket.io');
var http = require('http');
var cookieParser = require('cookie-parser');
var connect = require('connect');
var cookie  = require('cookie');
var socketList = [];

module.exports.messageHandler = messageHandler;

function messageHandler(io, sessionSotre) {
    var nowUser = '';

    io.set('authorization', function (handshakeData, callback) {
//        console.log(handshakeData.headers.cookie);
//        console.log(cookie.parse(decodeURIComponent(handshakeData.headers.cookie)).sid);
        if (!handshakeData.headers.cookie)
        {
            return callback('no found cookie', false);
        }
        if(!cookie.parse(decodeURIComponent(handshakeData.headers.cookie)).sid) {
            return callback('no found sid', false);
        }
        var connect_sid = cookie.parse(decodeURIComponent(handshakeData.headers.cookie)).sid.split('.')[0].split(':')[1];
        console.log("connect_sid:" + connect_sid);
        if (connect_sid)
        {
            sessionSotre.get(connect_sid, function (error, session)
            {
                if (error)
                {
                    console.log("session:" + session);
                    callback(error.message, false);
                } else {
//                    console.log(session);
                    handshakeData.session = session;
                    if(!handshakeData.session) {
                        console.log('no session');
                        callback('no session', false);
                    } else if(!handshakeData.session.user) {
                        console.log('not login');
                        callback('not login', false);
                    } else {
                        nowUser = handshakeData.session.user_id;
                        callback(null, true);
                    }
                }
            });
        }
        else
        {
            callback('nosession');
        }
    });

    io.on('connection', function(socket) {
        socketList[nowUser] = socket;
        console.log(socket.id+' connected');
        socket.on('private', function(data) {
            console.log(data);
            if(data.toUser == '0') {
                io.emit('broadcast', data);
            } else if(nowUser == data.toUser) {
                //发送给自己

            }else if(socketList[data.toUser]) {
                socketList[data.toUser].emit('private', data);
            }
        });
    });
}

