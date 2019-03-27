<template>
  <v-container
    fluid
  >
    <Loader v-if="loading"/>
    <v-card>
      <v-card-text>
        <v-textarea
          v-model="text"
          label="Text"
          outline
        >
        </v-textarea>
        <v-btn
          color="primary"
          @click="summarizeText"
        >
          Summarize
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  name: 'TextSummarizer',
  components: {
    Loader
  },
  data () {
    return {
      loading: false,
      text: ''
    }
  },
  mounted () {
    // this.loading = true
  },
  methods: {
    summarizeText () {

    }
  }
}
</script>
