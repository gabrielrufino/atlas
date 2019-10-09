import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        primary: '#1B2C58',
        secondary: '#D2A784'
      }
    }
  }
})
