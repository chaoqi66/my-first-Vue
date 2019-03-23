<template>
    <div class="goodsinfo-container">
        
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
                        <p>购买数量：<numbox></numbox> </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
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
            goodsinfo:{}
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
        }
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  margin-bottom: 50px;
  background-color: #eee;
  overflow: hidden;
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
