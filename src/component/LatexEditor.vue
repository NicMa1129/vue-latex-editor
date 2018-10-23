<template>
  <div class="latex-editor-container">
    <div
      class="latex-editer__input"
      :id="id"
      :style="customInputStyle"></div>
    <div
      :class="[
        'latex-editer__tool-container',
        showTool ? 'show' : ''
      ]"
      :style="customContainerStyle">
      <div class="latex-editer__tool-bar" v-if="showBar">
        <ul class="latex-editer__tabs">
          <li
            :class="[
              'latex-editer__bar-btn',
              tab.active ? 'active' : ''
            ]"
            v-for="tab in mainData"
            :key="tab.id"
            @click.stop="changeTab(tab.id)">{{tab.id}}</li>
        </ul>
      </div>
      <div class="latex-editer__main-wrap">
        <div
          :class="[
            'latex-editer__meta-tab',
            tab.active ? 'active' : ''
          ]"
          v-for="tab in mainData"
          :key="'tab'+tab.id">
          <ul class="latex-editer__meta-wrap">
            <li
              v-for="meta in tab.metas"
              :key="meta.key"
              class="latex-editer__meta-sel"
              :style="customSelStyle"
              @click.stop="metaClick(meta.value.latex)">
              <span
                :id="`${id}_${tab.id}_${meta.key}`"
                class="latex-editer__meta-sel-inner"
                >{{meta.value.icon}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  isObject,
  ObjectToStr,
  getUniqArray,
  delObject
} from '../utils'

export default {
  name: 'LatexEditor',
  data(){
    return {
      mainData: [],
      showTool: false,
      showBar: true
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    toolBar: {
      type: Array
    },
    formulas: {
      type: Object,
      required: true
    },
    edit: {
      type: Function
    },
    customInputStyle: {
      type: Object
    },
    customContainerStyle: {
      type: Object
    },
    customSelStyle: {
      type: Object
    }
  },
  created(){
    this.initData()
  },
  mounted(){
    this.initMathField()
  },
  beforeDestroy(){
    this.removeEvent()
  },
  methods: {
    initData(){
      const uniqFormulas = []
      const formulasArr = Object.entries(this.formulas)

      for(const [ key, v ] of formulasArr){
        const ext = uniqFormulas.find(item => item.key === key)
        if(!ext) uniqFormulas.push({ key: key, value: v })
      }

      if(this.toolBar){
        const toolBar = this.toolBar.filter(bar => bar !== '')

        if(toolBar && toolBar.length > 0){
          const uniqTabs = getUniqArray(toolBar)

          uniqTabs.forEach((tab, index) => {
            const formulas = uniqFormulas.filter(meta => meta.value.tab === tab)
            const active = !!index
            this.mainData.push({
              id: tab,
              active: !active,
              metas: formulas
            })
          })
        }
      }else{
        this.showBar = false
        this.mainData.push({
          id: 'tab1',
          active: true,
          metas: uniqFormulas
        })
      }
    },

    initMathField(){
      this.answerSpan = document.getElementById(this.id)
      const config = {
        handlers: {
          edit: this.edit || function(mathField) { console.log(mathField.latex()) }
        }
      }
      this.MQ = MathQuill.getInterface(2)
      this.answerMathField= this.MQ.MathField(this.answerSpan, config)

      this.setMeta()
      this.bindEvent()
    },

    setMeta(){
      const mq = MathQuill.getInterface(2);

      this.mainData.forEach(tab => {
        tab.metas.forEach(meta => {
          const ref = `${this.id}_${tab.id}_${meta.key}`
          const dom = document.getElementById(ref)
          const mqInstance = mq.StaticMath(dom)

          if(meta.value.style && isObject(meta.value.style)){
            this.setMetaCustonStyle(meta.value.style, mqInstance.el())
          }
        })
      })
    },

    setMetaCustonStyle(style, el){
      const innderChild = el.children
      const innderEl = innderChild[innderChild.length - 1]

      if(style.root && isObject(style.root)){
        el.style.cssText = ObjectToStr(style.root)
      }

      if(style.inner && isObject(style.inner)){
        innderEl.style.cssText = ObjectToStr(style.inner)
      }

      if(style.matrix && isObject(style.matrix)){
        const matrixChild = Array.from(innderEl.children)

        matrixChild.forEach(child => {
          if(child.className.indexOf('mq-matrix') !== 1){
            child.style.cssText = ObjectToStr(style.matrix)
          }
        })
      }
    },

    bindEvent(){
      this.answerSpan.addEventListener('focus', this.answerSpanFocusCallback, true)

      this.answerSpan.addEventListener('click', this.answerSpanClickCallback)

      const body = document.getElementsByTagName('body')[0]
      body.addEventListener('click', this.bodyClickCallback)
    },

    removeEvent(){
      this.answerSpan.removeEventListener('focus', this.answerSpanFocusCallback, true)

      this.answerSpan.removeEventListener('click', this.answerSpanClickCallback)

      const body = document.getElementsByTagName('body')[0]
      body.removeEventListener('click', this.bodyClickCallback)
    },

    answerSpanFocusCallback(e){
      const pChildren = this.$parent.$children
      if(pChildren.length > 1){
        pChildren.forEach(vm => {
          if(vm._uid !== this._uid) vm.showTool = false
        })
      }
      this.showTool = true
    },

    answerSpanClickCallback(e){
      e.stopPropagation()
    },

    bodyClickCallback(e){
      e.stopPropagation()
      this.showTool = false
    },

    metaClick(latex){
      this.answerMathField.write(latex)
      this.answerMathField.focus()
    },

    changeTab(id){
      const currentTab = this.mainData.find(tab => tab.active)

      if(currentTab.id !== id){
        this.mainData.forEach((tab, i) => {
          if(tab.id === id){
            tab.active = true
          }else{
            if(tab.active) tab.active = false
          }
        })
      }

      this.answerMathField.focus()
    },

    getValue(){
      return this.answerMathField.latex()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.latex-editor-container {
  position: relative;
  width: 357px;
  ul {
    list-style: none;
    font-size: 0;
    padding: 0;
  }
  .latex-editer__input {
    display: table;
    width: 100%;
    border: 1px solid #DDDDDD;
    min-height: 50px;
  }
  .latex-editer__tool-container {
    position: absolute;
    display: none;
    top: 53px;
    left: 1px;
    width: 405px;
    background: rgba(0, 0, 0, .65);
    padding: 5px;
    border-radius: 4px;
    z-index: 99;
    &.show {
      display: block;
    }
    .latex-editer__tool-bar {
      width: 100%;
      border-bottom: 1px solid #cccccc;
      padding-bottom: 5px;
    }
  }
  .latex-editer__tabs {
    position: relative;
    width: 100%;
    .latex-editer__bar-btn {
      display: inline-block;
      padding: 5px 10px;
      font-size: 14px;
      border: 1px solid #000000;
      border-radius: 5px;
      margin-right: 5px;
      &.active {
        background: #FFFFFF;
      }
    }
  }
  .latex-editer__main-wrap {
    position: relative;
    height: 230px;
    overflow: auto;
    .latex-editer__meta-tab {
      position: absolute;
      display: none;
      top: 5px;
      left: 0;
      &.active {
        display: block;
      }
    }
    .latex-editer__meta-wrap {
      .latex-editer__meta-sel {
        display: inline-block;
        width: 40px;
        height: 35px;
        border: 1px solid #ddd;
        margin-right: 3px;
        margin-bottom: 3px;
        background: #ffffff;
        cursor: pointer;
        overflow: hidden;
        vertical-align: middle;
        color: #000000;
        border-radius: 4px;
        font-size: 12px;
        text-align: center;
      }
      .latex-editer__meta-sel-inner {
        display: table;
        height: 100%;
        margin: 0 auto;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>