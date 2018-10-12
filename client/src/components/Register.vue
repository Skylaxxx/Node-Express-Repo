<template>
  <v-container grid-list-md fill-height>
      <v-layout  row wrap align-content-start>
        <v-flex xs12 md10 lg6 offset-md1 offset-lg3>
          <div class="white elevation-2">
            <v-toolbar flat dense class="cyan" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            
            <div class="pl-4 pr-4 pb-2 pt-2">
              <form autocomplete="off">
                <v-text-field v-model="email" label="email"></v-text-field><br>
                <v-text-field type="password" autocomplete="new-password" v-model="password" label="password"></v-text-field>
                <div class="error" v-html="error"></div>
                <v-btn class="cyan hasBorder whiteText" @click="register">Register</v-btn>
              </form>
            </div>
          </div>
      </v-flex>
    </v-layout>
  </v-container>
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
        const response = await AuthenticationService.register({
          email:this.email,
          password: this.password
        })
        this.$store.dispatch('setToken',response.data.token)
        this.$store.dispatch('setUser',response.data.user)

      } catch (resp) {
         this.error = resp.message // _context.t0.response.data.error;
      }

      
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
 color: red
}
.hasBorder {
 border-style: inset
 }

</style>
