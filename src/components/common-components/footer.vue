<template>
  <footer class="footer">
    <router-link :class="['footer__link', linkActived == '/home' ? 'footer__link__actived' : '']" to="/home"><i class="fa fa-home"></i></router-link>
    <router-link :class="['footer__link', linkActived == '/user' ? 'footer__link__actived' : '']" to="/user"><i class="fa fa-user-circle-o"></i></router-link>
    <router-link :class="['footer__link', linkActived == '/detail' ? 'footer__link__actived' : '']" to="/detail"><i class="fa fa-file-text"></i></router-link>
  </footer>
</template>

<script>
export default {
  name: "footer",
  props: [ 'linkActived' ]
}
</script>

<style lang="scss">
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    background: #f5f5f5;
    border-top: 1px solid #dcdcdc;

    .footer__link{
      width: 33.3%;
      display: block;
      float: left;
      height: 100%;
      line-height: 60px;
      font-size: 30px;
      text-align: center;
      color: #a0a0a0;
    }

    .footer__link__actived{
      color: #6d8794;
    }
  }
</style>
