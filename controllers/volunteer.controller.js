const mongoose = require('mongoose')
const fs = require('fs')


const Volunteer = require('../models/volunteer.model')



const getAllVolunteers = async () => {
  try {
    const allVolunteers = await Volunteer.find().populate('assignedEvent.event', 'name')
    console.log('All volunteers:', allVolunteers)
    return allVolunteers
  } catch (error) {
    console.log('Error fetching all volunteers')
  }
}

const addVolunteer = async (volunteer) => {
  try {
    const newVolunteer = new Volunteer(volunteer);
    const savedVolunteer = await newVolunteer.save().populate('assignedEvent.event', 'name')
    if (savedVolunteer) {
      console.log('Added new volunteer:', savedVolunteer)
      return savedVolunteer
    } else {
      console.log('Unable to add volunteer')
    }
  } catch (error) {
    console.log('Error adding volunteer:', error)
  }
}

const editVolunteer = async (volunteerId, editedVolunteer) => {
  try {
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(volunteerId, editedVolunteer, { new: true }).populate('assignedEvent.event', 'name')
    if (updatedVolunteer) {
      console.log('Updated volunteer:', updatedVolunteer)
      return updatedVolunteer
    } else {
      console.log('Unable to update volunteer')
    }
  } catch (error) {
    console.log('Error editing volunteer:', error)
  }
}

const deleteVolunteer = async (volunteerId) => {
  try {
    const deletedVolunteer = await Volunteer.findByIdAndDelete(volunteerId)
    if (deletedVolunteer) {
      console.log('Deleted volunteer:', deletedVolunteer)
      return deletedVolunteer
    } else {
      console.log('Unable to delete volunteer')
    }
  } catch (error) {
    console.log('Error deleting volunteer:', error)
  }
}

module.exports = {
  getAllVolunteers,
  addVolunteer,
  editVolunteer,
  deleteVolunteer
}