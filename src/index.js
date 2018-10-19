import LatexEditor from './component/LatexEditor.vue'

LatexEditor.install = function (Vue) {
  Vue.component(LatexEditor.name, LatexEditor)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.LatexEditor = LatexEditor
}

export default LatexEditor