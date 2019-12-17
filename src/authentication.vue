<template>
    <div class="authentication">
        <div class="authentication-left">
            <div class="authentication-left-top">
                <div class="authentication-left-add">

                    <div class="add-idcard">
                        <img src="../image/sz.svg" alt="">
                       </div>
                    <p class="add-txt1">身份证（正面）<span class=" txt2-color">【未认证】</span></p>
                </div>
                <div class="authentication-left-add">
                    <div class="add-idcard"><img src="../image/sz.svg" alt=""></div>
                    <p class="add-txt1">身份证（正面）<span class=" txt2-color">【未认证】</span></p>
                </div>
                <p class="add-txt3"><span>请上传真实的身份证信息</span>
                    照片要四角对其，如有模糊， 反光， 太暗， 则不予认证
                </p>
            </div>
            <div class="authentication-left-bottom">
                <div class="authentication-left-add">
                    <div class="add-idcard"><img src="../image/sz.svg" alt=""></div>
                    <p class="add-txt1">资质认证 <span class=" txt2-color">【未认证】</span></p>
                </div>
                <p class="add-txt3"><span>请上传真实的身份证信息</span>
                    照片要四角对其，如有模糊， 反光， 太暗， 则不予认证
                </p>
            </div>
        </div>
        <div class="authentication-right">
            <div class="authentication-right-header">
                <span class="authentication-title">个人简介</span>
                <router-link to="/authentication-fail" class="edit-information" ref="btn">
                    <img src="../image/pan.svg" alt="">
                    编辑
                </router-link>
            </div>
            <div class="righ-input-body">
                <div class="input-text">
                        涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，毕业于南方冶金学院（现江西理工大学）计算机系1996级。2004年，担任长沙人民广播电台星沙之声频道（FM105）的主持人。2006年，转战电视节目，随后主持了长沙晚间法律节目《方圆调查》。2010年，担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的嘎嘣观察员1。2011年，主持浙江钱江频道电视新闻时评类节目《九点半》2。2012年，主持了江西卫视新闻评论类节目《深度观察》3。2013年，担任河北卫视情感谈话节目《情感大裁判》的主持人4。2014年，担任天津卫视职场招聘节目《非你莫属》的主持人5；同年，
                        在天津卫视情感综艺类节目《爱情保卫战》中担任情感导师
                </div>
            </div>
        </div>
    </div>
</template>
<script>


    export default {

        components: {

        },

        methods: {
            xx() {

            }
        },

    }
</script>
<style>
    .authentication {
        width: 860px;
        float: right;
        height: 588px;
        background: #fff;
    }

    .authentication:before,
    .authentication:after {
        content: "";
        display: block;
        clear: both;
    }

    .authentication-left {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        float: left;

    }

    .authentication-left-top {
        text-align: center;
        padding: 60px 0 42px 0;
        border-bottom: 1px solid rgb(226, 226, 226);
        border-right: 1px solid rgb(226, 226, 226);
    }



    .authentication-left-add {
        display: inline-block;
        width: 200px;
        height: 160px;
        padding: 0 5px;

    }

    .add-idcard {
        position: relative;
        width: 160px;
        height: 120px;
        border: 1px dashed rgb(226, 226, 226);
        background-color: rgba(248, 248, 248, 0.85);
        margin: 0 auto;
        background: no-repeat;
        background-image:url('../image/bg.svg');
        background-size:100px;
        background-position:30px 20px;
    }

    .add-idcard img {
        width: 70px;
        margin-top: 20px;
       
    }


    .add-txt1 {
        font-size: 12px;
        padding: 20px 0;
        color: rgb(140, 172, 194);
    }

    .txt2-color {
        color: rgb(240, 74, 74);
    }

    .add-txt3 {
        width: 300px;
        font-size: 12px;
        color: rgb(194, 194, 194);
        padding-top: 10px;
        margin: 0 auto;

    }

    .add-txt3 span {
        display: block;
        padding: 5px 0;
    }

    .authentication-left-bottom {
        text-align: center;
        padding: 30px 0;
        border-right: 1px solid rgb(226, 226, 226);
    }

    .authentication-right {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        float: right;
        padding: 0 0 0 0;

    }

    .authentication-right-header {}

    .authentication-right-header:before,
    .authentication-right-header:after {
        content: "";
        display: block;
        clear: both;
    }

    .authentication-title {
        float: left;
        font-weight: 600;
        margin: 60px 0 0 40px;
    }

    .righ-input-body {
        width: 80%;
        margin: 0 auto;
        padding-top:40px;
    }

    .input-text {
        height: 340px;
        width: 100%;
        letter-spacing: 2px;
        text-indent: 10px;
        font-size: 12px;
        color: rgb(135, 135, 135);
        line-height:20px;
        resize: none;
        box-sizing: border-box;
        padding: 10px;
        
    }

</style>