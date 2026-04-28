const mongoose = require('mongoose');

const contactSchema =new mongoose.Schema({
      Name: {
        type: String,
        required: true,
        trim: true
      },
      email:{
        type: String,
        required: true,
        trim: true
      },
      phoneNumber:{
        type: String,
      },
      companyName:{
        type: String,
        trim: true
      },
      interestedService:{
        type: String,
      },
      projectBrief:{
        type: String,
      },
      fileUpload:{
        fileUrl:{
          type: String
        },
        filePublicId:{
          type: String
        }
      }
  },
  {
    timestamps:true,
  }
);

const contactModel = mongoose.model('contacts', contactSchema);

module.exports = contactModel; 