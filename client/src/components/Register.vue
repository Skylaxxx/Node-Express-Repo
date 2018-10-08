<template>
  <div >
    <h1>Register</h1>
    <br>
    <input type="email" name="emial" v-model="email" placeholder="email"><br>
    <input type="password" name="password" v-model="password" placeholder="password"><br>
    <div v-text="error"></div>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
        email:this.email,
        password: this.password
      })
      } catch (error) {
         this.error = error.response.data.error
      }
      
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
