<template>
  <v-navigation-drawer
    v-model="$store.state.navOpened"
    absolute
    temporary
  >
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Guest</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.route"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {
        items: [
          { title: 'Home', icon: 'memory', route: { name: 'home' } },
          { title: 'About', icon: 'info ', route: { name: 'about' } },
          { title: 'Linear Regression', icon: 'trending_up', route: { name: 'linear-regression' } },
          { title: 'Image Classifier', icon: 'photo', route: { name: 'image-classifier' } },
          { title: 'Text Summarizer', icon: 'textsms', route: { name: 'text-summarizer' } }
        ],
        right: null
      }
    }
  }
</script>
