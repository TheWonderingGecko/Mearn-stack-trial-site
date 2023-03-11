const mongoose = require('mongoose')
const User = require('../models/userModel')

const userLogin = async (req, res) => {
  res.json('You have reached the login request')
}

const userSignUP = async (req, res) => {
  res.json('You have reached the sign up request')
}

module.exports = { userLogin, userSignUP }
