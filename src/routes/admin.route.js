const express = require('express');
const router = express.Router();
const batch = require('../controllers/batch.controller')


router.get('/batches', batch.fetchAllBatches)
router.post('/batches', batch.createBatch)

module.exports = router;