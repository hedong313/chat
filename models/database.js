/**
 * Created by xmc7276 on 2015/9/23.
 */

var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'webchat',
    connectionLimit: 10,
    supportBigNumbers: true,
    charset: 'utf8'
});

exports.pool = pool;