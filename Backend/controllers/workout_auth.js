const { json } = require('express')
const mongoose = require('mongoose')

const User = require('../models/userModel')

const userLogin = async (req, res) => {
  res.json('You have reached the login request')
}

const userSignUP = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)
    res.status(200).json({ email, user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { userLogin, userSignUP }
