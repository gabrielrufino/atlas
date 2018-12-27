<template>
    <v-navigation-drawer
      v-model="opened"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
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
          { title: 'Início', icon: 'dashboard', route: '/' },
          { title: 'Reconhecer Imagem', icon: 'dashboard', route: '/reconhecer-imagem' },
          { title: 'Sobre', icon: 'question_answer', route: '/sobre' }
        ],
        right: null
      }
    }
  }
</script>
