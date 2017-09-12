<template>
  <div>
    <!-- <img class="login__img" src="./../assets/cafe-workspace-with-diary-picjumbo-com.jpg" alt=""> -->
    <div class="login__container">
      <div class="login__choose">
        <div @click="logIn" :class="['login__choose__item','login__choose__item1', choose == '登录'? 'login__choose__item-active':'']">登 录</div>
        <div @click="signUp" :class="['login__choose__item','login__choose__item2', choose == '注册'? 'login__choose__item-active':'' ]">注 册</div>
      </div>
      <form class="login__form">
        <input v-model="userName" class="login__input" type="text" placeholder="用户名">
        <input v-model="userPassword" class="login__input" type="text" placeholder="密 码">
        <div v-if="choose === '注册'" class="login__select__container">
          <span class="login__select__span">用户类型</span>
          <select v-model="userType" class="login__select">
            <option value="0">普通用户</option>
            <option value="1">活动发起者</option>
          </select>
        </div>
        <div @click="submit" class="login__submit">{{choose}}</div>
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
      userName : '',
      userPassword : ''
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
          userName: this.userName,
          userPassword: this.userPassword
        }).then(function(res){
          console.log(res);
        })
      }else{
        this.axios.post("/signUp",{
          userName: this.userName,
          userPassword: this.userPassword,
          userType: this.userType
        }).then(function(res){
          console.log(res);
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
</style>
