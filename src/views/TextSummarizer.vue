<template>
  <v-container
    fluid
  >
    <Loading v-if="loading"/>
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
import Loading from '@/components/Loading'

export default {
  name: 'TextSummarizer',
  components: {
    Loading
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
