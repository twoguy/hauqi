<template>
  <div class="chart"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  data: function(){
    return {
      option : {
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            splitNumber:'0',
            axisLine: {            // 坐标轴线
              show: false,        // 默认显示，属性show控制显示与否
              lineStyle: {       // 属性lineStyle控制线条样式
                color: [[1, '#6d8794']],
                width: 5
              }
            },
            axisTick: {
              show: false,
            },
            axisLabel:{
              show:false
            },
            pointer : {
              width : 8,
              color : 'auto'
            },
            detail : {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              formatter:'{value}%',
              fontFamily: 'Arial',
              fontSize:'',
              width: 100,
              color: '#6d8794',
            },
            data: [{value: this.chartVal}]
          }
        ]
      }
    }
  },
  props: [ 'chartVal' ,'order'],
  mounted: function(){
    var chartsArr = document.getElementsByClassName('chart');
    var myChart = echarts.init(chartsArr[this.order]);
    myChart.setOption(this.option);
  }
}
</script>

<style>
  .chart{
    height: auto;
  }
</style>
