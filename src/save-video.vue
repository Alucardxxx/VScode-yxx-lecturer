<template>
    <div class="save-video">
        <div class="save-video-header">
            <p class="vedio-name">极乐净土_2019090192890.mp4</p>
            <div class="up-vedio">
                <div class="vedio-loading"></div>
                <img src="../image/success.svg" alt="">
            </div>
            <span class="success">上传成功 100%</span>
            <router-link to="/my-course" class="again">从新上传</router-link>
        </div>
        <div class="video-input"><span>标题</span><input class="input-body" type="text"  placeholder="请输入课程标题"></div>
        <div class="video-input"><span>分类</span>
            <select class="input-body">
                 <option style="color: darkgrey;" disabled selected>请选择课程分类 </option>
                <option value="man">语文</option>
                <option value="woman">数学</option>
                <option value="woman">英语</option>
            </select></div>
        <div class="video-input"><span>课程简介</span><textarea class="input-body input-textarea" placeholder="请输入课程内容"></textarea></div>
        <div class="login-password-tail">
                <router-link to="/upload-success" class="confirm password-tail-btn" >保存信息</router-link>
            </div>
    </div>
</template>
<script>

    export default {

    }
</script>
<style>
    .save-video {
        width: 860px;
        float: right;
        height: 588px;
        background: #fff;
    }

    .save-video-header {
        width: 100%;
        height: 140px;
        background: rgba(225, 248, 247, 0.299);
        font-size: 14px;
        box-sizing: border-box;
        padding: 30px 40px 0 40px;
    }

    .up-vedio {
        width: 100%;
        height: 20px;
        padding-top:10px;

    }

    .up-vedio:before,
    .up-vedio:after {
        content: "";
        display: block;
        clear: both;
    }

    .vedio-loading {
        width: 96%;
        height: 8px;
        background: #00aaff;
        border-radius: 12px;
        float: left;
        margin-top:4px;
    }

    .up-vedio img {
        float: right;
        width: 14px;
     
    }

    .success{
        display: block;
        width: 100%;
        font-size:12px;
        color: rgb(172, 172, 172);
    }
    .again{
        display: block;
        text-align: right;
        color: #00aaff;
    }

    .video-input{
        width:90%;
        padding-top:20px;
        color: rgb(165, 162, 162);
     
    }

    .video-input:before,
    .video-input:after {
        content: "";
        display: block;
        clear: both;
    }

    .video-input span{
        display: block;
        float: left;
        width:100px;
        text-align: right;
        margin-top:10px;
        padding-left:10px;
    }

    .video-input .input-body{
        width:82%;
        height:40px;
        border: 1px solid rgb(201, 201, 201);
        border-radius: 2px;
        letter-spacing: 2px;
        text-indent: 10px;
        font-size: 14px;
        float: right;
        
    }

    .video-input .input-textarea{
       height:200px;
    resize: none;
    border: 1px solid rgb(201, 201, 201);
    letter-spacing: 2px;
    text-indent: 10px;
    font-size: 16px;
    }
    
  .login-password-tail .password-tail-btn {
    display: inline-block;
    height: 38px;
    width: 140px;
    margin-left: 10px;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
    line-height: 38px;
  }
</style>