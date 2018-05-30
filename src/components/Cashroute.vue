<template>
<div>
  <div class="font32">资金流向</div>
  <div  class="detail-class" v-for="(projectdate, index) in projectDate">
      <div class='font14'><label>项目名称：</label>{{projectdate.title}}</div>
      <div class='font14'><label>金额：</label>{{projectdate.money}}</div>
      <div class='font14'><label>时间：</label>{{projectdate.time}}</div>
      <div class='font14'><label>发起人：</label>{{projectdate.starter}}</div>
      <div class='font14'><label>接收方：</label>{{projectdate.reciver}}</div>
  <!--<ul class="detail-class">
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
  </ul>-->
  </div>
  <div style="text-align: center; margin-top: 0.5rem  ;margin-bottom: 0.9rem" v-if="!flag">
    <button style="width: 75%; height: 1.2rem;" v-on:click="add">新增流向</button>
  </div>
  <div class="detail-class" v-else>
    <div class='font14'><label>项目名称：</label> <input  v-model="addDate.title"></div>
    <div class='font14'><label>金额：</label> <input  v-model="addDate.money"></div>
    <div class='font14'><label>时间：</label> <input  v-model="addDate.time"></div>
    <div class='font14'><label>发起人：</label> <input  v-model="addDate.starter"></div>
    <div class='font14'><label>接收方：</label> <input  v-model="addDate.reciver"></div>
    <p class='font14 tip' v-show="tip">请填写完整的资金流向信息！</p>
    <button class="font14" v-on:click="confirm">确认修改</button>
    <button class="font14" v-on:click="abolish">取消</button>
  </div>
</div>
</template>

<script>
  export  default {
    name: "cashroute",
    data: function () {
      return {
        projectID: '',
        projectDate: [],
        addDate: {},
        flag: false,
        tip: false
      }
    },
    created: function () {
      let userId = sessionStorage.getItem('userId');
      if(userId === null){
        this.$router.push('/');
        return
      }
      this.projectID = this.$route.params.projectID;
      this.axios.post('/getMoneyDetail',{projectId: this.projectID}).then((res) => {
        this.projectDate = res.data;
      })
    },
    methods: {
      add() {
        this.flag = true;
      },
      confirm(){
        console.log(this.addDate.title);
        if (this.addDate.title&&this.addDate.money&&this.addDate.time&&this.addDate.starter&&this.addDate.reciver){
          this.addDate.projectId = this.projectID;
          this.axios.post('/setMoneyDetail',this.addDate).then((res) => {
            this.flag = false;
            this.addDate = {};
            this.axios.post('/getMoneyDetail',{projectId: this.projectID}).then((res) => {
              this.projectDate = res.data;
            })
          })
        }else {
          this.tip = true;
          setTimeout(function(){
            this.tip = false
          }.bind(this),1500);
        }

      },
      abolish(){
        this.addDate = {};
        this.flag = false;
      }
    }
  }
</script>


<style scoped>
 .detail-class{
     margin:auto;
     width:80%;
     list-style:none;
     background:white;
     padding:0.6rem 0.6rem 0.8rem 0.6rem;
     margin-bottom:1rem;
 }
 .detail-class div{
     text-align: left;
     padding: 0.1rem ;
     border-bottom:1px solid gray;
     margin: 0.2rem;
 }
 .detail-class label{
   width: 28%;
   float: left;
   text-align: right;
 }
 .tip{
   width: 100%;
   color: red;
   text-align: center;
   margin: 0.2rem;
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
