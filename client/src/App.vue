<template>
  <div id="app">
    <v-app>
      <page-header/>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>
    </v-app>
   
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
 .whiteText {
  color: white
 }
</style>
