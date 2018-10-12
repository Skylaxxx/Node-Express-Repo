<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="cr-4 whiteText">
            <v-btn flat dark @click="navigateTo({name: 'root'})">Circle App</v-btn>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat dark @click="navigateTo({name: 'songs'})">
                Browse      
            </v-btn> 
        </v-toolbar-items>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            
            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'login'})">
                Login      
            </v-btn>   

            <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'register'})">
                Sign Up      
            </v-btn>

            <span v-if="$store.state.isUserLoggedIn" style="margin-top: 20px">{{$store.state.user.email}}</span>

             <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
                Logout      
            </v-btn>
               
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>

export default {
  data () {
    return {
   
    }
  },
  methods: {
    navigateTo (route) {
        this.$router.push(route)
    },
    logout () {
        this.$store.dispatch('setToken',null)
        this.$store.dispatch('setUser',null)
        this.$router.push({
            name: 'root'
        })
    }
  }
}
</script>

<style scoped>

</style>
