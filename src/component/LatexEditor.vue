<template>
    <div>
        <div>{{count}}</div>
        <button @click="add">点击计数</button>
    </div>
</template>
<script>
    export default {
      name: 'LatexEditor',
      data(){
        return {
          count: 0
        }
      },
      methods: {
        add(){
          ++this.count
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    button {
        width: 200px;
        height: 60px;
        border: 1px solid red;
        border-radius: 50%;
    }
</style>