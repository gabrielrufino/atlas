<template>
  <v-container>
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

        <canvas id="myChart"></canvas>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Chart from 'chart.js'
import ml5 from 'ml5'

export default {
  name: 'RecognizePicture',
  data() {
    return {
      image: '',
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
    plotChart (predictions) {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'bar',

          // The data for our dataset
          data: {
              labels: predictions.map(prediction => prediction.className),
              datasets: [{
                  label: "Certeza da classificação",
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: predictions.map(prediction => prediction.probability),
              }]
          },

          // Configuration options go here
          options: {}
      })

      return chart
    },
    classifyImage () {
      (async () => {
        const img = document.getElementById('image')
        const classifier = await ml5.imageClassifier('MobileNet')
        const predictions = await classifier.predict(img)

        this.plotChart(predictions)              
      })()
    }
  }
}
</script>

