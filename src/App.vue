<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="moveNav"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span><v-icon>memory</v-icon> Atlas</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/gabrielrufino/atlas"
        target="_blank"
      >
        <span class="mr-2">GITHUB</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
      <Navigation/>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  methods: {
    moveNav() {
      this.$store.commit('moveNav')
    }
  }
}
</script>
