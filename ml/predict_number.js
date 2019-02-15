// Load the package:
// Use TensorFlow.js with native C++ bindings.
const tf = require('@tensorflow/tfjs-node');
const CLASSES = {0:'zero', 1:'one', 2:'two', 3:'three', 4:'four',5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'};
const IMAGES_PATH = __dirname + '/../public/static/Example/';
var fs = require('fs');
var Canvas = require('canvas'),
    Image = Canvas.Image;
var results = []
var copiedresults = JSON.parse(JSON.stringify(results));
module.exports = {
  getResult: async (numlist) => {
    results = [];
    var count = 0;
    for(let num of numlist){
      let data_
      fs.readFile(IMAGES_PATH+'example_'+num+'.JPG', function(err, data) {
         data_ = data
      });
      let model = await loadModel();
      var img = new Image;
      img.src = await data_;
      var canvas = Canvas.createCanvas(img.width, img.height);
      var context = canvas.getContext('2d');
      context.drawImage(img, 0, 0, img.width, img.height);
      let result = await predict(canvas, IMAGES_PATH+'example_'+num+'.JPG');
      results[count] =  await result;
      count += 1;
    };
  },
  returnResult: function(){
    return results;
  }
}

// load the trained model:
let model;
async function loadModel() {
	console.log("model loading..");
	model=await tf.loadModel('file://'+__dirname + '/../public/static/model.json');
	console.log("model loaded.");
};

async function predict(image, filename){
	let tensor = preprocessImage(image);

	let prediction = await model.predict(tensor).data();
	let results = Array.from(prediction)
				.map(function(p,i){
	return {
		probability: p,
		className: CLASSES[i]
	};
	}).sort(function(a,b){
		return b.probability-a.probability;
	}).slice(0,1);

	results.forEach(function(p){
		console.log('The number in' + filename + 'is: ' + p.className)
	});
  return results[0].className;
};

// image to tensor
function preprocessImage(image){
	let tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([100,100]).toFloat();
	let offset = tf.scalar(255);
    return tensor.div(offset).expandDims();
}
