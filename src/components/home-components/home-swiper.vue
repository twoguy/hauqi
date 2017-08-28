<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper class="home-swiper" :options="swiperOption">
    <swiper-slide>
      <img class="home-swiper__img" src="../../assets/cafe-workspace-with-diary-picjumbo-com.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="home-swiper__img" src="../../assets/girl-reading-a-book-at-home-picjumbo-com.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="home-swiper__img" src="../../assets/yummy-fresh-burger-with-french-fries-picjumbo-com.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: true,
          autoplay: 2000
        }
      }
    },
    mounted: function(){

    }
  }
</script>

<style lang="scss" scoped>
  .home-swiper__img{
    width: 100%;
    height: 100%;
  }
</style>
