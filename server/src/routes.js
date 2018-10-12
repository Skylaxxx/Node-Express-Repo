const AuthenticataionController = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/controllers/AuthenticationController')

const AuthenticataionControllerPolicy = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/policies/AuthenticationControllerPolicy')
const SongsController = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticataionControllerPolicy.register,
    AuthenticataionController.register
  )
  app.post('/login',
    AuthenticataionController.login
  )
  app.get('/songs',
    SongsController.index
  )
  app.post('/songs',
    SongsController.post
  )
}
