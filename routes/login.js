var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {

    res.render('login', {title: '登录' });

});
router.post('/check', function(req, res, next) {

    req.session.user = 'test';
    res.send({code:0,msg:'成功'});

});
module.exports = router;
