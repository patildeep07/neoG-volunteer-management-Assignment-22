const mongoose = require('mongoose')

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  areasOfInterest: {
    type: [String],
    required: true
  },
  assignedEvent: [
    {
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
      }
    }
  ]
}, {
  timestamps: true
})

const Volunteer = mongoose.model('Volunteer', volunteerSchema)

module.exports = Volunteer