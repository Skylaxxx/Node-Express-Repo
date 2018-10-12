<template>
     <v-container grid-list-md fill-height>
      <v-layout  row wrap align-content-start>
        <v-flex xs12 md12 lg5 offset-lg1>
            <panel title="Song Metadata">
                <v-form>
                    <v-text-field label="Title" v-model="song.title" required :rules="[required]"></v-text-field><br>
                    <v-text-field label="Artist" v-model="song.artist" required :rules="[required]"></v-text-field><br>
                    <v-text-field label="Genre" v-model="song.genre" required :rules="[required]"></v-text-field><br>
                    <v-text-field label="Album" v-model="song.album" required :rules="[required]"></v-text-field><br>
                    <v-text-field label="Album Image Url" v-model="song.albumImageUrl" required :rules="[required]"></v-text-field><br>
                    <v-text-field label="Youtube Id" v-model="song.youtubeId" required :rules="[required]"></v-text-field><br>
                </v-form>
            </panel> 
        </v-flex>

        <v-flex xs12 md12 lg5>
            <panel title="Lyrics & Tabs">
                <v-text-field label="Lyrics" multi-line v-model="song.lyrics" required :rules="[required]"></v-text-field><br>
                <v-text-field label="Tab" multi-line v-model="song.tab" required :rules="[required]"></v-text-field><br>
            </panel>
              <span class="error">{{error}}</span>
              <v-btn class="cyan hasBorder whiteText" dark  @click="create">Create</v-btn> 
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
        song: {
            title: null,
            artist: null,
            genre: null,
            album: null,
            albumImageUrl: null,
            youtubeId: null,
            lyrics: null,
            tab: null
        },
        required: (value) => !!value || 'Required',
        error: null
        

    }
    },
    components: {
        Panel
    },
    methods: {
        async create () {
            this.error = null
            if (this.areAllFieldsFilledIn()){
                try {
                    const response = await SongService.post(this.song)
                    this.$router.push({
                        name: 'songs'
                    })
                } catch (err) {
                    console.log(err)
                }     
            }
            else {
                this.error = "Please fill out all the required fields"
            }
            
        },
        areAllFieldsFilledIn: function() {
            let isValid = true;
            var self = this;
            Object.keys(this.song).every(function(key){
                if (!self.song[key]){
                    isValid = false
                }
            })
            return isValid
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
