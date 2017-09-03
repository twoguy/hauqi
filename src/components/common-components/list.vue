<template>
  <ul class="program-list">
    <li class="program-list__li">
      <ul class="program-list__detail-list">
        <li class="program-list__detail-list__li">众筹项目：希望小学建设</li>
        <li class="program-list__detail-list__li">目标金额：600000￥</li>
        <li class="program-list__detail-list__li">
          <span class="program-list__detail-list__span">众筹进度：</span>
          <chart :chart-val="chartVal"></chart>
        </li>
      </ul>
    </li>
    <li class="program-list__li">
      <ul class="program-list__detail-list">
        <li class="program-list__detail-list__li">众筹项目：希望小学建设</li>
        <li class="program-list__detail-list__li">目标金额：600000￥</li>
        <li class="program-list__detail-list__li">
          <span class="program-list__detail-list__span">众筹进度：</span>
          <chart :chart-val="chartVal"></chart>
        </li>
      </ul>
    </li>
    <li class="program-list__li">
      <ul class="program-list__detail-list">
        <li class="program-list__detail-list__li">众筹项目：希望小学建设</li>
        <li class="program-list__detail-list__li">目标金额：600000￥</li>
        <li class="program-list__detail-list__li">
          <span class="program-list__detail-list__span">众筹进度：</span>
          <chart :chart-val="chartVal"></chart>
        </li>
      </ul>
    </li>
    <li class="program-list__li">
      <ul class="program-list__detail-list">
        <li class="program-list__detail-list__li">众筹项目：希望小学建设</li>
        <li class="program-list__detail-list__li">目标金额：600000￥</li>
        <li class="program-list__detail-list__li">
          <span class="program-list__detail-list__span">众筹进度：</span>
          <chart :chart-val="chartVal"></chart>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import chart from './chart'

export default {
  title: 'list',
  data: function(){
    return {
      chartVal : 70
    }
  },
  components: { chart }
}
</script>

<style lang="scss" scoped>
  .program-list{
    width: calc( 100% - 20px );
    margin: auto;

    .program-list__li{
      height: 3rem;
      margin-bottom: 15px;
      padding: 0.5rem;
      background: url('./../../assets/11111.png') #fff no-repeat top right;
      background-size: auto 100%;
      border-radius: 10px;

      .program-list__detail-list{
        height: 3rem;

        .program-list__detail-list__li{
          list-style: none;
          font-size: 0.4rem;
          text-align: left;
          position: relative;
          text-indent: 0.5rem;
          height: 1rem;
          line-height: 1rem;

          &::before{
            content: '';
            display: inline-block;
            height: 0.3rem;
            width: 0.3rem;
            background: #cad6e3;
            border-radius: 0.15rem;
            margin: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
          }

          .program-list__detail-list__span{
            float: left;
          }

          .chart{
            width: 2rem;
            height: 2rem;
            float: left;
            margin-top: -0.5rem;
          }
        }
      }
    }
  }
</style>
