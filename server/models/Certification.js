import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  issuer: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String
  },
  credentialUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Certification = mongoose.model('Certification', certificationSchema);

export default Certification;