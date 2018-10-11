const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/conifg/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/routes')(app)

sequelize.sync({ force: true })
  .then(() => {
    app.listen(config.port)
    console.log('server started')
  })
