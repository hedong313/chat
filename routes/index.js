var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if(!req.session.user) {
        res.redirect('/login/login');
    }

  res.render('index', { title: '首页' });

});

module.exports = router;
