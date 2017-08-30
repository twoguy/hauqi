<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/common-components/header'
export default {
  name: 'app',
  data: function(){
    return {

    }
  },
  components: { HeaderComponent }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.clearfix::after{
  display: block;
  clear: both;
  height: 0;
  content: '';
}
html{
  background: #f2f2f2;
  margin-top: 70px;
  margin-bottom: 60px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
