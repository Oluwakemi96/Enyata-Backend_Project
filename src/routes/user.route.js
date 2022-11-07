const express = require('express');
const router = express.Router();
const user = require('../controllers/signup.controller')
const application = require('../controllers/application.controller')
const userLogin = require('../controllers/login.controller');
const results = require('../controllers/results.controller');
const { verifyToken } = require('../middleware/auth.middleware');



router.post('/signup', user.registerUsers);
// router.delete('/signup/:id', user.deleteUser);
router.get('/signup', user.fetchAllUsers);
router.get('/oneUser', user.getOneUser);
router.get('/users_email', user.fetchAllEmails);
router.post('/application', verifyToken, application.addApplication );
router.post('/login', userLogin.login)
// router.post('/assessments_results', results.sendResults)
router.get('/all_assessments_results', results.fetchAllResults)
router.get('/single_assessment_result/:applicant_id', results.fetchSingleResults)



module.exports = router;