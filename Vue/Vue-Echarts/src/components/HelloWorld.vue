<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px', float: 'left'}"></div>
    <div id="yourChart" :style="{width: '300px', height: '300px', float: 'left'}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      let yourChart = this.$echarts.init(document.getElementById('yourChart'));
      let data = [];
      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      });
      yourChart.setOption({
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
            data: ['line']
        },
        polar: {
            center: ['50%', '54%']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {
            min: 0
        },
        series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
        }],
        animationDuration: 2000
      })
    }
  },
  mounted() {
    this.drawLine();
  }
};
</script>


<style scoped>

</style>
