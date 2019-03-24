<template>
    <div class="goods-list">
        <router-link class="goods-item" v-for="item in goodslist" :to="'/home/goodsinfo/' + item.id" 
        tag="div" :key="item.id">
            <img :src="item.img_url" alt="">
            <h1> {{ item.title }} </h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥ {{ item.sell }} </span>
                    <span class="old">￥ {{ item.market }} </span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余 {{ item.residue }} 件</span>
                </p>
            </div>
        </router-link>
     
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            goodslist: []
        }
    },
    
    methods: {
        getgoodslist(){
            this.$axios.get('/static/mock/goodslist.json').then(res => {
                this.goodslist=res.data.message
            })
        }
    },
    mounted(){
        this.getgoodslist()
    },
}
</script>


<style lang="scss" scoped>
.goods-list {
    margin-bottom: 44px;
    display: flex;
    flex-wrap: wrap;
    padding: 6px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img {
            width: 100%;
        }
        h1 {
            font-size: 14px;
        }
        .info{
            // background-color: ;
            p{
                margin: 0;
                padding: 5px;
            }
            .price {
                .now {
                    color: red;
                    font-size: 16px;
                    font-weight: 700;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                font-size: 12px;
                justify-content: space-between;
            }
        }
    }
}
</style>
