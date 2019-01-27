import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['predictions'],
  mounted () {
    const data = {
      labels: this.predictions.map(prediction => prediction.className),
      datasets: [{
        label: "Certeza da classificação",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: this.predictions.map(prediction => prediction.probability),
      }]
    }

    const options = {}

    this.renderChart(data, options)
  }
}
