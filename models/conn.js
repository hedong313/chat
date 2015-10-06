/**
 * Created by xmc7276 on 2015/9/23.
 */

var db = require('./database');
var Conn = function() {};

Conn.prototype.find = function(sql, callback) {
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            console.log('fatal error:'+err);
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};



module.exports = Conn;