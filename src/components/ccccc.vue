<template>
<div>
<div>资金流向</div>
        <ul class="rounded-list">
        <li>为王家堡小学学生买笔记本</li>
        <li>金额：50</li>
        <li>时间：2017年7月15日</li>
        <li>发起人：朱宽</li>
        <li>接收方：杰哥小卖部</li>
		</ul>
</div>
</template>




<style scoped>

			ul{
        counter-reset: li; /* 创建一个计数器 */
        list-style: none; /* 清除列表默认的编码*/
        *list-style: decimal; /* 让IE6/7具有默认的编码 */
        font: 15px 'trebuchet MS', 'lucida sans';
        padding: 0;
        margin-bottom: 4em;
        text-shadow: 0 1px 0 rgba(255,255,255,.5);
			}

			ul ul{
				margin: 0 0 0 2em; /* 给二级列表增加一定的左边距*/
			}
		
 .detail-class>li{
     text-align:left;
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
