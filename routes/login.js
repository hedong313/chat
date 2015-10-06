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
        if(ress[0] && ress[0].name == name) {
            req.session.user = name;
            req.session.user_id = ress[0].user_id;
            res.send({code:0, msg:'成功'});
        } else {
            res.send({code:1, msg: '登录失败，用户名或密码不正确'});
        }
    });

});

router.get('/reg', function(req, res, next) {

    res.render('reg', {title: '注册' });

});

router.post('/doReg', function(req, res, next){

    var name = req.param('name');
    var password = req.param('password');
    var sql = "select * from user where name='"+name+"'";
    var C = new Conn();
    var flag = false;

    C.find(sql, function(err, ress){
        if(ress[0] && ress[0].name) {
            res.send({code:1, msg:'该用户名已经存在，请更换一个'});
        } else {

            var sql2 = "INSERT INTO `user`" +"(`name`,`password`,`add_time`) VALUES ('"+name+"','"+password+"',now())";

            C.find(sql2, function(err2, ress2){
                if(err2) {
                    console.log(sql2);
                    console.log(err2);
                    res.send({code:0, msg: '注册失败'});
                } else {
                    res.send({code:0, msg: '注册成功,请登录'});
                }
            });
        }
    });
});

module.exports = router;
