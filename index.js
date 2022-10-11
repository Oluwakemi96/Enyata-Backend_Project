const express = require('express')
const router = require('./src/routes/user.route')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(PORT, () => {
  console.log(`Application running on port: ${PORT}`)
})