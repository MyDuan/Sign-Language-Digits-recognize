var express = require('express');
var router = express.Router();
var ml_model = require('../ml/predict_number.js');

/* Sign Language Digits. */
router.get('/', async function(req, res, next) {
  var numlist = JSON.parse("[" + req.query.numlist + "]");
  var result = await ml_model.getResult(numlist);
  console.log("ml_model.results")
  console.log(result)
  if(result){
    res.render('predict_number', { title: 'Sign Language Digits', result:result});
  } else {
    res.render('predict_number', { title: 'Sign Language Digits'});
  }
});

router.post('/', function(req, res, next) {
  var numlist = req.body.numlist;
  res.redirect('/predict_number'+'?numlist='+numlist);
});

module.exports = router;
