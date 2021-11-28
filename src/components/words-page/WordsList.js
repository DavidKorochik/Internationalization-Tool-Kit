import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import languageService from '../../services/languageService';
import WordRow from './WordRow';
import AddWord from './AddWord';
import PageLayout from '../PageLayout';

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
    <PageLayout>
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
    </PageLayout>
  );
}
