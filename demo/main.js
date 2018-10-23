import Vue from 'vue'
// import LatexEditor from '../src/index'
import '../dist/latexEditor.css'
import LatexEditor from '../dist/latexEditor'
import App from './App'

Vue.use(LatexEditor)

new Vue({
  render: h => h(App)
}).$mount('#app')