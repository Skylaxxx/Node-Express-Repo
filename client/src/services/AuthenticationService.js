
import Api from '@/services/Api'

export default {
  register (credentials) {
    console.log('attempting to regiser')
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}
