const express = require('express');
const router = express.Router();
const user = require('../controllers/signup.controller')
const application = require('../controllers/application.controller')
const userLogin = require('../controllers/login.controller');
const { verifyToken } = require('../middleware/auth.middleware');


router.post('/signup', user.registerUsers);
router.delete('/signup/:id', user.deleteUser);
router.get('/signup', user.fetchAllUsers);
router.get('/oneUser', user.getOneUser);
router.post('/application', verifyToken, application.addApplication );
router.post('/login', userLogin.login)


module.exports = router;