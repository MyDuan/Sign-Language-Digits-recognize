var express = require('express');
var router = express.Router();
var ml_model = require('../ml/predict_number.js');

router.get('/', function(req, res, next){
  res.render('predict_number_video', { title: 'Sign Language Digits In Video'});
});

module.exports = router;
