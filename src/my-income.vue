<template>
    <div class="my-income">
        <div class="five-left">
            <div class="five-left-header">
                <img src="../image/tx.png" alt="">
                <div class="left-header-body">
                    <div class="user">翟萌萌<img src="../image/woman.svg" alt=""></div>
                    <div class="Integrity">贫穷</div>
                    <div class="header-tail">
                        <svg class="icon shouji" aria-hidden="true">
                            <use xlink:href="#icon-shouji"></use>
                        </svg>
                        <router-link class="exit" to="/">-exit-</router-link>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div class="five-left-money">
                <router-link class="right-click click3" to="">申请提现</router-link>
                <div class="money-number">账户余额<span>0.00</span>元</div>
            </div>
            <div class="yls">
                <p></p>
                <div></div>
                <span></span>
            </div>
        </div>
        <div class="yl-right">
            <div class="five-right-top">
                <div class="right-top-box2">
                    <img style="width:200px;margin-top:40px;" src="../image/wdtp.png" alt="">
                </div>
                <div class="right-top-box2 box-color">
                    <span></span>
                    <img src="../image/yl.jpg" alt="">
                    <span style="margin:0;"></span>
                </div>
            </div>
            <div class="bottom-color">
                <div class="bt">
                    <img src="../image/polo.gif" alt="">
                    <img src="../image/polo.gif" alt="">
                    <img src="../image/polo.gif" alt="">
                    <div>
                    </div>
                </div>
                <div class="w1">
                    <span class="span2"></span>
                    <span class="span1"></span>
                </div>
                <div class="w2"></div>
                <div class="w3"></div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        methods: {

        },

    }
</script>

<style lang="less">
    .my-income {
        width: 1200px;
        height: 588px;
        display: block;
    }

    .yl-right {
        width: 720px;
        float: right;
        height: 588px;
    }

    .right-top-box2 {
        width: 350px;
        height: 284px;
        background: #fff;
        text-align: center;

    }

    .box-color {
        background: rgb(255, 172, 186);
    }

    .box-color img {
        width: 348px;
    }

    .box-color span {
        display: block;
        height: 10px;
        background: #fff;
        margin-top: 10px;
    }

    .yls {
        float: left;
        width: 460px;
        height: 252px;
        background: rgb(255, 172, 186);

    }

    .yls p {
        width: 100%;
        height: 10px;
        background: #fff;
        margin-top: 20px;
    }

    .yls div {
        width: 15%;
        height: 150px;
        background: rgb(255, 172, 186);
        border-right: 2px solid #fff;
    }

    .yls span {
        display: block;
        width: 20px;
        height: 20px;
        background: rgb(255, 255, 255);
        border-radius: 50%;
        margin-left: 60px;
        margin-top: -10px;
    }

    .yl-right .bottom-color {
        background: rgb(255, 172, 186);
        width: 720px;
        height: 280px;
        position: relative;
    }

    .bottom-color .bt {
        position: absolute;
        width: 280px;
        height: 180px;
        background: rgb(255, 255, 255);
        top: 50px;
        left: 34px;
    }

    .bottom-color .bt div {
        width: 100%;
        height: 10px;
        background: rgb(255, 172, 186);
        margin-top: -10px;
    }

    .bottom-color .bt img {
        width: 60px;
        margin: 5px 0 0 20px;
    }

    .w1 {
        width: 80px;
        height: 80px;
        background: rgb(255, 255, 255);
        position: absolute;
        top: 48px;
        right: 100px;
        border-radius: 50%;
    }

    .w2 {
        width: 48px;
        height: 48px;
        background: rgb(255, 255, 255);
        position: absolute;
        top: 50px;
        right: 70px;
        border-radius: 50% 10% 50% 50%;
    }

    .w3 {
        width: 48px;
        height: 48px;
        background: rgb(255, 255, 255);
        position: absolute;
        top: 50px;
        right: 220px;
        border-radius: 10% 50% 50% 50%;
    }

    .w1 {
        width: 140px;
        height: 100px;
        background: rgb(255, 255, 255);
        position: absolute;
        top: 80px;
        right: 100px;
        border-radius: 50% 50% 40% 40%;
    }

    .w1 .span1 {
        float: right;
        width: 34px;
        height: 30px;
        border-radius: 50% 10% 50% 30%;
        background: rgb(255, 172, 186);;
        margin-top: 30px;
        margin-right: 18px;
    }

    .w1 .span2 {
        float: left;
        width: 34px;
        height: 30px;
        border-radius: 10% 50% 30% 50%;
        background: rgb(255, 172, 186);
        margin-top: 30px;
        margin-left: 18px;

    }

    .exit{
        color: rgb(201, 201, 201);
    }
    .exit:hover{
        color: rgb(255, 172, 186);
    }
</style>