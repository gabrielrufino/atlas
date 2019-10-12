<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-card
      class="mx-auto mb-3"
      max-width="400"
    >
      <v-card-title>Add class</v-card-title>

      <v-container>
        <v-text-field
          label="Class name"
          v-model="newClass"
        ></v-text-field>
        <v-btn
          color="primary"
          text
          @click="clearClass"
        >
          Clear
        </v-btn>
        <v-btn
          color="primary"
          @click="addClass"
        >
          Add
        </v-btn>
      </v-container>
    </v-card>

    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        id="exampleImage"
        class="white--text"
        height="200px"
        :src="exampleImage || 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'"
      >
        <v-card-title class="align-end fill-height">{{ this.exampleClass || 'Example' }}</v-card-title>
      </v-img>

      <v-card-title>Add example</v-card-title>
      <v-container>
        <v-form>
          <v-file-input
            label="Image file"
            accept="image/*"
            v-model="exampleFile"
            @change="fileToImage"
          ></v-file-input>
          <v-select
            label="Example"
            :items="classes"
            v-model="exampleClass"
          ></v-select>

          <v-btn
            color="primary"
            text
            @click="clearExample"
          >
            Clear
          </v-btn>
          <v-btn
            color="primary"
            @click="addExample"
          >
            Add
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import * as tf from '@tensorflow/tfjs'

export default {
  name: 'UntrainedImageClassifier',
  data() {
    return {
      newClass: '',
      classes: [],
      exampleFile: null,
      exampleImage: null,
      exampleClass: null,
      examples: [],
    }
  },
  methods: {
    addClass() {
      this.classes = [...this.classes, this.newClass]

      this.clearClass()
    },
    clearClass() {
      this.newClass = ''
    },
    fileToImage() {
      const reader = new FileReader()
      const file = this.exampleFile

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.exampleImage = reader.result
      }
    },
    addExample() {
      const image = new Image()
      image.src = this.exampleImage

      this.examples = [...this.examples, {
        class: this.exampleClass,
        image: this.exampleImage,
        file: this.exampleFile,
        tensor: tf.browser.fromPixels(image)
      }]

      this.clearExample()
    },
    clearExample() {
      this.exampleFile = null
      this.exampleClass = null
      this.exampleImage = null
    },
    classify() {
      const image = new Image();


      const imageTensor = tf.browser.fromPixels(image);
    }
  }
}
</script>
