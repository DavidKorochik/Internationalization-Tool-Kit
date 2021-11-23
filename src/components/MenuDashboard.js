import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import LanguagesInput from './LanguagesInput';
import LanguagesList from './LanguagesList';
import WordsList from './WordsList';
import { Link, useLocation } from 'react-router-dom';

const { Sider, Content } = Layout;

export default function MenuDashboard() {
  const [collapsed] = useState(false);

  let location = useLocation();

  // const toggle = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>...</div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            <Link to='/words'>Words</Link>
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
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '30px',
              fontWeight: 800,
            }}
          >
            Pal4Pal Internationalization Tool Kit
          </h1>
          <br />
          <br />
          <br />
          <LanguagesInput />
          <br />
          <br />
          <br />
          <br />
          <LanguagesList />
        </Content>
      </Layout>
    </Layout>
  );
}
