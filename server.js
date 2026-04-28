require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT 
const DB = process.env.DB
const cors = require('cors')
// const swaggerJSDoc = require('swagger-jsdoc')
// const swaggerUi  = require('swagger-ui-express')
const mongoose = require("mongoose")
const contactRouter = require('./route/contactRoutes')
const consultationRouter = require('./route/consultationRoutes')


const app = express()
app.use(express.json())
app.use(cors())

app.use(contactRouter)
app.use(consultationRouter)


const Startserver = async ()=>{ 
  mongoose.connect(DB).then(() => {
    console.log('Connected to Database')
    app.listen(PORT, () => {
      console.log('Server is running on Port:', PORT)
    })
  }).catch((error) => {
    console.log('Error connecting to Database', error.message)
  });
};

Startserver();