import React from 'react';
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component  {
  componentWillMount () {
    const MenuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      MenuTreeNode
    })
  }
  // 菜单渲染 --递归
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
    return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }
  render () {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>SYDS</h1>
        </div>
        <Menu theme="dark">
          {this.state.MenuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default NavLeft;