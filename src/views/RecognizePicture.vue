<template>
  <v-container>
    <v-tabs
      centered
      light
      color=""
      icons-and-text
    >
      <v-tabs-slider color="primary"></v-tabs-slider>

      <!-- Tabs -->
      <v-tab>
        Web
        <v-icon>language</v-icon>
      </v-tab>

      <v-tab>
        Upload
        <v-icon>computer</v-icon>
      </v-tab>

      <!-- Tabs content -->
      <v-tab-item>
        <v-text-field v-model="urlImage">
          <template slot="label">
            Qual é o <strong>link</strong> da sua imagem? <v-icon style="vertical-align: middle">find_in_page</v-icon>
          </template>
        </v-text-field>
        <v-img :src="urlImage"></v-img>
        <v-button>
          Descrever imagem
        </v-button>
      </v-tab-item>

      <v-tab-item>
        Upload
      </v-tab-item>

    </v-tabs>
  </v-container>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'RecognizePicture',
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      urlImage: ''
    }
  }
}
</script>

