<template>
  <v-navigation-drawer permanent>
    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        to="/"
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
    props: {
      opened: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        items: [
          { title: 'Início', icon: 'dashboard' },
          { title: 'Sobre', icon: 'question_answer' }
        ],
        right: null
      }
    }
  }
</script>
