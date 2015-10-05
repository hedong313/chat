var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if(!req.session.user) {
        res.redirect('/login/login');
    } else {

        res.render('index.html', { title: '首页', fromUser: req.session.user});
    }
});



module.exports = router;
