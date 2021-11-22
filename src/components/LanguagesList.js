import React, { useEffect, useState } from 'react';
import languageService from '../services/languageService';
import { Card, Col, Row, Divider } from 'antd';

export default function LanguagesList() {
  const [languages, setLanguages] = useState([]);

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
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
