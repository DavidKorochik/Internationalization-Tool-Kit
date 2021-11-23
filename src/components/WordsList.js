import React, { useState, useEffect } from 'react';
import { Layout, Menu, Table, Badge, Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import languageService from '../services/languageService';
import {
  DownOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;

export default function WordsList() {
  const [collapsed] = useState(false);
  const [dataTranslation, setDataTranslation] = useState([]);

  const columns = [
    {
      title: 'Key',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: 'Value',
      key: 'value',
      dataIndex: 'value',
    },
  ];

  const expandedRowRender = () => {
    const translationSentences = dataTranslation.map((t) => t.translations);
    console.log(translationSentences);

    const columns = [
      {
        title: 'Language',
        key: 'language',
        dataIndex: 'language',
      },
      {
        title: 'Translation',
        key: 'translation',
        dataIndex: 'translation',
      },
    ];

    return (
      <Table
        columns={columns}
        bordered
        dataSource={translationSentences.map((trans) =>
          trans.map((t, index) => ({
            key: index,
            language: t.language !== 'English' ? t.language : '',
            translation: t.language !== 'English' ? t.sentence : '',
          }))
        )}
      />
    );
  };

  useEffect(() => {
    (async () => {
      const translations = await languageService.getWordTranslation();

      setDataTranslation(translations);
    })();
  }, []);

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

        <Table
          expandable={{ expandedRowRender }}
          columns={columns}
          bordered
          dataSource={dataTranslation.map((t) => ({
            key: t.key,
            value: t.translations.map((trans) =>
              trans.language === 'English' ? trans.sentence : ''
            ),
          }))}
        />
      </Content>
    </Layout>
  );
}
