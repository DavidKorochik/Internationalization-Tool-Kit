import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import LanguagesInput from './LanguagesInput';

const { Header, Sider, Content } = Layout;

export default function MenuDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  // const toggle = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>...</div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        {/* <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => toggle(),
            }
          )}
        </Header> */}
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 670,
          }}
        >
          <LanguagesInput />
        </Content>
      </Layout>
    </Layout>
  );
}
