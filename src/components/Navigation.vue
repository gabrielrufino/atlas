<template>
  <v-navigation-drawer
    v-model="$store.state.navOpened"
    absolute
    temporary
  >
    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
