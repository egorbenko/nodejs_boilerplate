var express = require('express');
var router = express.Router();

router.use('/api/v1', require('./api'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

module.exports = router;
