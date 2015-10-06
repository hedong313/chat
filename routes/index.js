var express = require('express');
var router = express.Router();
var Conn = require('../models/Conn');

/* GET home page. */
router.get('/', function(req, res, next) {

    if(!req.session.user) {
        res.redirect('/login/login');
    } else {
        var sql = "select * from user ";
        var C = new Conn();
        var flag = false;

       C.find(sql, function(err, ress){
           res.render('index.html', { title: '首页', fromUser: req.session.user, userList:ress});
        });

    }
});



module.exports = router;
