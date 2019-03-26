<template>
  <div>
    <Loader v-if="loading"/>
  </div>
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
      loading: true
    }
  }
}
</script>
