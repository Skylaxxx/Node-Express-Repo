<template>
    <div class="white elevation-2">
    <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action"/>
    </v-toolbar>
    

    
    <div class="pl-4 pr-4 pb-2 pt-2">
        <slot>
                no content defined
        </slot>
    </div>
    </div>
</template>

<script>

export default {
  props: [
    'title'
  ],
  methods: {
  }
}
</script>

<style scoped>

</style>