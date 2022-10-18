const express = require('express');
const router = express.Router();
// const cors = require('cors');
const user = require('../controllers/signup.controller')
const application = require('../controllers/application.controller')
const userLogin = require('../controllers/login.controller');
const { verifyToken } = require('../middleware/auth.middleware');
// const batch = require('../controllers/batch.controller')


// const app = express()
// app.use(cors({
//   origin: "http://localhost:8080",
//   methods: ["GET", "POST"]
// }))

router.post('/signup', user.registerUsers);
router.delete('/signup/:id', user.deleteUser);
router.get('/signup', user.fetchAllUsers);
router.post('/application', verifyToken, application.addApplication );
router.post('/login', userLogin.login)


module.exports = router;