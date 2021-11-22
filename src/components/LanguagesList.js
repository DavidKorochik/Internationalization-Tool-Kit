import React, { useEffect, useState } from 'react';
import languageService from '../services/languageService';
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default function LanguagesList() {
  const [languages, setLanguages] = useState([]);

  const deleteLanguage = async (id) => {
    await languageService.deleteSavedLanguage(
      languages.map((lang) => lang.id !== id)
    );
  };

  useEffect(() => {
    (async () => {
      const langs = await languageService.getLanguages();
      setLanguages(langs);
    })();
  }, []);

  return (
    <>
      <h1
        style={{ display: 'flex', justifyContent: 'center', fontSize: '24px' }}
      >
        Languages List
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexFlow: 'wrap',
        }}
      >
        {languages.map((lang, index) => (
          <div
            key={index}
            style={{
              padding: '30px',
              color: 'white',
            }}
          >
            <Card
              title={lang.language}
              bordered={false}
              style={{
                width: 350,
                backgroundColor: '#40A9FF',
                borderRadius: '20px',
              }}
            >
              <h3 style={{ color: 'white' }}>{lang.abbreviation}</h3>
              <DeleteOutlined
                style={{
                  position: 'absolute',
                  bottom: '100px',
                  left: '300px',
                  fontSize: '20px',
                  color: 'red',
                }}
                onClick={() => deleteLanguage(lang.id)}
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
