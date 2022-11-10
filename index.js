const express = require('express')
const router = require('./src/routes/user.route')
const adminRouter = require('./src/routes/admin.route')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
//   res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, Origin, Accept');
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   next();
// })

app.use(cors({
  origin: "*" ,
  methods: ["GET", "POST", "DELETE", "PATCH", "UPDATE", "OPTIONS", "PUT"]
}))

// app.use(cors())

app.use(router)
app.use(adminRouter)

app.listen(PORT, () => {
  console.log(`Application running on port: ${PORT}`)
})