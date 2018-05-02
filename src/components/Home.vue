<template>
  <div class="home">
    <home-swiper class="home__swiper" ref="swiper"></home-swiper>
    <list :items="items" :url="url"></list>
    <!-- <footer-component :link-actived="linkActived"></footer-component> -->
  </div>
</template>

<script>
import FooterComponent from './common-components/footer'
import HomeSwiper from './home-components/home-swiper'
import List from './common-components/list'

export default {
  name: 'home',
  data () {
    return {
      linkActived: '/home',
      items: [],
      url: 'Detail'
    }
  },


  created: function(){
      let userId = sessionStorage.getItem('userId');
      if(userId === null){
        this.$router.push('/')
      }
     this.axios.get('/home').then((res) => {
       this.items = res.data
       this.items.forEach((item,index)=> {item.chartVal =  Number(parseInt((item.projectFortune / item.projectAim)*100))})
     })
   },
  mounted: function(){
    this.$refs.swiper.$el.style.height = screen.width/2+'px';
  },
  components: { FooterComponent, HomeSwiper, List },
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

.home__swiper{
  margin-bottom: 15px;
}
</style>
