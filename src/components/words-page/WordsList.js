import React, { useState, useEffect } from 'react';
import { Layout, Menu, Table } from 'antd';
import { Link } from 'react-router-dom';
import languageService from '../../services/languageService';
import WordRow from './WordRow';
import AddWord from './AddWord';

const { Sider, Content } = Layout;

export default function WordsList() {
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

  const dataSource = dataTranslation.map((x) => ({
    key: x.key,
    value: x.translations
      .filter((trans) => trans.language === 'English')
      .map((trans) => trans.sentence),
  }));

  const expandedRowRender = (record) => {
    const selectedTranslation = dataTranslation.find(
      (x) => x.key === record.key
    );

    const columns = [
      {
        title: 'Language',
        dataIndex: 'language',
        key: 'language',
      },
      {
        title: 'Translation',
        dataIndex: 'sentence',
        key: 'sentence',
        render: (translatedSentece) => (
          <WordRow translatedSentece={translatedSentece} />
        ),
      },
    ];

    return (
      <Table
        columns={columns}
        bordered
        pagination={false}
        dataSource={selectedTranslation.translations.filter(
          (x) => x.language !== 'English'
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
      <Sider trigger={null}>
        <div className='logo'>...</div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['2']}>
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
            marginBottom: '70px',
          }}
        >
          Pal4Pal Internationalization Tool Kit
        </h1>
        <AddWord
          dataTranslation={dataTranslation}
          setDataTranslation={setDataTranslation}
        />
        <Table
          expandable={{ expandedRowRender }}
          columns={columns}
          bordered
          dataSource={dataSource}
        />
      </Content>
    </Layout>
  );
}
