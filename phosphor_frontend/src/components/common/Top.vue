<template>
    <div class="top">
        <div class="left">
            <img src="../../../static/title.png" class="img">
        </div>
        <div class="right">
            <span class="navigation" @click="toHome()">
                首页
            </span>
            <span class="navigation" @click="toShop()">
                商品展示
            </span>
            <span class="navigation" @click="toMain()">
                联系我们
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Top',
    data() {

    },
    methods: {
        toHome(){
            this.$router.push('/home')
        },
        toShop(){
            this.$router.push('/shop')
        },
        toMain(){
           this.$router.push('/connect') 
        }
    }
}
</script>

<style>
    .top {
        margin-top: 0px;
        width: 100%;
        height: 50px;
        background-color: black;
    }
    .left {
        width: 20%;
        float: left;
    }
    .right {
        width: 40%;
        height: 50px;
        float: left;
        margin-left: 30%;
        text-align: center;
        padding-top: 14px;
    }
    .top .img{
        width:100px;
        height: 45px;
        margin-right: 100px;
    }
    .navigation {
        color: white;
        margin-left: 10%;
    }
</style>