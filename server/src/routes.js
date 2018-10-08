const AuthenticataionController = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/controllers/AuthenticationController')

const AuthenticataionControllerPolicy = require('/home/cmg/Desktop/pupil-labs/Node-Express-Repo/server/src/policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticataionControllerPolicy.register,
    AuthenticataionController.register
  )
}
