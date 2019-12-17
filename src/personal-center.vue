<template>
    <div class="five">
        <div class="five-left">
            <div class="five-left-header">
                <img src="../image/tx.png" alt="">
                <div class="left-header-body">
                    <div class="user">翟萌萌<img src="../image/woman.svg" alt=""></div>
                    <div class="Integrity">信息完整度
                        <span class="progress-bar"></span>
                        <span class="progress-level">高</span>
                    </div>
                    <div class="header-tail">
                        <svg class="icon shouji" aria-hidden="true">
                            <use xlink:href="#icon-shouji"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-mingpian"></use>
                        </svg>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xin"></use>
                        </svg>
                        <router-link class="exit" to="/">-exit-</router-link>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div class="five-left-money">
                <router-link class="right-click click3" to="">申请提现</router-link>
                <div class="money-number">账户余额<span>256</span>元</div>
            </div>
            <div class="five-left-authentication">
                <div class="authentication-xinxi">
                    <div class="authentication-img">
                        <img src="../image/smrz.svg" alt="">
                    </div>
                    <p class="add-txt1">实名认证<span class="txt2-color">【未认证】</span></p>
                </div>
                <div class="authentication-xinxi">
                    <div class="authentication-img">
                        <img src="../image/zzrz.svg" alt="">
                    </div>
                    <p class="add-txt1">资质认证<span class="txt2-color">【未认证】</span></p>
                </div>
            </div>
        </div>

        <div class="five-right">
            <div class="five-right-top">
                <div class="right-top-box">
                    <img src="../image/kctp.png" alt="">
                    <div class="box-body">
                        <p class="top-box-txt">我上传的课程</p>
                        <p class="details"><span>3</span>个</p>
                        <router-link class="details" to="/course-managemen">查看详情 ></router-link>
                    </div>
                </div>
                <div class="right-top-box">
                    <img src="../image/wdtp.png" alt="">
                    <div class="box-body">
                        <p class="top-box-txt">我的问答</p>
                        <p class="details"><span>3</span>个</p>
                        <router-link class="details" to="/my-questions">查看详情 ></router-link>
                    </div>
                </div>
            </div>
            <div class="five-right-bottom">
                <div class="right-bottom-title">
                    <span>最新学员</span><span class="bottom-title-txt">一周内新增50位学员</span>
                </div>
                <div class="right-bottom-body">
                    <div class="bottom-img">
                        <img src="../image/tx2.jpeg" alt="">
                        alis
                    </div>
                    <div class="bottom-img">
                        <img src="../image/tx2.jpg" alt="">
                        佩琪
                    </div>
                    <div class="bottom-img">
                        <img src="../image/tx4.jpeg" alt="">
                        爱丽丝
                    </div>
                    <div class="bottom-img">
                        <img src="../image/tx5.jpeg" alt="">
                        alucard
                    </div>
                    <div class="bottom-img">
                        <img src="../image/tx6.jpeg" alt="">
                        白棋书
                    </div>
                </div>
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
<script src="../font/font7/iconfont.js"></script>
<style lang="less">
    .five {
        width: 1200px;
        height: 588px;
    }

    .five-left {
        width: 460px;
        height: 588px;
        background: #fff;
        float: left;
    }


    .five-left-header {
        width: 100%;
        float: left;
        box-sizing: border-box;
        padding: 30px 0 30px 20px;
    }

    .five-left-header img {
        width: 80px;
        float: left;
    }



    .left-header-body {
        float: left;
        line-height: 30px;
        padding-left: 20px;
    }

    .user {
        width: 100px;
        font-size: 20px;
        letter-spacing: 1px;
    }

    .user:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .user img {
        width: 20px;
        float: right;
    }

    .Integrity {
        letter-spacing: 1px;
        font-size: 14px;
        color: rgb(157, 157, 157);
    }

    .progress-bar {
        display: inline-block;
        width: 180px;
        height: 10px;
        background: #00aaff;
        border-radius: 20px;
    }

    .progress-level {
        color: #00aaff;
        padding: 0 20px;

    }

    .header-tail .icon {
        color: rgb(174, 174, 174);
        margin-right: 6px;
    }

    .header-tail .shouji {
        color: #00aaff;
    }

    .five-left-money {
        float: left;
        width: 100%;
        padding: 60px 0;
        border-top: 1px solid rgb(240, 240, 240);
        border-bottom: 1px solid rgb(240, 240, 240);
    }

    .click3 {
        color: #fff;
        background: #00aaff;
        float: left;
        margin-top: 10px;
        margin-left: 40px;
    }

    .money-number {
        float: left;
        width: 100px;
        color: rgb(155, 155, 155);
        padding-left: 60px;
        line-height: 30px;
    }

    .money-number span {
        font-size: 30px;
        color: #000;
    }

    .five-left-authentication {
        float: left;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 40px;
    }

    .authentication-xinxi {
        margin: 0 20px;
        float: left;
        text-align: center;

    }

    .authentication-img {
        position: relative;
        width: 140px;
        height: 120px;
        background: rgb(245, 245, 245);
        padding: 0 20px;

    }

    .authentication-img img {
        width: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    .five-right {
        width: 720px;
        float: right;
        height: 588px;

    }

    .five-right-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 284px;
        padding-bottom: 20px;
    }

    .right-top-box {
        width: 350px;
        height: 100%;
        background: #fff;
        position: relative;
    }

    .right-top-box img {
        position: absolute;
        width: 180px;
        bottom: 0;
        right: 0;
    }

    .box-body {
        box-sizing: border-box;
        line-height: 40px;
        padding: 40px 50px;
        letter-spacing: 1px;
    }

    .top-box-txt {
        font-size: 16px;
        font-weight: bolder;

    }

    .details {
        font-size: 14px;
        color: rgb(157, 157, 157);

    }

    .details span {
        font-size: 30px;
        color: rgb(0, 0, 0);
        padding: 0 10px 0 0;
    }

    .five-right-bottom {
        width: 100%;
        height: 284px;
        background: #fff;
        box-sizing: border-box;
        padding: 40px 40px 0 40px;
    }

    .right-bottom-title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-weight: bolder;
    }

    .right-bottom-title span {}

    .bottom-title-txt {
        font-size: 14px;
        font-weight: normal;
        color: rgb(165, 165, 165);
    }

    .right-bottom-body {
        padding: 60px 0;
        display: flex;
        justify-content:space-between;
    }

    .bottom-img {
        width: 80px;
        text-align: center;
        font-size: 12px;
        color: rgb(175, 175, 175);
    }

    .bottom-img img {
        width: 80px;
        margin-bottom: 10px;
        border-radius:50%;
    }
</style>