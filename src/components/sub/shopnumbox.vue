<template>
  <div class="mui-numbox" data-numbox-min='1'  style="height:25px;width:110px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="countChange"
     ref="numbox" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

</template>

<script>
import mui from "../../lib/MUI/js/mui.min.js"

export default {
  methods:{
    countChange(){
        // console.log(this.$refs.numbox.value+"---")
        // console.log(this.goodsid)
    this.$store.commit("updateGoodsInfo", {
        id: this.goodsid,
        count: this.$refs.numbox.value
        
    })
    }
  },
   mounted(){
    //初始化
    mui('.mui-numbox').numbox()
  },
  props: ["initCount","goodsid"]
}
</script>

<style lang="scss" scoped>

</style>
