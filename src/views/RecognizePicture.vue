<template>
  <v-container>
    <loader v-if="loadingClassifier"></loader>
    <div v-else>
      <v-card>
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
        </v-container>
      </v-card>

      <v-divider class="my-3"></v-divider>

      <v-card>
        <v-container>
          <img 
            id="image"
            :src="image"
            trasition
          >
          <v-btn
            color="primary"
            @click="classifyImage"
            :loading="classifyingImage"
            :disabled="classifyingImage"
            block
          >
            Classificar imagem
          </v-btn>
          <image-predictions :chart-data="chartData"></image-predictions>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import ml5 from 'ml5'
import Loader from '@/components/Loader'
import ImagePredictions from '@/charts/ImagePredictions'

export default {
  name: 'RecognizePicture',
  components: {
    Loader,
    ImagePredictions
  },
  data() {
    return {
      classifier: null,
      loadingClassifier: true,
      image: '',
      urlImage: '',
      classifyingImage: false,
      predictions: []
    }
  },
  computed: {
    chartData () {
      return {
        labels: this.predictions.map(prediction => prediction.className),
        datasets: [{
          label: "Certeza da classificação",
          backgroundColor: 'rgb(210, 167, 132)',
          borderColor: 'rgb(210, 167, 132)',
          data: this.predictions.map(prediction => prediction.probability),
        }]
      }
    }
  },
  created () {
    this.classifier = ml5.imageClassifier('MobileNet', () => {
      this.loadingClassifier = false
    })
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
    classifyImage () {
      const img = document.getElementById('image')

      this.classifier.predict(img, (err, predictions) => {
        this.predictions = predictions
      })
    }
  }
}
</script>

