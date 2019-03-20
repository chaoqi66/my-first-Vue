<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/n7/jfs/t1/24714/24/8640/124174/5c77ab53E9e515e2e/8b1aa5d1fc7a5e23.jpg" alt="">
            <h1>小米8（Mi）指纹探索版，晓龙 855处理器，高清 三摄像</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1999</span>
                    <span class="old">￥2199</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/n7/jfs/t1/24714/24/8640/124174/5c77ab53E9e515e2e/8b1aa5d1fc7a5e23.jpg" alt="">
            <h1>小米8指纹探索版，晓龙855处理器，高清摄像</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1999</span>
                    <span class="old">￥2199</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img10.360buyimg.com/n7/jfs/t1/24714/24/8640/124174/5c77ab53E9e515e2e/8b1aa5d1fc7a5e23.jpg" alt="">
            <h1>小米8指纹探索版，晓龙855处理器，高清摄像</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1999</span>
                    <span class="old">￥2199</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
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
