const express = require('express');
const router = express.Router();
const batch = require('../controllers/batch.controller')
const admin = require('../controllers/admin.controller')
<<<<<<< HEAD
const applicationEntries = require('../controllers/application.controller')

=======
const assessments = require('../controllers/composed.controller')
>>>>>>> 675b2657a19ee8e166f20a6acac915cf2fc5e905


router.get('/batches', batch.fetchAllBatches)
router.post('/batches', batch.createBatch)
router.post('/adminLogin', admin.adminLogin)
router.post('/registerAdmin', admin.registerAdmin)
<<<<<<< HEAD
router.post('/addStatus', applicationEntries.addStatus)
=======
router.post('/assessments', assessments.composedAssessments)
>>>>>>> 675b2657a19ee8e166f20a6acac915cf2fc5e905

module.exports = router;