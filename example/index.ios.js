/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Echarts from 'native-echarts';

export default class app2 extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      chartOption: {},
      text: 'test',
      lineStyleColor: []
    };
  }

  getOption(lineStyleColor) {
    return {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
     legend: {
          orient : 'horizontal',
          y:'bottom',
          x : 'center',
          data:['直达','营销广告','搜索引擎'],
          
      },
      series : [
          {
              name:'业务指标',
              type:'gauge',
              startAngle: 180,
              endAngle: 0,
              center : ['50%', '80%'],    // 默认全局居中
              radius : 180,
              axisLine: {            // 坐标轴线
                  lineStyle: {       // 属性lineStyle控制线条样式
                      width: 100
                  }
              },
              axisTick: {            // 坐标轴小标记
                show:false,
                  splitNumber: 10,   // 每份split细分多少段
                  length :12,        // 属性length控制线长
              },
              axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                show:false,
                  formatter: function(v){
                      switch (v+''){
                          case '10': return '低';
                          case '50': return '中';
                          case '90': return '高';
                          default: return '';
                      }
                  },
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 'bolder'
                  }
              },
              splitLine:{
                  show:false
              },
              axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: lineStyleColor || [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                    width: 80
                }
            },
              pointer: {
                show:false,
                  width:0,
                  length: '0%',
                  color: 'rgba(255, 255, 255, 0.8)'
              },
              title : {
                  show : true,
                  offsetCenter: [0,-70],       // x, y，单位px
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      color: '#fff',
                      fontSize: 30
                  }
              },
              detail : {
                  show : true,
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderWidth: 0,
                  borderColor: '#ccc',
                  width: 100,
                  height: 40,
                  offsetCenter: [0, -40],       // x, y，单位px
                  formatter:'{value}%',
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                      fontSize : 50
                  }
              },
              data:[{value: 50, name: '完成率'}]
          }
      ]
    };
  }

  componentDidMount() {
    this.changeOption()
  }

  changeOption() {
    this.setState({
      chartOption: this.getOption([[0.33, '#228b22'],[0.66, '#48b'],[1, '#ff4500']])
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Echarts!
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.changeOption.bind(this)}>
          <Text style={{color: '#fff'}}>change state</Text>
        </TouchableOpacity>
        <Echarts option={this.state.chartOption}  height={300} />
      </View>
    );
  }
}

var option = {
  tooltip : {
      formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
 legend: {
      orient : 'horizontal',
    y:'bottom',
      x : 'center',
      data:['直达','营销广告','搜索引擎']
  },
  series : [
      {
          name:'业务指标',
          type:'gauge',
          startAngle: 180,
          endAngle: 0,
          center : ['50%', '80%'],    // 默认全局居中
          radius : 180,
          axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                  width: 100
              }
          },
          axisTick: {            // 坐标轴小标记
            show:false,
              splitNumber: 10,   // 每份split细分多少段
              length :12,        // 属性length控制线长
          },
          axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            show:false,
              formatter: function(v){
                  switch (v+''){
                      case '10': return '低';
                      case '50': return '中';
                      case '90': return '高';
                      default: return '';
                  }
              },
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bolder'
              }
          },
          splitLine:{
              show:false
          },
          axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                width: 80
            }
        },
          pointer: {
            show:false,
              width:0,
              length: '0%',
              color: 'rgba(255, 255, 255, 0.8)'
          },
          title : {
              show : true,
              offsetCenter: [0,-70],       // x, y，单位px
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  color: '#fff',
                  fontSize: 30
              }
          },
          detail : {
              show : true,
              backgroundColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
              borderColor: '#ccc',
              width: 100,
              height: 40,
              offsetCenter: [0, -40],       // x, y，单位px
              formatter:'{value}%',
              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontSize : 50
              }
          },
          data:[{value: 50, name: '完成率'}]
      }
  ]
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  button: {
    backgroundColor: '#d9534f',
    padding: 8,
    borderRadius: 4,
    marginBottom: 20
  }
});

AppRegistry.registerComponent('app2', () => app2);
