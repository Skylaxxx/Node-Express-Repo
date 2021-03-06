const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./conifg/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('../src/routes')(app)

sequelize.sync({ force: true }) // { force: true } this clears the data base, remove later
  .then(() => {
    app.listen(config.port)
    console.log('server started')
  })
