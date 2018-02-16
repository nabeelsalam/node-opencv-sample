
const cv = require('opencv');

const IMAGE_PATH = './img/nabeel.jpg';
const CLASSIFIER = './data/haarcascade_eye_tree_eyeglasses.xml';
const OUT_PATH = './img/face-detection.jpg';

cv.readImage(IMAGE_PATH, (err, img) => {
  if (err) {
    throw new Error(err);
  }

  img.detectObject(CLASSIFIER, {}, function(err, objects) {
    if (err)
      throw err;

    for (var i = 0; i < objects.length; i++) {
      var object = objects[i];
      img.ellipse(object.x + object.width / 2, object.y + object.height / 2, object.width / 2, object.height / 2, [255, 255, 0], 3);
    }

    img.save(OUT_PATH);
    console.log('Image saved.');
  })

})