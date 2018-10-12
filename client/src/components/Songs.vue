<template>
  <v-container grid-list-md fill-height>
      <v-layout  row wrap align-content-start>
        <v-flex xs12 md10 lg6 offset-md1 offset-lg3>
          <panel title="Songs">
              <router-link slot="action" :to="{name: 'create-song'}" v-if="$store.state.isUserLoggedIn">
                <v-btn fab class="cyan accent-2 moveTop20" light small absolute right middle>
                    <v-icon>add</v-icon>
                </v-btn>
              </router-link>
              
              <div v-for="song in songs" v-bind:key="song.id" class="song">
                        
                <v-layout  row wrap align-content-start>
                    <v-flex xs12 md10 lg5 offset-md1 offset-lg1>
                        <div class="song-title">{{song.title}}</div>
                        <div class="song-artist">{{song.artist}}</div>
                        <div class="song-album">{{song.album}}</div>
                        <v-btn class="cyan hasBorder whiteText" dark  @click="navigateTo ({name: 'song', params: {songId: song.id}})">View</v-btn> 
                    </v-flex>

                     <v-flex xs12 md10 lg5 offset-md1 offset-lg1>
                         <img class="album-image" v-bind:src="song.albumImageUrl">
                    </v-flex>
                </v-layout>
              </div>
          </panel> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsService'

export default {
  data () {
    return {
     songs : null
    }
  },
  components: {
    Panel
  },
  async mounted () {
      this.songs = (await SongService.index()).data

  },
  methods: {
    navigateTo (route) {
        this.$router.push(route)
    },
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moveTop20 {
    margin-top: -20px
 }

 .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
 }
  .song-title {
   font-size: 30px
 }

  .song-artist {
   font-size: 20px
   
 }

   .song-album {
    width: 50%;
    margin: auto
 }

 .album-image {
    width: 50%;
    margin: auto
 }

</style>
