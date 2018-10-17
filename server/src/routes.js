const AuthenticataionController = require('../src/controllers/AuthenticationController')

const AuthenticataionControllerPolicy = require('../src/policies/AuthenticationControllerPolicy')
const SongsController = require('../src/controllers/SongsController')

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
