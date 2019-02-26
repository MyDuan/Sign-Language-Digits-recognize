var crypto = require("crypto");

module.exports = {
  md5hex : function(src){
    var md5hash = crypto.createHash('md5');
    md5hash.update(src, 'binary');
    return md5hash.digest('hex');
  }
}
