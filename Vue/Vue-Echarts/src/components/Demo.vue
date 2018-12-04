<template>
  <div>
    <!-- 表1 -->
    <div class="number-of-merchants-nationwide">
      <div id="numberOfMerchantsNnationwide" class="number-of-merchants-nationwide-charts"></div>
      <p>《全国商户数》《全国用户数》</p>
    </div>
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
      let numberOfMerchantsNnationwide = this.$echarts.init(document.getElementById('numberOfMerchantsNnationwide'));
      numberOfMerchantsNnationwide.setOption({
        title: {
          text: '全国商户数 & 全国用户数统计图',
          left: 'center'
        },
        tooltip : {
          trigger: 'item'
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
          }
        }
      });

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
.number-of-merchants-nationwide {
  text-align: center;
}
.number-of-merchants-nationwide-charts {
  width: 300px;
  height: 300px;
  background: rgb(0, 153, 255);
}
</style>
