<template>
  <div>
      <Header></Header>
  
  <div class="subject">
      <router-view></router-view>
      
  </div>
  <Footer></Footer>
</div>
</template>
<script>
   import Footer from './Public-footer.vue'
import Header from './Public-header.vue'
  export default {
    components: {
      Header,
      Footer,
    }

  }
</script>

<style lang="less">
  .subject {
    width: 1200px;
    height: 588px;
    margin: 0 auto;
    padding: 30px 0;

  }

  .subject:before,
  .subjectt:after {
    content: "";
    display: block;
    clear: both;
  }


</style>