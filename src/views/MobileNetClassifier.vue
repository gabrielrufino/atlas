<template>
  <v-container
    fluid
    grid-list-md
  >
    <Loading v-if="loadingClassifier"/>
    <v-layout v-else row wrap>
      <v-flex md6>
        <v-card>
          <v-card-text>
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
                <v-text-field
                  prepend-icon="link"
                  label="Input the image URL"
                  v-model="urlImage"
                >
                </v-text-field>
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
                Wait for this...
              </v-tab-item>
            </v-tabs>

            <v-img
              id="image"
              :src="image"
              trasition
            ></v-img>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              @click="classifyImage"
              :loading="classifyingImage"
              :disabled="classifyingImage"
              block
            >
              Classify Image
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

      <v-flex md6>
        <v-card>
          <v-card-text>
            <bar :chart-data="chartData"></bar>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ml5 from 'ml5'
import Loading from '@/components/Loading'
import Bar from '@/charts/Bar'

export default {
  name: 'MobileNetClassifier',
  components: {
    Loading,
    Bar
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
          label: "Certainty rate",
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
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.src = this.image

      this.classifier.predict(img, (err, predictions) => {
        this.predictions = predictions
      })
    }
  }
}
</script>

