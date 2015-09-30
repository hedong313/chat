var express = require('express');
var router = express.Router();
var Conn = require('../models/Conn');

/* GET home page. */
router.get('/', function(req, res, next) {
    var C = new Conn();

    C.find('select * from user', function(err, ress){
        console.log(err);
        console.log(ress);
    });

    if(!req.session.user) {
        res.redirect('/login/login');
    }

  res.render('index', { title: '首页' });

});

module.exports = router;
