
const cv = require('opencv');

const IMAGE_PATH = './img/nabeel.jpg';
const CLASSIFIER = './data/haarcascade_eye_tree_eyeglasses.xml';
const OUT_PATH = './img/face-detection.jpg';

cv.readImage(IMAGE_PATH, (err, img) => {
  if (err) {
    throw new Error(err);
  }

  img.detectObject(CLASSIFIER, {}, function(err, faces) {
    if (err)
      throw err;

    for (var i = 0; i < faces.length; i++) {
      var face = faces[i];
      img.ellipse(face.x + face.width / 2, face.y + face.height / 2, face.width / 2, face.height / 2, [255, 255, 0], 3);
    }

    img.save(OUT_PATH);
    console.log('Image saved.');
  })

})