const { User } = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/models')
const jwt = require('jsonwebtoken')
const config = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/conifg/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      // console.log('test1')
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      res.status(400).send({
        error: 'Email already in use'
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

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        res.status(403).send({ error: 'The login information was incorrect' })
      }

      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON())
      })
    } catch (error) {
      res.status(500).send({
        error: 'Invalid login information'
      })
    }
  }
}
