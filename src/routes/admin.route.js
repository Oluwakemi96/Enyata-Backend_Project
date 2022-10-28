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
router.get('/questions/:id', assessments.getQuestions)
router.get('/oneApplicant/:email_address', applicationEntries.getOneApplicant)
router.get('/allApplicant', applicationEntries.fetchAllApplicant)
router.get('/batch_applicant', applicationEntries.getApplicantByBatch)
router.get('/total_applications', applicationEntries.countAllApplications)
router.get('/current_applications', applicationEntries.countCurrentApplications)
router.get('/current_batch', applicationEntries.getActiveBatch)
router.get('/batch_by_id', batch.batchByBatchId)
router.get('/oneAdmin/:email_address', admin.getOneAdmin)
router.get('/all_batches', applicationEntries.getAllBatches)
router.post('/assessments_results', applicationEntries.addResult)



router.patch('/updateAdmin/:id', admin.updateAdmin)

module.exports = router;