<template>
<!-- 问题： 我们不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 max 值 -->
<!-- 我们可以 使用 watch 属性监听，来 监听 父组件传递过来的 max 值，不管 watch 会被触发几次，但是，最后一次，肯定是一个 合法的 max 数值 -->
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange"
     ref="numbox"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

</template>

<script>
import mui from "../../lib/MUI/js/mui.min.js"

export default {
  methods:{
    countChange(){
      // console.log(this.$refs.numbox.value)
      this.$emit("getcount", parseInt(this.$refs.numbox.value) )
    }
  },
  props: ["max"],
  watch: {
    max: function(newval,oldval){
      mui(".mui-numbox").numbox().setOption("max",newval)
    }
  },
  mounted(){
    //初始化
    mui('.mui-numbox').numbox()
  }
}
</script>

<style lang="scss" scoped>

</style>
