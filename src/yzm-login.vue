<template>
        <div class="lecturer-login-right">
            <div class="login-right-header">
                   <p class="yzm-txt">通过手机验证码登录</p>
            </div>
            <div class="login-right-body">
                <div class="bottom-border"><span>手机号</span><input type="text"><router-link class="yzm-obtain" to="">获取验证码</router-link></div>
                <div class="bottom-border"><span>验证码</span><input type="text"></div>
                <router-link class="login-right-bottom" to="/home">登录</router-link>
            </div>
        </div>
</template>
<script>

    export default {
        components: {

        }

    }
</script>

<style lang="less">
.yzm-txt{
    display: block;
    width:420px;
    border-bottom:2px solid rgb(220, 217, 217);
    margin:0 auto;
    padding: 56px 0 20px 0;
    font-weight: bolder;
    font-size:16px;
    letter-spacing: 2px;
}
.yzm-obtain{
    font-size:18px;
    color: #9bc604;
}
   
</style>