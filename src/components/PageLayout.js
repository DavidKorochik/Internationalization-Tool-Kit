import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider, Content } = Layout;

export default function PageLayout({ children }) {
  const location = useLocation();

  return (
    <>
      <Layout>
        <Sider trigger={null}>
          <div className='logo'>...</div>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={[location.pathname === '/' ? '1' : '2']}
          >
            <Menu.Item key='1'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/words'>Words</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
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
          {children}
        </Content>
      </Layout>
      <Layout />
    </>
  );
}
