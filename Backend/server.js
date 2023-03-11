require('dotenv').config()

const workoutRoutes = require('./routes/wourkouts')
const userRoutes = require('./routes/mearn_auth')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(' connected to dp listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
