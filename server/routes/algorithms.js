// server/routes/algorithms.js
const express = require('express');
const router = express.Router();
const algorithmController = require('../controllers/algorithms');  // Assuming you create a controller

// Route to get all algorithms
router.get('/', algorithmController.getAllAlgorithms);

// Route to get a specific algorithm by ID
router.get('/:id', algorithmController.getAlgorithmById);

module.exports = router;