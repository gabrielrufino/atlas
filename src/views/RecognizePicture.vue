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
        <v-layout row wrap>
          <v-flex xs9>
            <v-text-field
              prepend-icon="link"
              label="Insira a URL da imagem"
              v-model="urlImage"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs1></v-flex>
          <v-flex xs2>
            <v-btn
              color="primary"
              block
              large
              @click="loadImageFromUrl"
            >
              Carregar
            </v-btn>
          </v-flex>
        </v-layout>
      </v-tab-item>

      <v-tab-item>
        <input id="image-upload" type="file" hidden @change="onFileChange">
        <v-btn
          color="primary"
          class="white--text"
          @click.native="openFileDialog"
        >
          Upload <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
      </v-tab-item>

      <v-tab-item>
        Em breve...
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

export default {
  name: 'RecognizePicture',
  data() {
    return {
      image: 'https://cdn.pixabay.com/photo/2017/07/23/11/46/statue-of-hercules-2531191_960_720.jpg',
      urlImage: '',
      classifyingImage: false
    }
  },
  methods: {
    loadImageFromUrl () {
      this.image = this.urlImage
    },
    openFileDialog () {
      document.getElementById('image-upload').click()
    },
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }

      var fr = new FileReader();

      fr.addEventListener("load", (e) => {
        this.image = e.target.result
      }); 

      fr.readAsDataURL( files[0] )
    },
    classifyImage() {
      // Let's code here!
    }
  }
}
</script>

