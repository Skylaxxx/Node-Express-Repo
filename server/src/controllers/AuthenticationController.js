const { User } = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/models')
const jwt = require('jsonwebtoken')
const config = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecre, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(400).send({
        error: 'Could not register'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({ error: 'The login information was incorrect' })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        res.status(403).send({ error: 'The login information was incorrect' })
      }

      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(403).send({
        error: 'Invalid login information'
      })
    }
  }
}
