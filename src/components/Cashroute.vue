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
    created: function () {
      this.projectDate = this.$route.params.projectDate;
    }
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
