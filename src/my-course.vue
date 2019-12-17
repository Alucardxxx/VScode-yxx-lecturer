<template>
    <div class="my-course">
        <div class="upload-icon-body">
            <div class="upload-icon">
                <div class="upload-icon1"></div>
            </div>
            <router-link to="/save-video"><img class="add-video" src="../image/tj.svg" alt=""></router-link>
        </div>
        <div class="be-careful">
            <p>
                1.PC端支持上传的视频为时长15分钟以内、大小1G以内。<br>
                2.移动端支持上传的视频为时长5分钟以内、大小1G以内。<br>
                3.微博视频禁止上传包含色情、违法、侵权等性质内容的视频。<br>
                4.PC端支持上传的视频为时长15分钟以内、大小1G以内。<br>
                5.移动端支持上传的视频为时长5分钟以内、大小1G以内。<br>
                6.微博视频禁止上传包含色情、违法、侵权等性质内容的视频。<br>
            </p>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

    export default {

    }
</script>
<style>
    .my-course {
        width: 860px;
        float: right;
        height: 588px;
        background: #fff;
    }

    .upload-icon-body {
        width: 150px;
        height: 150px;
        margin: 0px auto;
        padding-top: 100px;
    }

    .upload-icon {
        width: 100px;
        height: 80px;
        border: 4px solid #30d9ff;
        border-radius: 14px;
        margin: 0 auto;

    }

    .upload-icon1 {
        width: 0px;
        height: 0px;
        border: 20px solid;
        border-color: transparent transparent transparent #30d9ff;
        margin: 20px 0 0 44px;

    }

    .add-video {
        width: 30px;
        margin-left: 112px;
        margin-top: -16px;
    }

    .be-careful {
        width: 400px;
        margin: 0 auto;
        line-height:50px;
        font-size:14px;
        color: rgb(181, 181, 181);
    }
</style>