import React from 'react';
import {Card, Button, message } from 'antd';
import './ui.less';

export default class Messages extends React.Component{
  showMessage = (type) => {
    message[type]('g')
  }
}