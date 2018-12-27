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
        <v-text-field>
          <template slot="label">
            Qual é o <strong>link</strong> da sua imagem? <v-icon style="vertical-align: middle">find_in_page</v-icon>
          </template>
        </v-text-field>
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
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>

