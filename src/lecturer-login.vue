<template>
    <div>
        <div class="lecturer-header">
            <img src="../image/logowz.png" alt="">
            <div class="header-register">
                <router-link class="lecturer-register" to="/phoneregister">注册</router-link>
                |
                <router-link class="lecturer-register" to="/">登录</router-link>
            </div>
        </div>
        <div class="register-subject">
            <div class="register-subjec-left">
                <img src="../image/myl.jpeg" alt="">
                <div class="subjec-left-bg"></div>
            </div>
            <div class="register-subjec-right">
                <div class="subjec-right-hover">
                    <router-vie class="right-hove">
                         <div class="txt-center">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xuesheng"></use>
                        </svg>
                        <span class="right-hove-txt">我是学生</span>
                    </div>
                    </router-vie>
                    <router-vie class="right-hove hove2">
                            <div class="txt-center">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiangshi"></use>
                        </svg>
                        <span class="right-hove-txt">我是讲师</span>
                    </div>
                    </router-vie>
                    <router-vie class="right-hove">
                        <div class="txt-center">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-HR"></use>
                        </svg>
                        <span class="right-hove-txt">我是HR</span>
                    </div>
                    </router-vie>
                </div>
                <div class="subjec-right">

                    <router-view></router-view>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        components: {

        }

    }
</script>
<script src="../font/font8/iconfont.js"></script>
<style lang="less">
    .lecturer-header {
        width: 100%;
        height: 60px;
        background: #fff;
    }

    .lecturer-header img {
        width: 200px;
        margin: 8px 0 0 80px;
        display: block;
        float: left;
    }

    .header-register {
        float: right;
        margin: 20px 80px 0 0;

    }

    .lecturer-register {
        font-size: 14px;
    }

    .register-subject {
        width: 100%;

    }

    .register-subject:before,
    .register-subject:after {
        content: "";
        display: block;
        clear: both;
    }

    .register-subject {
        width: 1100px;
    }

    .register-subjec-left {
        float: left;
        position: relative;

    }

    .register-subjec-left img {
        width: 500px;
    }

    .subjec-left-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(5, 5, 5, 0.585);
    }

    .register-subjec-right {
        float: left;
        width: 700px;
        height: 500px;
        background: #fff;
        margin-top: 80px;
        position: relative;
        margin-left: -120px;

    }

    .subjec-right-hover {
        width: 120px;
        height: 100%;
        background: rgb(69, 69, 69);
        float: left;
    }

    .txt-center{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
       

    }

    .subjec-right-hover .icon { 
        color: #fff;
        font-size: 50px;
      

    }

    .subjec-right {
        float: left;
        width: 580px;
        height: 100%;
        background: #fff;

    }

    .right-hove {
        position: relative;
        display: block;
        height: 25%;
        text-align: center;

    }

    .hove2 {
        height: 50%;
        background: #9bc604;
    }

    .right-hove-txt {
        display: block;
        width:100px;
        color: #fff;
      
    }
</style>