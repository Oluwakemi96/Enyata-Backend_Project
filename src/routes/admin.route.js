const express = require('express');
const router = express.Router();
const batch = require('../controllers/batch.controller')
const admin = require('../controllers/admin.controller')
const applicationEntries = require('../controllers/application.controller')
const assessments = require('../controllers/composed.controller')



router.get('/batches', batch.fetchAllBatches)
router.post('/create_batches', batch.createBatch)
router.post('/adminLogin', admin.adminLogin)
router.post('/registerAdmin', admin.registerAdmin)
router.post('/addStatus', applicationEntries.addStatus)
router.post('/assessments', assessments.composedAssessments)
router.get('/oneApplicant', applicationEntries.getOneUser)
router.patch('/updateAdmin/:id', admin.updateAdmin)

module.exports = router;