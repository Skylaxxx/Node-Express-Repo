const { Song } = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/models')

module.exports = {
  async index (req, res) {
    try {
      const song = await Song.findAll({
        limit: 10
      })
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'Error trying to get songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        error: 'Error trying to create a song'
      })
    }
  }
}
