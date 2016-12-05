var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

router.get('/blog');

module.exports = router;
