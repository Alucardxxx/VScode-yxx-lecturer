<template>
        <div class="authentication">
            <div class="authentication-left">
                <div class="authentication-left-top">
                    <div class="authentication-left-add">
                        <div class="add-idcard"><img src="../image/sz.svg" alt="">
                        </div>
                        <p class="add-txt1">身份证（正面）<span class=" txt2-color">【认证失败】</span></p>
                    </div>
                    <div class="authentication-left-add">
                        <div class="add-idcard"><img src="../image/sz.svg" alt=""></div>
                        <p class="add-txt1">身份证（正面）<span class=" txt2-color">【认证失败】</span></p>
                    </div>
                    <p class="add-txt3"><span>请上传真实的身份证信息</span>
                        照片要四角对其，如有模糊， 反光， 太暗， 则不予认证
                    </p>
                </div>
                <div class="authentication-left-bottom">
                    <div class="authentication-left-add">
                        <div class="add-idcard"><img src="../image/sz.svg" alt=""></div>
                        <p class="add-txt1">资质认证 <span class=" txt2-color">【认证失败】</span></p>
                    </div>
                    <p class="add-txt3"><span>请上传真实的身份证信息</span>
                        照片要四角对其，如有模糊， 反光， 太暗， 则不予认证
                    </p>
                </div>
            </div>
            <div class="authentication-right">
                <div class="authentication-right-header">
                    <span class="authentication-title">个人简介</span>
                </div>
                <div class="righ-input-body">
                    <textarea class="input-text">
                            涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，
                            毕业于南方冶金学院（现江西理工大学）计算机系1996级。2004年，
                            担任长沙人民广播电台星沙之声频道的主持人。2006年，   
                            转战电视节目，随后主持了长沙晚间法律节目《方圆调查》。2010年，担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的嘎嘣观察员1。2011年，主持浙江钱江频道电视新闻时评类节目《九点半》2。2012年，主持了江西卫视新闻评论类节目《深度观察》3。2013年，担任河北卫视情感谈话节目《情感大裁判》的主持人4。2014年，担任天津卫视职场招聘节目《非你莫属》的主持人5；同年，
                            在天津卫视情感综艺类节目《爱情保卫战》中担任情感导师
                    </textarea>
                    <div class="authentication-tail">
                            <router-link to="/authentication-loading" class="confirm authentication-btn" href="javascript:;">保存信息</router-link>
                            <router-link to="/authentication" class="cancellation authentication-btn" href="javascript:;">取消修改</router-link>
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
    .authentication-tail {
    display: block;
    width: 300px;
    padding-left: 20px;
    padding-top: 30px;
  }

  .authentication-tail .authentication-btn {
    display: inline-block;
    height: 38px;
    width: 140px;
    border-radius: 6px;
    margin-left:10px;
    text-align: center;
    font-size: 14px;
    line-height: 38px;
   
  }

  .authentication-tail .confirm {
    background: #00aaff;
    color: #fff;
  }

  .authentication-tail .cancellation{
    color: #000;
    box-sizing: border-box;
    border: 1px solid rgb(204, 204, 204);
  }



    </style>