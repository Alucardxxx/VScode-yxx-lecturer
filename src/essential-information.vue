<template>
    <div class="essential-information">
    <div class="left-theme">
        <div class="left-theme-center">
            <div class="portrait-shadow">
            <img class="head-portrait" src="../image/tx.png" alt="">
            <a href="">编辑</a>
        </div>
            <router-link to="/left" class="left-theme-list">
                    <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-denglu"></use>
                        </svg>
                我的信息
            </router-link>
            <router-link to="/authentication" class="left-theme-list">
                    <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shezhi"></use>
                        </svg>
                认证信息</router-link>
            <router-link to="/password" class="left-theme-list">
                    <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-renzheng"></use>
                        </svg>
                密码管理
            </router-link>
        </div>
    </div>
    <router-view></router-view>
    </div>
</template>

<script>

     
    export default {
        methods: {
            
        },
     
    }
</script>
<script src="../font/font2/iconfont.js"></script>
<style lang="less">
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .essential-information{
        display: block;
        width:1200px;
        height:588px;
    }

    .left-theme {
        width: 320px;
        height: 588px;
        background: #fff;
        float: left;
    }

    .left-theme-center {
        display: block;
        margin: 0 auto;
        width: 120px;
        text-align: center;
        padding-top: 40px;
    }

    .head-portrait {
        width: 80px;
        display: block;
    }

    .portrait-shadow{
        position: relative;
        width:80px;
        height:80px;
        margin: 0 auto;
        overflow: hidden;
        border-radius:50%;
    }

    .portrait-shadow a{
        width:66px;
        position: absolute;
        height:20px;
        background: rgba(29, 29, 29, 0.342);
       top:60px;
       left:6px;
       font-size:12px;
       color: rgb(192, 190, 190);
    }
    .left-theme-center .left-theme-list {
        display: block;
        font-size: 16px;
        color: rgb(145, 143, 143);
        margin-top: 30px;
    }

    

</style>