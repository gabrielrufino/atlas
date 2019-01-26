<template>
  <v-navigation-drawer
    v-model="$store.state.navOpened"
    absolute
    temporary
  >
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="https://cdn.pixabay.com/photo/2018/07/23/22/11/arnold-3557975_960_720.png">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Arnold Schwarzenegger</v-list-tile-title>
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
          { title: 'Início', icon: 'memory', route: '/' },
          { title: 'Reconhecer Imagem', icon: 'photo', route: '/reconhecer-imagem' },
          { title: 'Sobre', icon: 'info ', route: '/sobre' }
        ],
        right: null
      }
    }
  }
</script>
