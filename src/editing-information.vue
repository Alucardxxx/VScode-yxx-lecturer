<template>
    <div class="editing-information">
        <ul class="editing-information-input">
            <li class="information-input-list">
                <span class="tips">姓名</span>
                <input class="information-input" type="text" placeholder="请输入姓名">
            </li>
            <li class="information-input-list">
                <span class="tips">出生日期</span>
                <input class="information-input" type="text" disabled='disabled' placeholder="本项不可输入，填写完身份证信息后自动输入">
            </li>
            <li class="information-input-list">
                <span class="tips">性别</span>
                <select class="information-input">
                    <option value="man">男</option>
                    <option value="woman">女</option>
                </select>
            </li>
            <li class="information-input-list photo-list">
                <span class="tips">手机号</span>
                <input class="information-input" type="text" placeholder="请输入手机号">
                <a href="javascript:;">获取验证码</a>
            </li>
            <li class="information-input-list">
                <span class="tips">邮箱</span>
                <input class="information-input" type="text" placeholder="请输入邮箱">
            </li>
            <li class="information-input-list">
                <span class="tips">身份证号</span>
                <input class="information-input" type="text" placeholder="请输入身份证号">
            </li>
            <li class="information-input-list">
                <span class="tips">微信号</span>
                <input class="information-input" type="text" placeholder="请输入微信号">
            </li>
            <li class="information-input-list">
                <span class="tips" >QQ号</span>
                <input class="information-input" type="text" placeholder="请输入QQ号">
            </li>
            <div class="login-password-tail">
                <router-link to="" ></router-link>
                <router-link to="" class="confirm password-tail-btn" href="javascript:;">保存信息</router-link>
                <router-link to="" class="cancellation password-tail-btn" href="javascript:;">取消修改</router-link>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {

        components: {

        },
     
    }
</script>
<style lang="less">
  

    .editing-information {
        width: 860px;
        height: 588px;
        background: #fff;
        float: right;
    }

    .editing-information-input {
        width: 100%;
        height: 100%;
    }

    .information-input-list {
        padding-top: 20px;
        padding-left: 40px;
    }

    .information-input-list:before,
    .information-input-list:after {
        content: "";
        display: block;
        clear: both;
    }


    .information-input-list .tips {
        display: inline-block;
        font-size: 14px;
        color: rgb(155, 155, 155);
        width: 60px;
        text-align: right;
        padding-right: 16px;
    }

    .information-input {
        height: 40px;
        width: 400px;
        border: 1px solid rgb(201, 201, 201);
        box-sizing: border-box;
        border-radius: 2px;
        letter-spacing: 2px;
        text-indent: 10px;
        font-size: 14px;
    }

    .photo-list input {
        width: 250px;
        float: left;
    }

    .photo-list span {
        float: left;
        padding-top: 10px;

    }

    .photo-list a {
        float: left;
        height: 40px;
        width: 150px;
        border: 1px solid rgb(201, 201, 201);
        box-sizing: border-box;
        border-radius: 2px;
        letter-spacing: 2px;
        font-size: 14px;
        color: rgb(114, 114, 114);
        text-align: center;
        line-height: 40px;
    }

    
</style>