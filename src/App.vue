<template>
  <v-app>
    <v-toolbar app dark color="primary">
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
      <RecognizePicture/>
      <Nav :opened="true"/>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav'
import RecognizePicture from './views/RecognizePicture'

export default {
  name: 'App',
  components: {
    Nav,
    RecognizePicture
  },
  data () {
    return {
      //
    }
  }
  }
</script>
