<template>
  <div>
    <!-- <img class="login__img" src="./../assets/cafe-workspace-with-diary-picjumbo-com.jpg" alt=""> -->
    <div class="login__container">
      <div class="login__choose">
        <div @click="logIn" :class="['login__choose__item','login__choose__item1', choose == '登录'? 'login__choose__item-active':'']">登 录</div>
        <div @click="signUp" :class="['login__choose__item','login__choose__item2', choose == '注册'? 'login__choose__item-active':'' ]">注 册</div>
      </div>
      <form class="login__form">
        <input v-model="userId" class="login__input" type="text" placeholder="账号">
        <input v-if="choose === '注册'" v-model="userName" class="login__input" type="text" placeholder="姓名">
        <input v-model="userPassword" class="login__input" type="password" placeholder="密 码">
        <div @click="submit" class="login__submit">{{choose}}</div>
        <div v-if="status === 'lfailed'" class="login_failed">账号或者密码错误</div>
        <div v-else-if="status === 'sfailed'" class="login_failed">注册失败</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function(){
    return {
      choose : '登录',
      userId: '',
      userName : '',
      userPassword : '',
      status: ''
    }
  },
  methods: {
    logIn: function(){
      this.choose = '登录';
    },
    signUp: function(){
      this.choose = '注册';
    },
    submit: function(){
      if(this.choose == "登录"){
        this.axios.post("/login",{
          userId: this.userId,
          userPassword: this.userPassword
        }).then(function(res){
          this.$router.push('/home')
        }).error(function (res) {
          this.status = 'lfailed'
          setTimeout(function(){
            this.status = ''
          }.bind(this),1500)
        })
      }else{
        this.axios.post("/signUp",{
          userId: this.userId,
          userName: this.userName,
          userPassword: this.userPassword
        }).then(function(res){
          this.choose = "登录"
        }).error(function (res) {
          this.status = 'sfailed'
          setTimeout(function(){
            this.status = ''
          }.bind(this),1500)
        })
      }
    }
  }
}
</script>

<style lang="scss">
  .login__container{
    width: 80%;
    height: 6.5rem;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .login__choose{
      .login__choose__item{
        float: left;
        width: calc(50% - 1px);
        height: 1.6rem;
        font-size: 0.35rem;
        line-height: 1.6rem;
        background: #fff;
        border: 1px solid #ccc;
        border-bottom: 0;

        &.login__choose__item1{
          border-radius: 10px 0 0 0;
          border-right: 0;
        }
        &.login__choose__item2{
          border-radius: 0 10px 0 0;
          border-left: 0;
        }
        &.login__choose__item-active{
          background: #28a745;
          color: #fff;
        }
      }
    }

    .login__form{
      .login__input{
        width: calc( 100% - 2px );
        display: block;
        height: 1.6rem;
        outline: none;
        text-indent: 20px;
        font-size: 0.35rem;
        border: 1px solid #ccc;
        border-bottom: 0;
      }

      .login__select__container{
        height: 1.6rem;
        line-height: 1.6rem;
        background: #fff;
        width: calc( 100% - 2px);
        border: 1px solid #ccc;
        border-bottom: 0;
        font-size: 0.35rem;
        .login__select__span{
          text-align: center;
          display: block;
          float: left;
          text-indent: 20px;
          color: #666;
        }
        .login__select{
          height: 100%;
          vertical-align: top;
          outline: none;
          font-size: 0.35rem;
        }
      }
      .login__submit{
        width: calc( 100% - 2px );
        height: 1rem;
        font-size: 0.35rem;
        line-height: 1rem;
        text-align: center;
        color: #fff;
        background: #28a745;
        border: 1px solid #28a745;
        border-radius: 0 0 10px 10px;
      }
    }
  }
  .login_failed {
    height: 1.5rem;
    font-size: 0.45rem;
    line-height: 1rem;
    text-align: center;
    color: red;
    font-weight: 100;
  }
</style>
