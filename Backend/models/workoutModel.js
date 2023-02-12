// in this file we are set up the schema which adds structure to the data we will be collecting

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    reps: {
      type: Number,
      required: true,
    },

    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Workout', workoutSchema)
