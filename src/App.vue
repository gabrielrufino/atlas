<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="navOpened = !navOpened"></v-toolbar-side-icon>
      <v-toolbar-title class="headline">
        <span><v-icon>memory</v-icon> Atlas</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
      <Nav :opened="navOpened"/>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      navOpened: true
    }
  }
}
</script>
