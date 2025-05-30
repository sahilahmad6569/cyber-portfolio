import express from 'express';
import Certification from '../models/Certification.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all certifications
router.get('/', async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ date: -1 });
    res.json(certifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single certification
router.get('/:id', async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    res.json(certification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new certification (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const { name, issuer, date, imageUrl, credentialUrl } = req.body;
    
    const newCertification = new Certification({
      name,
      issuer,
      date,
      imageUrl,
      credentialUrl
    });
    
    const savedCertification = await newCertification.save();
    res.status(201).json(savedCertification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a certification (protected route)
router.put('/:id', auth, async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    
    const updatedCertification = await Certification.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    
    res.json(updatedCertification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a certification (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const certification = await Certification.findById(req.params.id);
    
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found' });
    }
    
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ message: 'Certification removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;