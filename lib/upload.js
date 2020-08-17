const multer = require('multer');
const path = require('path');
console.log("XXXXX", path.join(__dirname, '..', 'lib/images'));

function Upload() {

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  // type of images
  const mimeType = ['image/jpeg', 'image/png', 'image/svg+xml'];

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (mimeType.includes(file.mimeType)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const uploadImagesConfig = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

  this.uploadImages = function () {
    return uploadImagesConfig;
  }
};


module.exports = new Upload();







