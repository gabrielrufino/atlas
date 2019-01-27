import { Bar, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  mounted () {
    const predictions = this.chartData

    const data = {
      labels: predictions.map(prediction => prediction.className),
      datasets: [{
        label: "Certeza da classificação",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: predictions.map(prediction => prediction.probability),
      }]
    }

    const options = {}

    this.renderChart(data, options)
  }
}
