<template>
  <div>
    <div class="font36 header">输入资助金额</div>
    <input class="input" type="number" v-model="projectAim" required/>
    <p class="btn" v-on:click="commit">确认</p>
<!--    <div v-if="status == 'success'" class="success font36">
      支付成功
    </div>
    <div v-else-if="status == 'failed'" class="fail font36">
      支付失败
    </div>-->
  </div>
</template>


<script>
export default {
  title: 'purchase',
  components:{},
  data () {
    return {
      projectAim: "",
      linkActived: '/purchase',
      status:''
    }
  },
  methods: {
    commit: function () {
      let projectID = this.$route.params.projectID
      this.axios.post("/trade",{projectId: projectID,value: this.projectAim}).then((res) => {
        this.$route.push("/user")
      })
    }
  }
}
</script>



<style scoped>
.header{
    padding-top:0.5rem;
    margin-bottom:-1rem;
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
  .success{
    position: fixed;
    line-height: 3rem;
    top: 3rem;
    left:0;
    right:0;
    background: #fff;
    width: 80%;
    height: 3rem;
    margin: 0 auto;
    z-index: 999;
  }
  .fail{
    position: fixed;
    line-height: 3rem;
    top: 3rem;
    left:0;
    right:0;
    background: #fff;
    width: 80%;
    height: 3rem;
    margin: 0 auto;
    z-index: 999;
  }
</style>
