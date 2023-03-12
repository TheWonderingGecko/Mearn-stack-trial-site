const mongoose = require('mongoose')

//npm install validator
const validator = require('validator')

//npm inslall bcrypt
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
})

userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email })
  if (!email || !password) {
    throw Error('Please fill out all fields')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough')
  }

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const user = await this.create({ email, password: hash })
  return user
}

module.exports = mongoose.model('User', userSchema)