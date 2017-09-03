<template>
  <div class="detail">
    <div class="m-banner"></div>
    <div class="detail-brief shadow-box">
      <h2 class="detail-brief-tittle font20">项目简介</h2>
      <p class="detail-brief-brief font16">The program is designed for a competition by flower flag whit UESTC and SWUFE</p>
    </div>
    <div class="detail-box-con clearfix">
      <div class="shadow-box font16 detail-box">
        <span class="icon dollar-icon">$</span>目标金额
        <div class="font32 target-amount">600,000￥</div>
      </div>
      <div class="shadow-box font16 detail-box">
        <span class="icon percent-icon">%</span>众筹进度
        <chart :chart-val="chartVal"></chart>
      </div>
      <div class="shadow-box font16 detail-box">
        <span class="icon people-icon">№</span>参与人数
        <div class="font32 pay-people">1,240</div>
      </div>
      <div class="shadow-box font16 detail-box">
        <span class="icon at-icon">@</span>截止日期
        <div class="font20 begin-end">2017/8/19-<br>-2017/9/20</div>
      </div>
    </div>
    <div class="pay-button-con">
      <img class="pay-button" src="./../assets/pay-button.png"></img>
      <p class="pay-content font20">点击参加众筹</p>
    </div>
    <div class="comment-con clearfix">
      <p class="font20 comment-tittle">评论</p>
      <div class="font16 comment-add">+</div>
    </div>
      <ul class="comment-list">
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">我，可爱，打钱</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">我，可爱，打钱</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">我，可爱，打钱</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">我，可爱，打钱</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">我，可爱，打钱</p></li>
      </ul>
    <footer-component :link-actived="linkActived"></footer-component>
  </div>
</template>

<script>
import FooterComponent from './common-components/footer'
import chart from './common-components/chart'

export default {
  name: 'detail',
  data () {
    return {
      linkActived: '/detail',
      chartVal: 70
    }
  },
  components: { FooterComponent, chart }
}
</script>

<style lang="scss" scoped>
  /* page main style start */
  .pay-button-con{
    background:white;
    height:3rem;
    padding-top:0.5rem;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
  }
  .comment-list>li{
    padding-top:0.3rem;
    padding-bottom:0.3rem;
    border-top:2px solid #e8e8e8;
    background: white;
  }
  .comment-list>li>img{
    padding:0.2rem;
    float:left;
    width:1.1rem;
  }
  .comment-list>li>p{
    float:left;
    line-height:1.5rem;
    border-left:1px solid #e8e8e8;
  }
  .pay-button{
    width:4rem;
  }
  .comment-tittle{
    padding-top:0.25rem;
    text-align:center;
    display:block;
    float:left;
  }
  .comment-list{
    display:block;
  }
  .comment-add{
    text-align:center;
    display:block;
    float:right;
    padding:0.25rem;
    background:white;
    -moz-box-shadow: 2px 2px #888888;
    box-shadow: 2px 2px  #888888;
  }
  .pay-content{
    color:#b1d3f0;
    font-weight:bold;
  }
  .comment-con{
    padding:0.2rem;
  }
  .icon{
    display:inline-block;
    width:0.6rem;
    height:0.6rem;
    text-align:center;
    line-height:0.6rem;
    margin-right:0.1rem;
    border-radius:50%;
    background:#66ccff;
    color:white;
    font-weight:bold;
  }
  .dollar-icon{
    background:#fcea02;
  }
  .target-amount{
    color:#fcea02;
    font-weight:bold;
    text-align:center;
    margin-top:0.4rem;
  }
  .percent-icon{
    background:#a1cee4;
  }
  .people-icon{
    background:#ace2cb;
  }
  .pay-people{
    color:#ace2cb;
    font-weight:bold;
    text-align:center;
    margin-top:0.4rem;
  }
  .at-icon{
    background:#f7aca8;
  }
  .begin-end{
    color:#f7aca8;
    font-weight:bold;
    text-align:center;
    margin-top:0.2rem;
  }
  .shadow-box{
    -moz-box-shadow:0px 0px 10px #555555; -webkit-box-shadow:0px 0px 10px #555555; box-shadow:0px 0px 10px #555555;
  }
  .detail-brief{
    width:8.5rem;
    padding:0.4rem;
    margin:auto;
    overflow:hidden;
  }
  .detail-brief-brief{
    text-align:left;
    line-height:0.8rem;
  }
  .detail-box-con{
    padding-top:0.2rem;
    width:10rem;
    overflow:hidden;
    margin:auto;
  }
  .detail-box{
    text-align:left;
    width:4rem;
    padding:0.2rem;
    margin:0.29rem;
    margin-bottom:0.1rem;
    height:2.5rem;
    float:left;
    overflow:hidden;
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
  .g-wrap{
    padding-bottom: 0.666667rem;
  }
  .m-banner{
    width: 10.0rem;
    height: 6.4rem;
    background: url("./../assets/cover.png") no-repeat;
    background-size: contain;
  }
  .m-list li{
    margin-right: auto;
    margin-left: auto;
    width: 9.733333rem;
    background-color: #fff;
    margin-bottom: 1px;
  }
  .m-list .gs-img{
    width: 2.533333rem;
  }
  .m-list .gs-details{
    width: 7.2rem;
    padding: 0.133333rem;
  }
  .m-list .gs-name{
    color: #000;
    line-height: 1.3;
  }
  .m-list .gs-price{
    margin-top: 0.266667rem;
    color: #f32a4a;
  }
  .m-list .gp-tag,.m-list .gp-num,.m-list .gp-intro{
    display: inline-block;
  }
  .m-list .gp-tag{
    padding: 0.026667rem 0.093333rem;
    background-color: #f5294c;
    color: #fff;
    border-radius: 2px;
  }
  .m-list .gs-desc{
    margin-top: 0.266667rem;
    color: #fd5100;
  }
  .m-list .gs-btn{
    margin-top: -0.4rem;
    text-align: right;
  }
  .m-list .gs-btn span{
    display: inline-block;
    margin-top: 0.133333rem;
    padding: 0.133333rem 0.4rem;
    text-align: center;
    background-color: #f5294c;
    color: #fff;
    border-radius: 2px;
  }
  /* page main style end */

  /* page reset css start */
  *{
    margin: 0;
    padding: 0;
  }
  html{
    box-sizing: border-box;
    height: 100%;
  }
  *,*:before,*:after{
    box-sizing: inherit;
  }
  body{
    margin-right: auto;
    margin-left: auto;
    max-width: 10.0rem;
    height: 100%;
    overflow-y: auto;
    background-color: #f5294c;
  }
  a:hover{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  /* page reset css start */

  /* page often use class start */
  .imgauto{
    display: block;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    height: auto;
  }
  .flex-box{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .flex1{
    -webkit-box-flex:1;
    -moz-box-flex:1;
    -webkit-flex:1;
    -ms-flex:1;
    flex:1;
  }
  .vh-cen{
    display: -webkit-box;
    display: -moz-box;

    display: -ms-flexbox;

    display: -webkit-flex;
    display: flex;

    -webkit-box-pack: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;

    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .text-of-one{
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .text-over-two{
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  /* page often use class end */

  /* font-size set start */
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
    font-size: 0.7rem;
  }
  [data-dpr="2"] .font20{
    font-size: 64px;
  }
  [data-dpr="3"] .font20{
    font-size: 96px;
  }
</style>
