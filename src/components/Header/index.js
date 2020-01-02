import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from '../../utils/utils';
import axios from '../../axios';

class Header extends React.Component {
  state = {};
  componentWillMount() {
    this.setState({
      userName: '莱茵月牙'
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000)
  }
  getWeatherAPIDate() {
    let city = encodeURIComponent('杭州');
    axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=kwQXPVDYPZIYArkpi3rQT7aZHTGTCCB2'
    }).then((res) => {
      if(res.status == 'success') {
        let data = res.result[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }
  render() {
    return (
      <div class="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">情转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;