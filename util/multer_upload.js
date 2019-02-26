var multer = require('multer');
var mime = require('mime');
var util = require("./util");
var path = require('path');

var maxSize = 100 * 1024 * 1000;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/static')
  },
  filename: function (req, file, cb) {
    cb(null, util.md5hex(file.originalname + new Date()) +"." + mime.getExtension(file.mimetype))
  }
})

module.exports = {
  upload : multer(
  { storage: storage,
    limits: {
      fileSize: maxSize,
    },
    fileFilter: function (req, file, cb) {
      var filetypes = /jpeg|jpg|gif|png/;
      var mimetype = mime.getExtension(file.mimetype);
      var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      if (mimetype && extname) {
        return cb(null, true);
      }
      return cb(new Error('Invalid data type'), false);
    }
  }).single('background')
}
