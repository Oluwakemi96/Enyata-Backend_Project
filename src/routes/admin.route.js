const express = require('express');
const router = express.Router();
const batch = require('../controllers/batch.controller')
const admin = require('../controllers/admin.controller')


router.get('/batches', batch.fetchAllBatches)
router.post('/batches', batch.createBatch)
router.post('/adminLogin', admin.adminLogin)
router.post('/registerAdmin', admin.registerAdmin)

module.exports = router;