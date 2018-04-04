<template>
  <div class="detail">
    <div class="m-banner" v-bind:style="{background: 'url(' + project.projectImage + ')'}"></div>
    <div class="detail-brief shadow-box">
      <h2 class="detail-brief-tittle font20">项目简介</h2>
      <p class="detail-brief-brief font16" >
        {{project.projectIntroduce}}
        <!--{{项目简介}}-->
      </p>
    </div>
    <div class="detail-box-con clearfix">
      <div class="shadow-box font16 detail-box">
        <span class="icon dollar-icon">$</span>目标金额
        <div class="font32 target-amount">{{project.projectAim}}</div>
      </div>
      <div class="detail__process shadow-box font16 detail-box">
        <span class="icon percent-icon">%</span>众筹进度
        <chart :chart-val="chartVal"></chart>
      </div>
      <div class="shadow-box font16 detail-box">
        <span class="icon people-icon">№</span>参与人数
        <div class="font32 pay-people">{{project.projectParticipated}}</div>
      </div>
      <div class="shadow-box font16 detail-box">
        <span class="icon at-icon">@</span>截止日期
        <div class="font20 begin-end">{{project.projectEndTime}}</div>
      </div>
    </div>
    <div v-on:click="redirect" class="pay-button-con">
      <img class="pay-button" src="./../assets/pay-button.png"></img>
      <p class="pay-content font20">点击参加众筹</p>
    </div>
    <div class="comment-con clearfix">
      <p class="font20 comment-tittle">评论</p>
      <div class="font16 comment-add">+</div>
    </div>
      <ul class="comment-list" v-for="">
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">字词</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">别说了，老哥，闭着眼打0</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">赞助你们</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">哎 我给你们打钱</p></li>
        <li class="clearfix"><img class="avtar" src="./../assets/avatar.png"></img><p class="font20">不够再说</p></li>
      </ul>
    <!-- <footer-component :link-actived="linkActived"></footer-component> -->
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
      project: {},
      chartVal: 70
    }
  },
  created: function(){
    this.queryDetail();
  },
  methods: {
    redirect:function(e){
      this.$router.push({name: 'Purchase', params: {projectID: this.project.projectID}})
    },
    queryDetail: function(){
      let projectID = this.$route.params.projectID;
      this.axios.get(`/detail?project=${projectID}`).then(function(res){
        this.project = res;
      })
    }
  },
  components: { FooterComponent, chart }
}
</script>

<style lang="scss" scoped>
  .detail__process{
    .chart{
      width: 4rem;
      height: 2.5rem;
      margin-top: -0.2rem;
    }
  }
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
  .text-of-one{
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  /* page often use class end */

  /* font-size set start */  div{
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
