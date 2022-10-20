const express = require('express');
const router = express.Router();
const batch = require('../controllers/batch.controller')
const admin = require('../controllers/admin.controller')
const assessments = require('../controllers/composed.controller')


router.get('/batches', batch.fetchAllBatches)
router.post('/batches', batch.createBatch)
router.post('/adminLogin', admin.adminLogin)
router.post('/registerAdmin', admin.registerAdmin)
router.post('/assessments', assessments.composedAssessments)

module.exports = router;