<template>
    <div>
        <LatexEditor
            ref="answer1"
            id="answer1"
            :formulas="formulas" />

        <LatexEditor
            ref="answer2"
            id="answer2"
            :formulas="formulas"
            :toolBar="toolBar"
            :customInputStyle="customClass" />
        <button @click="getLatex">获取latex</button>
    </div>
</template>
<script>
import config from './config/data'
export default {
  data(){
    return {
      formulas: config.formulas,
      toolBar: config.toolBar,
      customClass: {
        width: '300px'
      }
    }
  },
  methods: {
    getLatex(){
      console.log(this.$refs.answer1.getValue())
      console.log(this.$refs.answer2.getValue())
    }
  }
}
</script>