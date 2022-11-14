import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React, { useState } from 'react'
import '../../../src/App.scss'
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

const MyMenu: React.FC = () => {
  const items: MenuItem[] = [
    {
      label: 'Option 1',
      key: '/page1',
      icon: <PieChartOutlined />,
    },
    {
      label: 'Option 2',
      key: '/page2',
      icon: <DesktopOutlined />,
    },
    {
      label: 'User',
      key: 'sub1',
      icon: <UserOutlined />,
      children: [
        {
          label: 'Tom',
          key: '/sub1/tom',
        },
        {
          label: 'Bill',
          key: '/sub1/bill',
        },
        {
          label: 'Alex',
          key: '/sub1/alex',
        },
      ],
    },
    {
      label: 'Team',
      key: 'sub2',
      icon: <TeamOutlined />,
      children: [
        {
          label: 'Team 1',
          key: '/sub2/team1',
        },
        {
          label: 'Team 2',
          key: '/sub2/team2',
        },
      ],
    },
  ]

  const navigateTo = useNavigate()
  const currentRoute = useLocation() // 获取到当前的路由
  const [defaultRoute, setDefaultRoute] = useState([currentRoute.pathname]) // 默认选中的菜单项
  // 当前展开菜单的key
  const [openKeys, setOpenKeys] = useState([''])

  // 点击切换路由
  const menuClick = (e: { key: string }) => {
    console.log('点击了', e.key)
    navigateTo(e.key)
  }

  // 菜单展开关闭的回调
  const handleOpenChange = (keys: string[]) => {
    console.log(keys)
    setOpenKeys([keys[keys.length - 1]])
  }

  // 拿着currentRoute.pathname与MyMenu数组的每一项的children的key值进行对比，如果找到了而且相等，就要他上一级的key，这个key作为openKeys数组的初始值

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={defaultRoute}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  )
}

export default MyMenu
