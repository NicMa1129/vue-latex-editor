import Vue from 'vue'
import '../dist/latexEditor.css'
import LatexEditor from '../src/index'
import App from './App'

Vue.use(LatexEditor)

new Vue({
  render: h => h(App)
}).$mount('#app')