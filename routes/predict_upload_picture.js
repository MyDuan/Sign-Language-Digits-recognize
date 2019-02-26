var express = require('express');
var router = express.Router();
var ml_model = require('../ml/predict_number.js');
var multer_job = require('../util/multer_upload');
var image_url;

router.get('/', async (req, res, next) => {
  if(image_url) {
    result = await ml_model.getOneResult(image_url);
    res.render('predict_upload_picture', { title: 'Sign Language Digits In Upload Picture', image_url: image_url, result:result});
  } else {
    res.render('predict_upload_picture', { title: 'Sign Language Digits In Upload Picture'});
  }
});

router.post('/', function(req, res, next) {
  multer_job.upload(req, res, function (fileType_err) {
    if(fileType_err){
      console.log("fileType_err")
    } else {
      if(req.file) {
        multer_job.Jimp(req.file.path, {'w': 100, 'h':100});
        image_url = "static/"+req.file.filename;
        console.log(image_url);
      }
      res.redirect('/predict_upload_picture');
    }
  });
});

module.exports = router;
