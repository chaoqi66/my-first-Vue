<template>
    <div class="shopcar">
        <div class="goodslist">
            <div class="mui-card" v-for="(item, i) in list" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
                        <mt-switch v-model="item.selected" 
                        @change="selectedChange(item.id, item.selected)"></mt-switch>
                        <img :src="item.img">

                        <div class="info">
                            <h1> {{ item.title }} </h1>
                            <p>
                                <span class="price">￥ {{ item.price }} </span>
                                <numbox value="2" :initCount="item.count" :goodsid="item.id"></numbox>
                                <!-- item.id是用来删除car的数据，i是用来删除页面的数据 -->
                                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>


					</div>
				</div>
			</div>
        </div>

        <!-- 结算区域 -->

        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan">
					<div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选
                             <span class="red"> 
                            {{ $store.getters.getCountAndVal.count }} 
                            </span> 件，
                            总价<span class="red">￥ {{ $store.getters.getCountAndVal.val }} </span>
                        </p>
                    </div>
                    <div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
				</div>
			</div>
		</div>


    </div>
</template>

<script>
import numbox from '../sub/shopnumbox.vue'
export default {
    data(){
        return {
            list: []
        }
    },
    created(){
        this.getlist()
    },
    methods: {
        getlist(){
            this.list = this.$store.state.car
            // console.log(this.list)
        },
        remove(id, index){
            this.list.splice(index,1)
            this.$store.commit('removecar', id)
        },
        selectedChange(id, val){
            // console.log(id+"---"+val)
            this.$store.commit('updateSelected', {id, selected: val})
        }
    },
    components: {
        numbox
    }
}
</script>

<style scoped lang="scss">
.shopcar{
    margin-bottom: 50px;
    background-color: #eee;
    overflow: hidden;
    .goodslist{
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }
        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        .info{
            .price{
                color:red;
                font-weight: 700;
            }
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color: red;
            font-size: bold;
        }
    }
}
</style>


