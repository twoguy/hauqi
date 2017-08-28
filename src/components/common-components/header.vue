<template>
  <header class="header clearfix">
    <nav class="header__navbar">
      <div class="header__navbar__icon">
        <i class="fa fa-navicon fa-1x"></i>
      </div>
      <ul class="header__navbar__list"></ul>
    </nav>
    <div class="header__searchbar">
      <input type="text" class="header__searchbar__input" />
      <div class="header__searchbar__button">
        <i class="fa fa-search"></i>
      </div>
    </div>
    <div class="header__add">
      <i class="fa fa-plus"></i>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'header',
  data: function(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  height: 60px;
  background: #fff;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;

  .header__navbar{
    float: left;
    width: 50px;

    .header__navbar__icon{
      width: 100%;
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      color: #838383;
    }
  }

  .header__searchbar{
    width: calc( 100% - 175px );
    float: left;
    height: 30px;
    margin: 10px 5px;
    text-align: left;
    border-left: 2px solid #ececec;
    padding: 5px 0px 5px 25px;

    .header__searchbar__input{
      width: calc( 100% - 60px );
      background: #dcdcdc;
      outline: none;
      border: none;
      height: 100%;
      vertical-align: top;
      border-radius: 15px 0 0 15px;
      max-width: 180px;
      text-indent: 16px;
      font-size: 16px;
      line-height: 30px;
      overflow: hidden;
      float: left;
    }

    .header__searchbar__button{
      width: 30px;
      height: 100%;
      float: left;
      box-shadow: none;
      border-radius: 0 15px 15px 0;
      background: #dcdcdc;
      font-size: 18px;
      line-height: 30px;
      color: #fff;
    }
  }

  .header__add{
    float: right;
    width: 50px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    font-weight: lighter;
    color: #838383;
  }
}
</style>
