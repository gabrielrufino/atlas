import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['predictions'],
  mounted () {
    const data = {

    }

    const options = {

    }

    this.renderChart(data, options)
  }
}
