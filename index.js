require('./db/db.connect')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const volunteerRouter = require('./routes/volunteer.route')
const eventRouter = require('./routes/event.route')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/volunteers', volunteerRouter)
app.use('/events', eventRouter)

app.get('/', (req,res) => {
  res.send('Volunteer management app')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/', (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})


app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

