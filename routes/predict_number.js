var express = require('express');
var router = express.Router();

/* Sign Language Digits. */
router.get('/', function(req, res, next) {
  res.render('predict_number', { title: 'Sign Language Digits' });
});

module.exports = router;
