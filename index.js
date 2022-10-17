const express = require('express')
const router = require('./src/routes/user.route')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, Origin, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true)
  next();
})

app.use(router)

app.listen(PORT, () => {
  console.log(`Application running on port: ${PORT}`)
})