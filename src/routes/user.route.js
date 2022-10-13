const express = require('express');
const router = express.Router();
const user = require('../controllers/signup.controller')
const application = require('../controllers/application.controller')
const userLogin = require('../controllers/login.controller')


router.post('/signup', user.registerUsers);
router.delete('/signup/:id', user.deleteUser);
router.get('/signup', user.fetchAllUsers);
router.post('/application', application.addApplication );
router.post('/login', userLogin.login)


module.exports = router;