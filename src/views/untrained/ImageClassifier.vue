<template>
  <v-container
    fluid
    grid-list-md
  >
    <input type="file" />
    <v-text-field
      label="Class name"
      v-model="newClass"
    ></v-text-field>
    <v-btn
      color="primary"
      @click="addClass"
    >
      Add class
    </v-btn>

    <v-select
      :items="classes"
      label="Image class"
    ></v-select>
  </v-container>
</template>

<script>
export default {
  name: 'UntrainedImageClassifier',
  data() {
    return {
      newClass: '',
      classes: [],
    }
  },
  methods: {
    addClass() {
      this.classes.push(this.newClass)
      this.newClass = ''
    }
  }
}
</script>
