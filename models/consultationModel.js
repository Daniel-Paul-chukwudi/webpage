const mongoose = require('mongoose');

const consultationSchema =new mongoose.Schema({
      fullName: {
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
      company:{
        type: String,
        trim: true
      },
      tier:{
        type: String,
      },
      
  },
  {
    timestamps:true,
  }
);

const consultationModel = mongoose.model('consultations', consultationSchema);

module.exports = consultationModel; 