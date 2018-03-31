<template>
  <form action="/startNew" method="post" class="elegant-aero">
    <label>
      <span>项目名称</span>
      <input id="name" type="text" name="projectName" placeholder="" required/>
    </label>

    <label>
      <span>项目简介</span>
      <textarea id="info" name="projectIntroduce"  placeholder="" required></textarea>
    </label>

    <label>
      <span>目标资金</span>
      <input id="email" type="number" name="projectAim" placeholder="" required/>
    </label>

    <label>
      <span>截止日期</span>
      <input id="date" type="date" name="projectEndTime" placeholder="" required/>
    </label>

    <label>
      <span>项目图片</span>
      <input id="image" type="file" name="projectImage" required/>
    </label>

    <label>
      <span>&nbsp;</span>
      <input type="submit" class="button" value="Send" />
    </label>
  </form>
</template>

<script>
    export default {
        name: "project",
        data () {
          return {
            linkActived: '/',
          }
        }
    }
</script>

<style  scoped>
  .elegant-aero {
    margin-left:auto;
    margin-right:auto;
    padding: 20px;
    font-size: 16px;
    color: #666;
  }

  .elegant-aero label>span {
    float: left;
    margin-top: 10px;
    color: #5E5E5E;
  }
  .elegant-aero label {
    display: block;
    margin: 0px 0px 5px;
  }
  .elegant-aero label>span {
    float: left;
    width: 20%;
    text-align: right;
    padding-right: 15px;
    margin-top: 10px;
    font-weight: bold;
  }
  .elegant-aero input, .elegant-aero textarea, .elegant-aero select {
    color: #888;
    width: 70%;
    padding: 0px 0px 0px 5px;
    border: 1px solid #C5E2FF;
    background: #FBFBFB;
    outline: 0;
    -webkit-box-shadow:inset 0px 1px 6px #ECF3F5;
    box-shadow: inset 0px 1px 6px #ECF3F5;
    font: 200 12px/25px Arial, Helvetica, sans-serif;
    height: 30px;
    line-height:15px;
    margin: 2px 6px 16px 0px;
  }
  .elegant-aero textarea{
    height:100px;
    padding: 5px 0px 0px 5px;
    width: 70%;
  }
  .elegant-aero select {
    appearance:none;
    -webkit-appearance:none;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
    width: 70%;
  }
  .elegant-aero .button{
    padding: 10px 30px 10px 30px;
    background: #66C1E4;
    border: none;
    color: #FFF;
    box-shadow: 1px 1px 1px #4C6E91;
    -webkit-box-shadow: 1px 1px 1px #4C6E91;
    -moz-box-shadow: 1px 1px 1px #4C6E91;
    text-shadow: 1px 1px 1px #5079A3;

  }
  .elegant-aero .button:hover{
    background: #3EB1DD;
  }
</style>
