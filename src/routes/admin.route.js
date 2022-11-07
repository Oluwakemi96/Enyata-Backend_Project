const express = require('express');
const router = express.Router();
const batch = require('../controllers/batch.controller')
const admin = require('../controllers/admin.controller')
const applicationEntries = require('../controllers/application.controller')
const assessments = require('../controllers/composed.controller')
const { verifyToken } = require('../middleware/auth.middleware');


router.get('/batches', verifyToken, batch.fetchAllBatches)
router.post('/create_batches', verifyToken, batch.createBatch)
router.post('/adminLogin',  admin.adminLogin)
router.post('/registerAdmin', verifyToken, admin.registerAdmin)
router.post('/addStatus', verifyToken, applicationEntries.addStatus)
router.post('/assessments', verifyToken, assessments.composedAssessments)
router.get('/questions', assessments.getQuestions)
router.get('/oneApplicant/:email_address', verifyToken, applicationEntries.getOneApplicant)
router.get('/allApplicant', verifyToken, applicationEntries.fetchAllApplicant)
router.get('/batch_applicant/:batch_id', verifyToken, applicationEntries.getApplicantByBatch)
router.get('/total_applications', verifyToken, applicationEntries.countAllApplications)
router.get('/current_applications', verifyToken, applicationEntries.countCurrentApplications)
router.get('/current_batch', verifyToken, applicationEntries.getActiveBatch)
router.get('/batch_by_id', verifyToken, batch.batchByBatchId)
router.get('/oneAdmin/:email_address', verifyToken, admin.getOneAdmin)
router.get('/all_batches', verifyToken, applicationEntries.getAllBatches)
router.post('/assessments_results', verifyToken, applicationEntries.addResult)
router.patch('/updateAdmin/:id', verifyToken, admin.updateAdmin)

module.exports = router;