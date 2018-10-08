const { User } = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/models')

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
  }
}
