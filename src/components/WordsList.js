import React, { useState } from 'react';
import { Collapse, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Sider, Content } = Layout;

export default function WordsList() {
  const [collapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>...</div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['2']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            <Link to='/words'>Words</Link>
          </Menu.Item>
        </Menu>
      </Sider>

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
        <Collapse defaultActiveKey={['1']}>
          <Panel header='This is panel header 1' key='1'>
            <p>Hello World</p>
          </Panel>
        </Collapse>
      </Content>
    </Layout>
  );
}
