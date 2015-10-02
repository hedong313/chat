var express = require('express');
var router = express.Router();
var Conn = require('../models/Conn');

/* GET users listing. */
router.get('/login', function(req, res, next) {

    res.render('login', {title: '登录' });

});
router.post('/check', function(req, res, next) {

    var name = req.param('name');
    var password = req.param('password');
    var sql = "select * from user where name='"+name+"' and password = '"+password+"'";
    var C = new Conn();
    var flag = false;

    C.find(sql, function(err, ress){
        console.log(err);
        console.log(ress[0]);
        if(ress[0] && ress[0].name == name) {
            req.session.user = name;
            res.send({code:0, msg:'成功'});
        } else {
            res.send({code:1, msg: '登录失败，用户名或密码不正确'});
        }
    });

});
module.exports = router;
