var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.session.test) {
        res.send(req.session.test);
    }

  req.session.test = 'tttttttt';
  res.render('index', { title: 'Express' });

});

//router.get('/test', function(req, res, next) {
//    res.render('index', { title: 'Express' });
//});

module.exports = router;
