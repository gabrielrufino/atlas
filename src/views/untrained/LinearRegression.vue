<template>
  <v-container
    fluid
    grid-list-md
  >
    <Loading />
    Regressão linear
  </v-container>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  name: 'LinearRegression',
  data() {
    return {
      training: false,
    }
  },
  mothods: {
    train() {
      // Train the model
    }
  }
}
</script>
