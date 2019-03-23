<template>
    <div class="comment">
        <h3>请您发表评论</h3>
        <hr>
        <textarea placeholder="请吐槽（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postcomment">我要吐槽</mt-button>

        <div class="cmt-list">
            <div class="cmt-itme" v-for="(item,i) in comments" :key="item.id">
                <div class="title">
                    第{{i+1}}楼 &nbsp;&nbsp;用户：匿名用户 &nbsp;&nbsp;发表时间：{{item.time}}
                </div>
                <div class="body"> {{ item.content }} </div>
            </div>

        </div>

        <!-- <mt-button type="danger" size="large" plain>加载更多</mt-button> -->
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            comments:[],
            msg: ''      
        }
    },
    created(){
        this.getcomment()
    },
    methods: {
        getcomment(){
            this.$axios.get('/static/mock/comment.json').then(res =>{
                this.comments=res.data.message
            })
        },
        postcomment(){

            if (this.msg.trim().length===0) {
                return Toast("评论不能为空")
            }else {
                return Toast("此功能正在维护中")
            }

            
        }
    },

}
</script>

<style lang="scss" scoped>
.comment{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        margin: 10px 0;
        .cmt-itme {
            font-size: 13px;
            .title{
                background-color: #eee;
            }
            .body {
                text-indent: 2em;
                line-height: 35px;
            }
        }
    }
}
</style>

