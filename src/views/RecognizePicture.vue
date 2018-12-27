<template>
  <v-container>
    <v-tabs
      centered
      light
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

      <v-tab>
        Câmera
        <v-icon>camera_alt</v-icon>
      </v-tab>

      <!-- Tabs content -->
      <v-tab-item>
        <v-text-field v-model="urlImage">
          <template slot="label">
            Qual é o <strong>link</strong> da sua imagem? <v-icon style="vertical-align: middle">find_in_page</v-icon>
          </template>
        </v-text-field>
        <v-img :src="urlImage"></v-img>
      </v-tab-item>

      <v-tab-item>
        Upload
      </v-tab-item>

      <v-tab-item>
        Indisponível
      </v-tab-item>
    </v-tabs>

    <v-card>
      <v-img
        :src="image"
        trasition
      >
      </v-img>
      <v-btn
        color="primary"
        @click="classifyImage"
        :loading="classifyingImage"
        :disabled="classifyingImage"
        block
      >
        Classificar imagem
      </v-btn>
    </v-card>
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
      image: 'https://cdn.pixabay.com/photo/2017/07/23/11/46/statue-of-hercules-2531191_960_720.jpg',
      urlImage: '',
      classifyingImage: false
    }
  },
  methods: {
    classifyImage() {
      // Let's code here!
    }
  }
}
</script>

