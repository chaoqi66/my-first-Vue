<template>
  <div class="app-container">
    <!-- 头部区域 -->
    <mt-header fixed title="Vue项目">
      <span slot="left" @click="goback" v-show="flag">
    	<mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间留坑的地方 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge"> {{ $store.getters.getAllCount }} </span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/more">
        <span class="mui-icon mui-icon-more"></span>
        <span class="mui-tab-label">留言</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
	data(){
		return {
			flag:false
		}
	},
	methods:{
		goback(){
			this.$router.go(-1);
		}
	},
	created(){
		this.flag=this.$route.path==='/home'?false:true
	},
	watch:{
		"$route.path": function(newval){
			if(newval==='/home'){
				this.flag=false
			}else{
				this.flag=true
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  position: relative;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

//这个类名是解决tabbar点击无法切换的BUG
.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

