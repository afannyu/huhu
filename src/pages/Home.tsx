import { Layout } from 'antd'
import React, { useState } from 'react'
import '../../src/App.scss'
import { Outlet } from 'react-router-dom'
import MyMenu from '../components/mymenu/MyMenu'

const { Header, Content, Sider } = Layout

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <MyMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, margin: '16px 0' }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
