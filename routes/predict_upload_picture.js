var express = require('express');
var router = express.Router();
var ml_model = require('../ml/predict_number.js');
var multer_job = require('../util/multer_upload');

router.get('/', function(req, res, next){
  multer_job.upload(req, res, function (fileType_err) {
    if(fileType_err){
      console.log("fileType_err")
    }
    res.render('predict_upload_picture', { title: 'Sign Language Digits In Upload Picture'});
  });
});

router.post('/', function(req, res, next) {
  multer_job.upload(req, res, function (fileType_err) {
    if(fileType_err){
      console.log("fileType_err")
    } else {
      res.redirect('/predict_upload_picture');
    }
  });
});

module.exports = router;
