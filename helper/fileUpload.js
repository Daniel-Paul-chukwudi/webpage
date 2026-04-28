const cloudinary = require('../config/cloudinary')
const fs = require('fs')

exports.uploadImageToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath,{resource_type: "auto"});
    
    fs.unlinkSync(filePath);

    const response = {
      SecureUrl: result.secure_url,
      PublicId: result.public_id
    }

    return response;

  } catch (error) {
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.status(500).json({
        message: "File Upload Failed",
        error:error.message
    })
  }
};

exports.deleteImageFromCloudinary = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);

    // future info for deleting multiple
    // await cloudinary.api.delete_resources(["img1", "img2"]);

    return "Ok";

  } catch (error) {
    res.status(500).json({
        message: "Image removal Failed",
        error:error.message
    })
  }
};