<template>
  <div class="hello">
    <home-swiper ref="swiper"></home-swiper>
    <footer-component :link-actived="linkActived"></footer-component>
  </div>
</template>

<script>
import FooterComponent from './common-components/footer'
import HomeSwiper from './home-components/home-swiper'

export default {
  name: 'home',
  data () {
    return {
      linkActived: '/'
    }
  },
  components: { FooterComponent, HomeSwiper },
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
