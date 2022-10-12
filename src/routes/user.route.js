const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller')
const application = require('../controllers/application.controller')


router.post('/user', user.registerUsers);
router.delete('/user/:id', user.deleteUser);
router.get('/user', user.fetchAllUsers);
router.post('/application', application.addApplication );


module.exports = router;