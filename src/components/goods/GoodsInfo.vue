<template>
    <div class="goodsinfo-container">

        <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>
        
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<img :src="goodsinfo.img_url" alt="">
					</div>
				</div>
			</div>


        <div class="mui-card">
			<div class="mui-card-header"> {{ goodsinfo.title }} </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                          市场价：<del>￥ {{ goodsinfo.market }} </del>&nbsp;&nbsp;
                          销售价：<span class="now_price">￥ {{ goodsinfo.sell }} </span>
                    </p>
                        <p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.residue"></numbox> </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addcar">加入购物车</mt-button>
                    </p>
				</div>
			</div>
		</div>


    </div>
</template>

<script>
import numbox from "../sub/numbox.vue"
export default {
    data(){
        return {
            id: this.$route.params.id,
            goodsinfo:{},
            ballflag: false,
            selectedCount: 1
        }
    },
    components:{
        numbox
    },
    created(){
        this.getgoodsinfo()
    },
    methods:{
        getgoodsinfo(){
            this.$axios.get('/static/mock/goodslist.json').then(res => {
                this.goodsinfo=res.data.message[this.id-1]
            })
        },
        addcar(){
            this.ballflag=!this.ballflag;

            //拼接出一个要保存到 store 里面的 car数组 中的商品信息对象
            var goodsinfo= {
                id: this.id,
                count: this.selectedCount,
                price: this.goodsinfo.sell,
                selected: true,
                img: this.goodsinfo.img_url,
                title: this.goodsinfo.title
            }

            //调用store中的mutation来保存
            this.$store.commit('addtocar', goodsinfo)
        },
        beforeEnter(el) {
            el.style.transform="translate(0,0)"
        },
        enter(el,done){
             // 获取小球的 在页面中的位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取 徽标 在页面中的位置
            const badgePosition = document
              .getElementById("badge")
              .getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el){
            this.ballflag = !this.ballflag;
        },
        getSelectedCount(count){
            //把值保存到data
            this.selectedCount=count
            // console.log(this.selectedCount)
        }
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  margin-bottom: 50px;
  background-color: #eee;
  overflow: hidden;
  .ball{
      width: 15px;
      height: 15px;
      border-radius: 50%;
      position: absolute;
      z-index: 99;
      background-color: red;
      top: 540px;
      right: 208px;
  }
  img {
      width: 100%;
  }
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
