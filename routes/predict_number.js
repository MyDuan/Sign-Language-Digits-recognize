var express = require('express');
var router = express.Router();
var ml_model = require('../ml/predict_number.js');

/* Sign Language Digits. */
router.get('/', async (req, res, next) =>{
  var result = [];
  var numlist = [];
  if(req.query.numlist){
    numlist = JSON.parse("[" + req.query.numlist + "]");
    await ml_model.getResult(numlist);
    result = ml_model.returnResult();
  }
  if(result){
    res.render('predict_number', { title: 'Sign Language Digits', result:result, numlist:numlist});
  }
  else {
    res.render('predict_number', { title: 'Sign Language Digits'});
  }
});

router.post('/', function(req, res, next) {
  var numlist = req.body.numlist;
  if(numlist){
    res.redirect('/predict_number'+'?numlist='+numlist);
  } else {
    res.redirect('/predict_number');
  }
});

module.exports = router;
