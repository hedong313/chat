/**
 * Created by xmc7276 on 2015/9/24.
 */

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

app.use(cookieParser());
app.use(session({secret: '1234567890QWERTY'}));

app.get('/awesome', function(req, res) {
    if(req.session.lastPage) {
        res.send('Your Awesome.'+req.session.lastPage);
        //res.write('Last page was: ' + req.session.lastPage + '. ');
    }

    req.session.lastPage = '/awesome';
    res.send('Your Awesome.');
});
//
//app.get('/radical', function(req, res) {
//    if(req.session.lastPage) {
//        res.write('Last page was: ' + req.session.lastPage + '. ');
//    }
//
//    req.session.lastPage = '/radical';
//    res.send('What a radical visit!');
//});
//
//app.get('/tubular', function(req, res) {
//    if(req.session.lastPage) {
//        res.write('Last page was: ' + req.session.lastPage + '. ');
//    }
//
//    req.session.lastPage = '/tubular';
//    res.send('Are you a surfer?');
//});

app.listen(process.env.PORT || 8080);
