<template>
  <div class="user">
    <div class="user-con clearfix">
      <img class="user-avatar" src="./../assets/demo-user.png"></img>
      <p class="user-name font32">Winifred<br>Kelly</p>
      <div class="user-items">
        <div class="user-item-con">
          <p class="user-item-tittle font16">账户余额</p>
          <p class="user-item-detail font36">231￥</p>
        </div>
        <div class="user-item-con">
          <p class="user-item-tittle font16">参与项目</p>
          <p class="user-item-detail font36">4</p>
        </div>
        <div class="user-item-con">
          <p class="user-item-tittle font16">发起项目</p>
          <p class="user-item-detail font36">0</p>
        </div>
        <div class="user-item-con">
          <p class="user-item-tittle font16">个人资料</p>
          <p class="user-item-detail font36">+</p>
        </div>
      </div>
    </div>
    <div class="join-project" v-on:click="cashRoute">
    <p class="join-project-tittle font32">参与项目</p>
        <list ></list>
    </div>
    <!-- <footer-component :link-actived="linkActived"></footer-component> -->
  </div>
</template>

<script>
import FooterComponent from './common-components/footer'
import List from './common-components/list'

export default {
  name: 'user',
  data () {
    return {
      linkActived: '/user'
    }
  },
  created: function(){
    this.query();
  },
  methods: {
    query: function(){
      // let userName
    },
    cashRoute:function(e){
      this.$router.push(`/cashroute?id=5oegb4`)
    }
  },
  components: { FooterComponent,List}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.join-project-tittle{
  text-align:left;
  border-left:25px solid #80baec;
  padding-left:10px;
  background:white;
  margin-bottom:20px;
}
.user{
    background:#eaeaea;
}
.user-con{
    background:white;
    padding-top:1rem;
}
.user-avatar{
    width:25%;
    margin:0;
    float:left;
    margin-left:0.6rem;
    margin-right:0.6rem;
}
.user-name{
    color:#707070;
    text-align:left;
}
.user-item-con{
    width:4rem;
    height:4rem;
    float:left;
    margin:0.5rem;
}
.user-item-con>p{
    text-align:left;
}
.user-items{
    width:100%;
    float:left;
}
.user-item-tittle{
    color:#707070;
}
.user-item-detail{
    margin-top:0.5rem;
    color:#80baec;
}

  .clearfix:after{
    content: " ";
    display: block;
    clear: both;
    height: 0;
  }
  .clearfix {
    zoom: 1;
  }


  div{
      font-size: 12px;
  }
  [data-dpr="2"] div{
      font-size: 24px;
  }
  [data-dpr="3"] div{
      font-size: 36px;
  }

  .font14{
      font-size: 14px;
  }
  [data-dpr="2"] .font14{
      font-size: 28px;
  }
  [data-dpr="3"] .font14{
      font-size: 42px;
  }

  .font16{
    font-size: 16px;
  }
  [data-dpr="2"] .font16{
    font-size: 32px;
  }
  [data-dpr="3"] .font16{
    font-size: 48px;
  }
  .font18{
    font-size: 18px;
  }
  [data-dpr="2"] .font18{
    font-size: 36px;
  }
  [data-dpr="3"] .font18{
    font-size: 54px;
  }
  .font20{
    font-size: 20px;
  }
  [data-dpr="2"] .font20{
    font-size: 40px;
  }
  [data-dpr="3"] .font20{
    font-size: 60px;
  }
  .font32{
    font-size: 32px;
  }
  [data-dpr="2"] .font32{
    font-size: 64px;
  }
  [data-dpr="3"] .font32{
    font-size: 96px;
  }

  .font36{
    font-size: 36px;
  }
  [data-dpr="2"] .font36{
    font-size: 72px;
  }
  [data-dpr="3"] .font36{
    font-size: 108px;
  }
</style>
