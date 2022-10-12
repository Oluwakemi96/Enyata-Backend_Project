const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller')


router.post('/user', user.registerUsers);
router.delete('/user/:id', user.deleteUser);
router.get('/user', user.fetchAllUsers);


module.exports = router;