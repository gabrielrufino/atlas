<template>
  <v-app>
    <div>
      <v-toolbar dark color="primary" tile>
        <v-app-bar-nav-icon @click="moveNav"></v-app-bar-nav-icon>
        <v-toolbar-title class="headline">
          <span><v-icon>memory</v-icon> Atlas</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          color="secondary"
          outlined
          href="https://github.com/gabrielrufino/atlas"
          target="_blank"
        >
          <span>GITHUB</span>
        </v-btn>
      </v-toolbar>
    </div>

    <Navigation/>
    <router-view></router-view>
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
