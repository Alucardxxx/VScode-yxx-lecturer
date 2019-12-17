<template>
    <div class="upload-success">
        <div class="save-video-header">
            <p class="vedio-name">极乐净土_2019090192890.mp4</p>
            <div class="up-vedio">
                <div class="vedio-loading"></div>
                <img src="../image/success.svg" alt="">
            </div>
            <span class="success">上传成功 100%</span>
        </div>
        <div class="save-video-body">
            <img src="../image/success.svg" alt="">
            <p class="video-body-txt1">保存成功，等待审核</p>
            <p class="video-body-txt2"> PC端支持上传的视频为时长15分钟以内,移动端支持上传<br>
                的视频为时长5分钟以内、大小1G以内。</p>
            <div class="login-password-tail upload-success-tail">
                <router-link to="/my-course" class="confirm password-tail-btn">继续上传</router-link>
            </div>
        </div>
    </div>
</template>
<script>

    export default {

    }
</script>
<style>
    .upload-success {
        width: 860px;
        float: right;
        height: 588px;
        background: #fff;
    }

    .save-video-body {
        width: 100%;
        text-align: center;
        padding-top:40px;
    }

    .video-body-txt1{
        font-size:26px;
        font-weight:600;
        padding-top:20px;
    }

    .video-body-txt2{
        font-size:14px;
      color: rgb(172, 172, 172);
      letter-spacing:3px;
      padding-top:20px;
    }

    .upload-success-tail{
      margin-left:146px;
    }
</style>