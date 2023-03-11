const express = require('express')
const { userLogin, userSignUP } = require('../controllers/workout_auth')

const router = express.Router()

router.post('/login', userLogin)

router.post('/sign_up', userSignUP)

module.exports = router
