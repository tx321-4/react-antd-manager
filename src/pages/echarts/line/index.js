import React from 'react';
import { Card } from 'antd';

//导入主题
import echartTheme from './../echartTheme';
import themeLight from './../themeLight';

// 全部加载
// import echarts from 'echarts'
//按需加载
import echarts from 'echarts/lib/echarts';
//必需基础组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
//导入矩形图
import 'echarts/lib/chart/line';
import ReactEcharts from 'echarts-for-react';

export default class Line extends React.Component{
  componentWillMount() {
    echarts.registerTheme('Default', echartTheme);
    echarts.registerTheme('Light', themeLight);
  }

  getOption = () => {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: { //提示条
        trigger: 'axis'
      },
      xAxis: {// X轴
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: { // Y轴
        type: 'value'
      },
      series: [ //整体数据源
        {
          name: '订单量',
          type: 'line',
          data: [1000,2000,1500,3000,2000,1200,800] //趋势点
        }
      ]
    }
    return option;
  }
  getOption2 = () => {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      legend: { 
        data: ['OFO订单量','摩拜订单量']
      },
      tooltip: { //提示条
        trigger: 'axis'
      },
      xAxis: {// X轴
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: { // Y轴
        type: 'value'
      },
      series: [ //整体数据源
        {
          name: 'OFO订单量',
          type: 'line',
          data: [1200,3000,4500,6000,8000,12000,20000] //趋势点

        },
        {
          name: '摩拜订单量',
          type: 'line',
          data: [1000,2000,5500,6000,8000,10000,12000] //趋势点

        }
      ]
    }
    return option;
  }
  getOption3 = () => {
    let option = {
      title: {
        text: '用户骑行订单'
      },
      tooltip: { //提示条
        trigger: 'axis'
      },
      xAxis: {// X轴
        boundaryGap:  false, //坐标轴从起点开始，true时在中间
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: { // Y轴
        type: 'value'
      },
      series: [ //整体数据源
        {
          name: '订单量',
          type: 'line',
          data: [1000,2000,1500,3000,2000,1200,800], //趋势点
          areaStyle: {} //区域填充颜色
        }
       
      ]
    }
    return option;
  }

  render() {
    return (
      <div>
        <Card title="基本折线图">
          <ReactEcharts option={this.getOption()} theme="Default" style={{height: 500 }} />
        </Card>
        <Card title="对比折线图">
          <ReactEcharts option={this.getOption2()} theme="Default" style={{height: 500 }} />
        </Card>
        <Card title="区域折线图">
          <ReactEcharts option={this.getOption3()} theme="Default" style={{height: 500 }} />
        </Card>
      </div>
    )
  }
}