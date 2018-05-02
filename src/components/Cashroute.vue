<template>
<div>
<div class="font32">资金流向</div>
<ul class="detail-class" v-for="projectdate in projectDate">
  <li class='font16'>{{projectdate.title}}</li>
  <li class='font16'>金额：{{projectdate.fortune}}</li>
  <li class='font16'>时间：{{projectdate.time}}</li>
  <li class='font16'>发起人：{{projectdate.starter}}</li>
  <li class='font16'>接收方：{{projectdate.receiver}}</li>
</ul>
<ul class="detail-class">
  <li>为王家堡小学学生买笔记本</li>
  <li>金额：50</li>
  <li>时间：2017年7月15日</li>
  <li>发起人：朱宽</li>
  <li>接收方：杰哥小卖部</li>
</ul>
<ul class="detail-class">
  <li>为王家堡小学学生买体育用品</li>
  <li>金额：500</li>
  <li>时间：2017年8月22日</li>
  <li>发起人：朱宽</li>
  <li>接收方：体育用品店</li>
</ul>
<ul class="detail-class">
  <li>为王家堡小学学生提供午餐</li>
  <li>金额：1500</li>
  <li>时间：2017年12月22日</li>
  <li>发起人：李明</li>
  <li>接收方：李老师</li>
</ul>
</div>
</template>

<script>
  export  default {
    name: "cashroute",
    data: function () {
      return {
        projectDate: []
      }
    },
  }
</script>


<style scoped>
 .detail-class{
     margin:auto;
     width:80%;
     list-style:none;
     background:white;
     padding:0.5rem;
     margin-bottom:1rem;
 }
 .detail-class>li{
     text-align:left;
     border-bottom:1px solid gray;
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
.input{
    margin-top:30%;
    width:100%;
    height:2rem;
    line-height:2rem;
}
.btn{
    margin-top:40%;

    background:#ffb024;
    height:2rem;
    font-size:1.5rem;
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
