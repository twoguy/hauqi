<template>
  <div class="hello">
    <header-conponent></header-conponent>
    <home-swiper ref="swiper"></home-swiper>
    <footer-conponent :link-actived="linkActived"></footer-conponent>
  </div>
</template>

<script>
import HeaderConponent from './common-components/header'
import FooterConponent from './common-components/footer'
import HomeSwiper from './home-components/home-swiper'

export default {
  name: 'home',
  data () {
    return {
      linkActived: '/'
    }
  },
  components: { HeaderConponent, FooterConponent, HomeSwiper },
  mounted: function(){
    this.$refs.swiper.$el.style.height = screen.width/2+'px';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
